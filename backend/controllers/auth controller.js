const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (name,email,phone,password) VALUES (?,?,?,?)",
    [name, email, phone, hashedPassword]
  );

  res.json({ message: "User registered" });
};
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const [user] = await db.query(
    "SELECT * FROM users WHERE email=?",
    [email]
  );

  if (!user.length)
    return res.status(400).json({ message: "Invalid email" });

  const valid = await bcrypt.compare(password, user[0].password);

  if (!valid)
    return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { id: user[0].id },
    process.env.JWT_SECRET
  );

  res.json({ token });
};