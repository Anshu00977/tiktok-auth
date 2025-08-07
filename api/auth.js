// File: api/auth.js

module.exports = (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  if (code) {
    res.send(`✅ TikTok Auth Code: ${code}<br>🔐 State: ${state}`);
  } else {
    res.send("❌ No auth code received.");
  }
};
