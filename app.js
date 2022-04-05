import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (__, res) => {
  res.send("hello world");
});

app.listen(proccess.env.PORT || 3000);
