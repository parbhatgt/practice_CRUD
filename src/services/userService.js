import sequelize from "../config/db.js";
import User from "../models/User.js";
import { QueryTypes } from "sequelize";
const getAllUsers = async (req, res) => {
  // return await User.findAll();

  return await sequelize.query("SELECT * FROM Users", {
    type: QueryTypes.SELECT,
  });
  // We didn't need to destructure the result here - the results were returned directly
};

const createUser = async (data) => {
  const query = `
    INSERT INTO Users (name, email, age, createdAt, updatedAt)
    VALUES (:name, :email, :age, GETDATE(), GETDATE())
  `;

  const user = await sequelize.query(query, {
    replacements: {
      name: data.name,
      email: data.email,
      age: data.age,
    },
    type: sequelize.QueryTypes.INSERT,
  });

  return user;
};

const getUserByEmail = async (email) => {
  // return await User.findOne({ where: { email: email } });

  console.log(email);

  const user = await sequelize.query(
    "SELECT * FROM Users WHERE email = :email",
    {
      replacements: { email: email },
      type: QueryTypes.SELECT,
    }
  );

  return user[0];
};

const updateUser = async (email, user, data) => {
  // return await User.update(data, { where: { email: email } });

  const name = data.name || user.name;
  const emailUser = data.email || user.email;
  const age = data.age || user.age;

  const [results, metadata] = await sequelize.query(
    `UPDATE users SET name='${name}', email='${emailUser}', age=${age} WHERE email='${email}'`,
    { type: QueryTypes.UPDATE }
  );
};

const deleteUser = async (email) => {
  // return await User.destroy({ where: { email: email } });
  const [results, metadata] = await sequelize.query(`DELETE from users WHERE email = '${email}'`,
    { type: QueryTypes.DELETE }
  )
};

export default {
  getAllUsers,
  createUser,
  getUserByEmail,
  updateUser,
  deleteUser,
};
