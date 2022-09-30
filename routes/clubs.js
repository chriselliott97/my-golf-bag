import { Router } from 'express'
import * as clubsCtrl from '../controllers/clubs.js'

const router = Router()

router.get('/', clubsCtrl.index)

export {
  router
}