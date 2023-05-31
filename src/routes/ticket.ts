import { Router } from "express";
import {
  createTicketBL,
  findAllTicketsBL,
  findTicketByIdBL,
  updateTicketBL,
} from "../infrastructure/ticket";

export const TicketRouter = () => {
  const ticketRouter = Router();

  ticketRouter.post("/", async (req, res) => {
    const obj = await createTicketBL({ item: req.body });
    res.send(obj);
  });

  ticketRouter.get("/", async (req, res) => {
    const obj = await findAllTicketsBL();
    res.send(obj);
  });
  ticketRouter.get("/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const obj = await findTicketByIdBL({ idTicket: id });
    res.send(obj);
  });
  ticketRouter.put("/", async (req, res) => {
    const obj = await updateTicketBL({
      ticket: req.body,
      idTicket: req.body.idTicket,
    });
    res.send(obj);
  });

  return { ticketRouter };
};
