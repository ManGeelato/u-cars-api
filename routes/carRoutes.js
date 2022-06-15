import express from "express";
const router = express.Router();
import { getAllCars, addCar, updateCar, deleteCar, likeCar } from "../controllers/carController.js";

router.get("/", getAllCars);
router.post("/", addCar);
router.patch("/:id", updateCar);
router.patch("/:id/likeCar", likeCar);
router.delete("/:id", deleteCar);

export default router;
// In this file, It will only contain routes to my specific endpoints.
// Firstly, we import express them express.Router middleware so we can maximise our routing
// We then import individual routes from controller depending on their
// functionality either be it add, delete, update or read
