import { Ticket } from "../domain/ticket/ticket";
import { DBContext } from "./db-context";
import { ITicketRepository } from "./interfaces/i-ticket-repository";

// Implementación
export const createTicket: ITicketRepository["createTicket"] = async ({
  item,
}) => {
  const sql = `CALL sp_insert_ticket(${item.idError}, '${item.commets}', '${item.status}');`;
  const dbContextResult = await DBContext({
    sql: sql,
    flag: true,
  });
  // falta recibir el numero de id ticket
  const response = dbContextResult[0][0];
  console.log(response.idTicket);
  const ticket: Ticket = {
    idTicket: response.idTicket,
    idError: item.idError,
    status: item.status,
    comments: item.commets,
  };
  return ticket;
};
export const updateTicket: ITicketRepository["updateTicket"] = async ({
  ticket,
  idTicket,
}) => {
  const sql = `UPDATE Tickets SET idError=${ticket.idError}, status='${ticket.status}', comments='${ticket.comments}' WHERE idTicket='${idTicket}' LIMIT 1`;
  const dbContextResult = await DBContext({
    sql: sql,
    flag: true,
  });
  return dbContextResult.affectedRows == 1;
};

export const findAllTickets: ITicketRepository["findAllTickets"] = async () => {
  const response: Ticket[] = await DBContext({
    sql: "SELECT * FROM appsmxco_tickets.Tickets;",
    flag: true,
  });
  return response;
};

export const findTicketById: ITicketRepository["findTicketById"] = async ({
  idTicket,
}) => {
  const result = await DBContext({
    sql: `SELECT * FROM Tickets WHERE idTicket='${idTicket}';`,
    flag: true,
  });
  const response: Ticket = result[0];
  return response;
};
