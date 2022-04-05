import { Router } from "express";
const router = Router();

router.get("/", (__, res) => {
  res.render("success");
});
router.get("*", (__, res) => {
  res.render("404");
});

export default router;
