import { Router } from 'express'
import * as clubsCtrl from '../controllers/clubs.js'

const router = Router()

router.get('/', clubsCtrl.index)

router.get('/:id', clubsCtrl.show)

router.get('/:id/edit', clubsCtrl.edit)

router.post('/', clubsCtrl.create)

router.post('/:id/reviews', clubsCtrl.createReview)

router.put('/:id', clubsCtrl.update)

router.delete('/:id', clubsCtrl.delete)

export {
  router
}