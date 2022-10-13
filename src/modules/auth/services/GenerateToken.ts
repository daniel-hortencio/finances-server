import jwt from 'jsonwebtoken'

import { env } from '../../../shared/config/environments';

class GenerateToken {
  constructor() { }

  execute(id_user: string) {
    const minute = 60
    const hour = 60 * minute

    const token = jwt.sign(
      {},
      env.JWT_AUTH_SECRET,
      {
        subject: id_user,
        expiresIn: hour,
      }
    )

    return token
  }
}

export const generateToken = new GenerateToken()