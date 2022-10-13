import { Request, Response, NextFunction } from 'express'
import { AppError } from './AppError'

enum SERVER_ERRORS {
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR"
}

export function ErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  return res.status(500).json({
    status: 'error',
    message: `${SERVER_ERRORS.INTERNAL_SERVER_ERROR} - ${err?.message}`
  })
}
