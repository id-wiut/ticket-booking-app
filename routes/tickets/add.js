import { Router } from "express";
import Ticket from "./../../models/Ticket.js";
const router = Router();

router.get("/", (req, res) => {
  res.render("addTicket");
});

router.post("/", async (req, res) => {
  const { email, area, message } = req.body;
  const ticket = await Ticket.create({
    email: email,
    area: area,
    message: message,
  });
  res.status(201).render("success");
});

export default router;
