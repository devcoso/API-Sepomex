import { Ticket } from "../../domain/ticket/ticket";
import { TicketRequest } from "../../domain/ticket/ticket-request";

export type ITicketRepository = {
  createTicket: (params: { item: TicketRequest }) => Promise<Ticket>; // POST
  findAllTickets: () => Promise<Ticket[]>; // GET
  findTicketById: (params: { idTicket: number }) => Promise<Ticket>; // GET
  updateTicket: (params: {
    ticket: Ticket;
    idTicket: number;
  }) => Promise<boolean>; // PUT
};
