import User from "../models/User.js";

const getAllUsers = async (req, res) => {
  return await User.findAll();
};

const createUser = async (data) => {
  return await User.create(data);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email: email } });
};

const updateUser = async (email, data) => {
  return await User.update(data, { where: { email: email } });
};

const deleteUser = async (email) => {
  return await User.destroy({ where: { email: email } });
};

export default {
  getAllUsers,
  createUser,
  getUserByEmail,
  updateUser,
  deleteUser,
};
