import Router from 'express'

import { authenticated_routes } from './authenticated'
import { public_routes } from './public'

const router = Router()

router.use(public_routes)
router.use(authenticated_routes)

export { router }