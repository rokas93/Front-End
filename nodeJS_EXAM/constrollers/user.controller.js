import User from '../model/user.model.js';
import fetch from 'node-fetch';

const getUsersNames = async (req, res) => {
  try {
    const userData = [];

    // -- api data
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    users.forEach((user) =>
      userData.push({
        id: user.id,
        name: user.name,
      })
    );

    // -- db data
    const dbData = await User.find({}, '_id name');

    if (dbData) {
      userData.push(...dbData);
    }

    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

const getUsersEmails = async (req, res) => {
  try {
    const userData = [];

    // -- api data
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    users.forEach((user) =>
      userData.push({
        id: user.id,
        name: user.name,
        email: user.email,
      })
    );

    // -- db data
    const dbData = await User.find({}, '_id name email');

    if (dbData) {
      userData.push(...dbData);
    }

    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

const getUsersAddress = async (req, res) => {
  try {
    const userData = [];

    // -- api data
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();

    users.forEach((user) => {
      const formatedAddress = `${user.address.street}, ${user.address.city}`;

      userData.push({
        id: user.id,
        name: user.name,
        email: user.email,
        address: formatedAddress,
      });
    });

    // -- db data
    const dbData = await User.find({}, '_id name email address');

    if (dbData) {
      dbData.forEach((dbUser) => {
        const formatedAddress = `${dbUser.address.street}, ${dbUser.address.city}`;

        userData.push({
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
          address: formatedAddress,
        });
      });
    }

    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

const createNewUser = async (req, res) => {
  try {
    const data = req.body;

    const isDataValid = new User(data);
    const saveData = await isDataValid.save();

    res.status(201).json(saveData);
  } catch (error) {
    console.log(error);
  }
};

const getUsersFromDatabase = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export {
  getUsersNames,
  getUsersEmails,
  getUsersAddress,
  createNewUser,
  getUsersFromDatabase,
};
