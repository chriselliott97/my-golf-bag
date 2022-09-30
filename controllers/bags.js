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

function create(req, res) {
  req.body.owner = req.user.profile._id
  Bag.create(req.body)
  .then(bag => {
    res.redirect('/bags')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/bags')
  })
}

function show(req, res) {
  Bag.findById(req.params.id)
  .populate('owner')
  .then( bag => {
    res.render('bags/show', {
      bag,
      title: 'Bag Details'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/bags')
  })
}

export {
  index,
  create,
  show
}