// 간단한 메모리 기반 rate limit
// 프로덕션에서는 Redis 등을 사용하는 것을 권장

const requests = new Map();

/**
 * Rate limit 체크
 * @param {string} key - Rate limit 키 (IP 주소 등)
 * @param {number} maxRequests - 최대 요청 수
 * @param {number} windowMs - 시간 윈도우 (밀리초)
 * @returns {boolean} - 허용 여부
 */
export function checkRateLimit(key, maxRequests = 5, windowMs = 60000) {
  const now = Date.now();
  const record = requests.get(key);

  if (!record) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  // 시간 윈도우가 지났으면 리셋
  if (now > record.resetAt) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  // 요청 수가 최대치를 초과하면 차단
  if (record.count >= maxRequests) {
    return false;
  }

  // 요청 수 증가
  record.count++;
  requests.set(key, record);
  return true;
}

/**
 * Rate limit 레코드 정리 (메모리 누수 방지)
 */
export function cleanupRateLimit() {
  const now = Date.now();
  for (const [key, record] of requests.entries()) {
    if (now > record.resetAt) {
      requests.delete(key);
    }
  }
}

// 주기적으로 정리 (5분마다)
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupRateLimit, 5 * 60 * 1000);
}
