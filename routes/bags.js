import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

import * as bagsCtrl from '../controllers/bags.js'

const router = Router()

// GET /bags
router.get('/', bagsCtrl.index)
// GET /bags/:id
router.get('/:id', bagsCtrl.show)
// POST /bags
router.post('/', isLoggedIn, bagsCtrl.create)

export {
  router
}