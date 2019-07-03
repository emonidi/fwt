import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  company: String,
  role: String,
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email can not be blank'],
  },
  password: String,
});
