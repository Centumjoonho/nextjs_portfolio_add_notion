import { isAdmin, getUserRole } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const admin = isAdmin(req);
  const role = getUserRole(req);
  return res.status(200).json({ isAdmin: admin, role: role || null });
}
