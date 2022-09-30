import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

import * as bagsCtrl from '../controllers/bags.js'

const router = Router()

// GET /bags
router.get('/', bagsCtrl.index)
// POST /bags
router.post('/', isLoggedIn, bagsCtrl.create)

export {
  router
}