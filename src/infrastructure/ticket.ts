import { APIResponse } from "../domain/global/api-response";
import { Ticket } from "../domain/ticket/ticket";
import { TicketRequest } from "../domain/ticket/ticket-request";
import {
  createTicket,
  findAllTickets,
  findTicketById,
  updateTicket,
} from "../repositories/ticket-repository";

type TicketBL = {
  createTicket: (params: { item: TicketRequest }) => Promise<Ticket>; // POST
  findAllTickets: () => Promise<Ticket[]>; // GET
  findTicketById: (params: {
    idTicket: number;
  }) => Promise<APIResponse<Ticket>>; // GET
  updateTicket: (params: {
    ticket: Ticket;
    idTicket: number;
  }) => Promise<boolean>; // PUT
};

export const createTicketBL: TicketBL["createTicket"] = async ({ item }) => {
  console.log(item);
  let response = await createTicket({ item });
  return response;
};

export const updateTicketBL: TicketBL["updateTicket"] = async ({
  ticket,
  idTicket,
}) => {
  let response = await updateTicket({ ticket, idTicket });
  return response;
};

export const findAllTicketsBL: TicketBL["findAllTickets"] = async () => {
  let response = await findAllTickets();
  return response;
};

export const findTicketByIdBL: TicketBL["findTicketById"] = async ({
  idTicket,
}) => {
  let response: APIResponse<Ticket> = {
    data: null,
    isSuccess: true,
    msg: "",
  };
  response.data = await findTicketById({ idTicket });
  if (!response.data) {
    response.isSuccess = false;
    response.msg = "No se encontró un ticket con ese ID";
  }
  return response;
};
