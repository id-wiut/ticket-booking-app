import("dotenv/config");
import express from "express";
import routes from "./routes/index.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const main = async () => {
  app.use("/", routes);
  app.listen(process.env.PORT || 3000);
};

main().catch((e) => {
  console.log(e);
});
