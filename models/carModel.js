import mongoose from "mongoose";

const carSchema = mongoose.Schema({
  model: {
    type: Number,
    required: true,
    min: 1950,
    max: 2025,
  },
  make: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  cost: {
    type: Number,
    required: true,
    min: 0,
    max: 500000000000,
  },
  selectedImage:String,
  r_Number: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 9,
  },
  owner: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15,
  },
  address: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CarModel = mongoose.model("CarModel", carSchema);
export default CarModel;

// In this file, I created my model.Firstly I imported mongoose. I then created an aobject of mongoose Schema that
// contains all the fields I need in my database
// I then exported the model via export default CarModel since it needs to be used in my carController.js to run database
// commands
