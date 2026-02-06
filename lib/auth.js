import { serialize, parse } from 'cookie';
import crypto from 'crypto';

const COOKIE_NAME = 'admin_session';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7일

/**
 * 세션 토큰 생성 (HMAC-SHA256)
 */
export function createSessionToken() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not set');
  }

  const timestamp = Date.now().toString();
  const random = crypto.randomBytes(16).toString('hex');
  const payload = `${timestamp}:${random}`;

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const signature = hmac.digest('hex');

  return `${payload}:${signature}`;
}

/**
 * 세션 토큰 검증
 */
export function verifySessionToken(token) {
  if (!token) return false;

  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return false;

  const parts = token.split(':');
  if (parts.length !== 3) return false;

  const [timestamp, random, signature] = parts;
  const payload = `${timestamp}:${random}`;

  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(payload);
  const expectedSignature = hmac.digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

/**
 * 관리자 로그인 확인 (서버 사이드)
 */
export function isAdmin(req) {
  // Next.js API Routes에서 쿠키 파싱
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
