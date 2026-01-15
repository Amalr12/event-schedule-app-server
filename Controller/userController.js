const users = require("../model/userModel");


exports.registerController = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(406).json("User already exists");
    }

    const newUser = new users({
      username,
      email,
      password
    });

    await newUser.save();
    res.status(200).json(newUser);

  } catch (error) {
    res.status(500).json(error);
  }
};


exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await users.findOne({ email });

    if (!existingUser) {
      return res.status(403).json("Please register");
    }

    if (existingUser.password !== password) {
      return res.status(406).json("Incorrect credentials");
    }

    res.status(200).json({ existingUser });

  } catch (error) {
    res.status(500).json(error);
  }
};