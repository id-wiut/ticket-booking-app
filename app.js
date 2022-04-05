import dotenv from "dotenv";
dotenv.config();
import express from "express";
import routes from "./routes/index.js";
import { mongoose } from "mongoose";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const main = async () => {
  await mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to db");
    });
  app.use("/", routes);
  app.listen(process.env.PORT || 3000);
};

main().catch((e) => {
  console.log(e);
});
