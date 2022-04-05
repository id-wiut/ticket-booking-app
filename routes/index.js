import { Router } from "express";
const router = Router();

router.get("/", (__, res) => {
  res.render("success");
});

export default router;
