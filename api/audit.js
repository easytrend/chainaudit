// Vercel Serverless Function: Proxy audit requests securely to Anthropic API
// Reads ANTHROPIC_API_KEY from Vercel environment variables (.env)

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health / Environment check: lets the frontend know if ANTHROPIC_API_KEY is configured
  if (req.method === 'GET') {
    const hasEnvKey = Boolean(process.env.ANTHROPIC_API_KEY && process.env.ANTHROPIC_API_KEY.trim());
    return res.status(200).json({
      configured: hasEnvKey,
      hasEnvKey: hasEnvKey
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed' } });
  }

  // Use client key if provided, otherwise fallback to Vercel environment variable
  const clientKey = req.headers['x-api-key'];
  const apiKey = (clientKey && typeof clientKey === 'string' && clientKey.trim())
    ? clientKey.trim()
    : process.env.ANTHROPIC_API_KEY;

  if (!apiKey || !apiKey.trim()) {
    return res.status(400).json({
      error: {
        message: 'No Anthropic API key configured. Please add ANTHROPIC_API_KEY to your Vercel Project Settings > Environment Variables or enter a key in Settings.'
      }
    });
  }

  try {
    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey.trim(),
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(payload)
    });

    const data = await anthropicRes.json();
    return res.status(anthropicRes.status).json(data);
  } catch (err) {
    console.error('Audit proxy error:', err);
    return res.status(500).json({
      error: {
        message: err.message || 'Internal error forwarding audit to Anthropic'
      }
    });
  }
};
