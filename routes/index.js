import { Router } from "express";
const router = Router();
import tickets from "./tickets/index.js";

router.get("/", (__, res) => {
  res.render("home");
});
router.use("/tickets", tickets);
router.get("*", (__, res) => {
  res.render("404");
});

export default router;
