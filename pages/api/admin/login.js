import { setSessionCookie, createSessionToken } from '../../../lib/auth';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    // DB에서 관리자 계정 조회
    const admin = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // 비밀번호 검증
    const isValid = await bcrypt.compare(password, admin.passwordHash);

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // 세션 토큰 생성 및 쿠키 발급
    const token = createSessionToken();
    const cookieHeader = setSessionCookie(token);

    res.setHeader('Set-Cookie', cookieHeader);
    return res.status(200).json({ success: true, username: admin.username });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
