import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import {
  getUsersNames,
  getUsersEmails,
  getUsersAddress,
  createNewUser,
  getUsersFromDatabase,
} from './constrollers/user.controller.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connecting to DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connecting to mongodb');

    app.listen(process.env.PORT, () => console.log('Starting server'));
  })
  .catch((error) => console.log(error));

// Routes
app.get('/api/users/names', getUsersNames);

app.get('/api/users/emails', getUsersEmails);

app.get('/api/users/address', getUsersAddress);

app.post('/api/users', createNewUser);

app.get('/api/users', getUsersFromDatabase);
