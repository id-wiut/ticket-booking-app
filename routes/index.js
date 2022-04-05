import { Router } from "express";
const router = Router();

router.get("/", (__, res) => {
  res.render("home");
});

export default router;
