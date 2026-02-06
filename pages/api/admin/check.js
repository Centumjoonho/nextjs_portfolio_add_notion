import { isAdmin } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const admin = isAdmin(req);
  return res.status(200).json({ isAdmin: admin });
}
