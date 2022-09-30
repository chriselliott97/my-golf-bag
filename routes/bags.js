import { Router } from 'express'

import * as bagsCtrl from '../controllers/bags.js'



const router = Router()

router.get('/', bagsCtrl.index)


export {
  router
}