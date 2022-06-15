import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/carRoutes.js";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8081;
const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/cars", postRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to u-cars API");
})

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() =>
    app.listen(PORT, () => console.log(`Server ruuning on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// Firstly, I created the application using npm init. I then installed express, cors and dotenv.
// I then required express, cors respectively the set my app to use express.
// I also ensured the json that will be passed will be less than 30mb because we have got images we need to send to our database
// I then created a .env file which contains my port and database connections coz I need to
// abstract some data mainly password to my database when I push this code to github.
// I required dotenv file then made my app listen on the PORT 8080 and also set up my atlas and local mongoDB connection
// Now the logic is the app has to get the database connection first then it connects to the PORT after.
// This is so just our application can be clean
