export default function handler(req, res) {
  // Log all query parameters TikTok sends back
  console.log("Query params:", req.query);

  const { code, state, error, error_description } = req.query;

  if (error) {
    return res
      .status(400)
      .send(`Error from TikTok: ${error_description || error}`);
  }

  if (!code) {
    return res.status(400).send("❌ No auth code received.");
  }

  // You can also check state here if you store it for CSRF protection

  // If code exists, proceed with token exchange (your next step)
  res.send(`✅ Auth code received: ${code}`);
}

// File: api/auth.js
// module.exports = (req, res) => {
//   const code = req.query.code;
//   const state = req.query.state;

//   if (code) {
//     res.send(`✅ TikTok Auth Code: ${code}<br>🔐 State: ${state}`);
//   } else {
//     res.send("❌ No auth code received.");
//   }
// };
