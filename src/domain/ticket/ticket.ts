export type Ticket = {
  idTicket: number;
  idError: number;
  idAssigned?: number;
  idClosed?: number;
  status: string;
  comments: string;
  createAt?: string;
  updateAt?: string;
};
