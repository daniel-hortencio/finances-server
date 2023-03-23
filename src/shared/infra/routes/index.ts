import Router from 'express'

import { user_authenticated_routes } from './authenticated/userAutenticated.routes'
import { public_routes } from './public'

const router = Router()

router.use(public_routes)
router.use(user_authenticated_routes)

export { router }