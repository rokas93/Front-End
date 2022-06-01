import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    street: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
  },
});

const User = mongoose.model('user', userSchema);

export default User;
