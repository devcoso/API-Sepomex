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
  createTicket: (params: { item: TicketRequest }) => Promise<APIResponse<Ticket>>; // POST
  findAllTickets: () => Promise<APIResponse<Ticket[]>>; // GET
  findTicketById: (params: {
    idTicket: number;
  }) => Promise<APIResponse<Ticket>>; // GET
  updateTicket: (params: {
    ticket: Ticket;
    idTicket: number;
  }) => Promise<APIResponse<boolean>>; // PUT
};

export const createTicketBL: TicketBL["createTicket"] = async ({ item }) => {
  let response: APIResponse<Ticket> = {
    data: null,
    isSuccess: true,
    msg: "",
  };
  response.data = await createTicket({ item });;
  if (!response.data) {
    response.isSuccess = false;
    response.msg = "No se pudo crear el Ticket";
  }
  return response;
};

export const updateTicketBL: TicketBL["updateTicket"] = async ({
  ticket,
  idTicket,
}) => {
  let response: APIResponse<boolean> = {
    data: null,
    isSuccess: true,
    msg: "",
  };
  response.data =  await updateTicket({ ticket, idTicket });
  if (!response.data) {
    response.isSuccess = false;
    response.msg = "No se actualizó el ticket";
  }
  return response;
};

export const findAllTicketsBL: TicketBL["findAllTickets"] = async () => {
  let response: APIResponse<Ticket[]> = {
    data: null,
    isSuccess: true,
    msg: "",
  };
  response.data = await findAllTickets();
  if (!response.data) {
    response.isSuccess = false;
    response.msg = "No se puede acceder a los tickets";
  }
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
