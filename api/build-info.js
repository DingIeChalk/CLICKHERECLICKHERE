export default function handler(req, res) {
  res.status(200).json({
    commitTimestamp: process.env.VERCEL_GIT_COMMIT_TIMESTAMP || new Date().toISOString()
  });
}
