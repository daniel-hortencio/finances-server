import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { SignInUseCase } from "./SignInUseCase";

export interface SignInRequest extends Request {
  body: {
    email: string;
    password: string;
  }
}

class SignInController {
  async handle(req: SignInRequest, res: Response) {
    const { email, password } = req.body

    const signInUseCase = container.resolve(SignInUseCase)
    const userCredentials = await signInUseCase.execute({ email, password })

    return res.status(200).json(userCredentials)/* .json(user) */
  }
}

export default new SignInController()