import { serialize, parse } from 'cookie';
import crypto from 'crypto';

const COOKIE_NAME = 'admin_session';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7일

/**
 * 세션 토큰 생성 (HMAC-SHA256)
 * @param {string} role - 사용자 role (ADMIN, DEMO)
 */
export function createSessionToken(role = 'ADMIN') {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not set');
  }

  const timestamp = Date.now().toString();
  const random = crypto.randomBytes(16).toString('hex');
  const payload = `${timestamp}:${random}:${role}`;

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const signature = hmac.digest('hex');

  return `${payload}:${signature}`;
}

/**
 * 세션 토큰 검증 및 role 반환
 */
export function verifySessionToken(token) {
  if (!token) return null;

  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return null;

  const parts = token.split(':');
  // 기존 형식: timestamp:random:signature (3 parts)
  // 새 형식: timestamp:random:role:signature (4 parts)
  if (parts.length !== 3 && parts.length !== 4) return null;

  let timestamp, random, role, signature;
  
  if (parts.length === 3) {
    // 기존 형식 (하위 호환)
    [timestamp, random, signature] = parts;
    role = 'ADMIN'; // 기본값
  } else {
    // 새 형식
    [timestamp, random, role, signature] = parts;
  }

  const payload = `${timestamp}:${random}${role ? `:${role}` : ''}`;

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const expectedSignature = hmac.digest('hex');

  const isValid = crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );

  return isValid ? role : null;
}

/**
 * 세션에서 사용자 정보 가져오기 (DB 조회)
 */
export async function getUserFromSession(req) {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = cookies[COOKIE_NAME] || req.cookies?.[COOKIE_NAME];
  
  if (!verifySessionToken(token)) {
    return null;
  }

  // 세션 토큰이 유효하면 DB에서 사용자 정보 조회
  // 실제로는 세션에 role을 포함시키거나, 별도 세션 테이블을 사용할 수 있지만
  // 간단하게 모든 로그인된 사용자를 조회 (실제 프로덕션에서는 세션 테이블 권장)
  // 여기서는 간단하게 모든 로그인된 사용자를 ADMIN으로 간주하거나,
  // 세션에 role을 포함시키는 방식으로 개선 가능
  
  // 현재는 세션 토큰만으로는 role을 알 수 없으므로,
  // 실제 구현에서는 세션에 username을 포함시키거나 세션 테이블을 사용해야 함
  // 임시로 세션 토큰이 있으면 로그인된 것으로 간주
  return { loggedIn: true };
}

/**
 * 관리자 로그인 확인 (서버 사이드)
 * 로그인되어 있으면 true (ADMIN, DEMO 모두)
 */
export function isAdmin(req) {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = cookies[COOKIE_NAME] || req.cookies?.[COOKIE_NAME];
  const role = verifySessionToken(token);
  return role !== null;
}

/**
 * ADMIN role 확인 (DEMO는 false)
 */
export function isAdminRole(req) {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = cookies[COOKIE_NAME] || req.cookies?.[COOKIE_NAME];
  const role = verifySessionToken(token);
  return role === 'ADMIN';
}

/**
 * DEMO role 확인
 */
export function isDemoRole(req) {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = cookies[COOKIE_NAME] || req.cookies?.[COOKIE_NAME];
  const role = verifySessionToken(token);
  return role === 'DEMO';
}

/**
 * 로그인된 사용자의 role 반환
 */
export function getUserRole(req) {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const token = cookies[COOKIE_NAME] || req.cookies?.[COOKIE_NAME];
  return verifySessionToken(token);
}

/**
 * 세션 쿠키 설정 헤더 반환
 */
export function setSessionCookie(token) {
  return serialize(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });
}

/**
 * 세션 쿠키 삭제 헤더 반환
 */
export function deleteSessionCookie() {
  return serialize(COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });
}
