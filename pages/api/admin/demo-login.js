import { setSessionCookie, createSessionToken } from '../../../lib/auth';
import { prisma } from '../../../lib/prisma';
import { checkRateLimit } from '../../../lib/rate-limit';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limit 체크 (IP 기반)
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || 
                   req.headers['x-real-ip'] || 
                   req.connection?.remoteAddress || 
                   'unknown';
  
  // 1분에 최대 5회
  if (!checkRateLimit(`demo-login:${clientIp}`, 5, 60000)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    // demo 계정 조회
    const demo = await prisma.adminUser.findUnique({
      where: { username: 'demo' },
    });

    // demo 계정이 없으면 생성
    if (!demo) {
      const bcrypt = require('bcrypt');
      const dummyHash = await bcrypt.hash('demo', 10);
      
      const newDemo = await prisma.adminUser.create({
        data: {
          username: 'demo',
          passwordHash: dummyHash,
          role: 'DEMO',
        },
      });

      // DEMO role로 세션 토큰 생성
      const token = createSessionToken('DEMO');
      const cookieHeader = setSessionCookie(token);

      res.setHeader('Set-Cookie', cookieHeader);
      return res.status(200).json({ success: true, username: newDemo.username, role: newDemo.role });
    }

    // DEMO role로 세션 토큰 생성
    const token = createSessionToken('DEMO');
    const cookieHeader = setSessionCookie(token);

    res.setHeader('Set-Cookie', cookieHeader);
    return res.status(200).json({ success: true, username: demo.username, role: demo.role });
  } catch (error) {
    console.error('Demo login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
