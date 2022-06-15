import CarModel from "../models/carModel.js";

export const getAllCars = async (req, res) => {
  try {
    const allCars = await CarModel.find();
    console.log(allCars);

    res.status(200).json(allCars);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addCar = async (req, res) => {
  const carObject = req.body;
  const newCar = new CarModel(carObject);

  try {
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCar = async (req, res) => {
  const {id: _id} = req.params;
  const carObject = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('Not Found');
  }
  const updatedCar = await CarModel.findByIdAndUpdate(_id, carObject, {new: true});

  res.json(updatedCar);
}

export const likeCar = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('Not Found');
  }

  const car = await CarModel.findById(id);
  const updatedCar = await CarModel.findByIdAndUpdate(id, {likeCount: car.likeCount + 1}, {new: true});

  res.json(updatedCar);
}

export const deleteCar = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('Not Found');
  }

  await CarModel.findByIdAndRemove(id);

  res.json({message: 'Car record deleted successfully!'});
}






// In this file, I will add all the complex logic from get, post, delete and update then export the file to routes.
// Firstly, I imported my database model then I defined all my appropriate functions
import { mongoose } from 'mongoose';
