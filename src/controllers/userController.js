import userService from "../services/userService.js";

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// create User
const createUser = async (req, res) => {
  const data = req.body;
  try {
    const user = await userService.createUser(data);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "User not created" });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// get user by email
const getUserByEmail = async (req, res) => {
  const email = req.params.email;

  try {
    const user = await userService.getUserByEmail(email);

    if (user) res.status(200).json(user);
    else res.status(404).json({ message: "User not found" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// update user by email
const updateUserByEmail = async (req, res) => {
  const email = req.params.email;
  const data = req.body;
  try {
    const user = await userService.getUserByEmail(email);

    if (!user) {
      return res.sataus(404).json({ message: "User not found" });
    }
    await userService.updateUser(email, data);
    res.status(200).json({
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// delete user by email

const deleteUserByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await userService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await userService.deleteUser(email);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {
  getAllUsers,
  createUser,
  getUserByEmail,
  updateUserByEmail,
  deleteUserByEmail,
};
