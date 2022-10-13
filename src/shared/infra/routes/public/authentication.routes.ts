import { Router } from 'express'
import RefreshTokenController from '../../../../modules/auth/useCases/RefreshToken/RefreshTokenController'
import SignInController from '../../../../modules/auth/useCases/SignIn/SignInController'

const authenticationRoutes = Router()

authenticationRoutes.post('/sign-in', SignInController.handle)
authenticationRoutes.post('/refresh-token', RefreshTokenController.handle)

export { authenticationRoutes }