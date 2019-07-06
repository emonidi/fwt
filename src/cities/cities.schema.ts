import * as mongoose from 'mongoose';


const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

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
  location: {
    type: pointSchema,
  },
});
