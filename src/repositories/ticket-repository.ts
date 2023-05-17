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
  });
  // falta recibir el numero de id ticket
  let ticket: Ticket = {
    idTicket: 0,
    idError: 0,
    status: "",
    comments: "",
  };

  return ticket;
};
