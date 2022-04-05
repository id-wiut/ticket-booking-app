import { Router } from "express";
const router = Router();

router.get("/", (__, res) => {
  res.send("Update");
});

export default router;
