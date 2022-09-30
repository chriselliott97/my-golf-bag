import { Bag } from '../models/bag.js'

function index(req, res) {
  Bag.find({})
  .then(bags => {
    res.render('bags/index', {
      bags,
      title: "Bags"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}