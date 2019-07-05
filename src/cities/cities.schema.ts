import * as mongoose from 'mongoose';

export const CitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    uniqe: true,
    required: [true, 'Please add a city name'],
  },
  image: {
    type: String,
    uniqe: true,
    required: [true, 'Please upload an image'],
  },
  description: {
    type: String,
  },
});
