import { Request } from 'express'

declare global {
  namespace Express {
    interface Request {
      headers: {
        auth: string;
      },
      auth: {
        id_user: string;
      }
    }
  }
}
