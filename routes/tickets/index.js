import { Router } from "express";
const router = Router();

router.post("/add", (req, res) => {
  res.send(req.body());
});

export default router;
