const express = require("express");
const router = express.Router();

// temporary storage (no DB)
let users = [];

// ✅ REGISTER API
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.json({
      success: false,
      message: "User already exists",
    });
  }

  users.push({ name, email, password });

  console.log("Users:", users);

  res.json({ success: true });
});

// ✅ LOGIN API
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({
      success: true,
      token: "abc123",
    });
  } else {
    res.json({
      success: false,
      message: "Invalid credentials",
    });
  }
});

module.exports = router;