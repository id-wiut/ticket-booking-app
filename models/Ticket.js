import mongoose from "mongoose";
const { Schema, model } = mongoose;
import validator from "mongoose-unique-validator";

const ticketScheme = new Schema(
  {
    email: { type: String, required: true },
    area: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

ticketScheme.plugin(validator);

const Ticket = model("Ticket", ticketScheme);

export default Ticket;
