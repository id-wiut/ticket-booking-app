import { Router } from "express";
import Ticket from "../../models/Ticket.js";
const router = Router();
import addTicket from "./add.js";

router.get("/", async (req, res) => {
  const tickets = await Ticket.find({});
  console.log(tickets);
  res.render("tickets", { tickets });
});
router.use("/add", addTicket);

export default router;
