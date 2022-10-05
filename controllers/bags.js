import { Bag } from '../models/bag.js'
import { Club } from '../models/club.js'

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
  .populate('clubs')
  .populate('owner')
  .then( bag => {
    Club.find({_id: {$nin: bag.clubs}})
    .then(clubs => {
      res.render('bags/show', {
        bag,
        title: 'Bag Details',
        clubs: clubs
      })
    })
  })
}

function deleteClub(req, res) {
  Bag.findById(req.params.id)
  .then(bag => {
    console.log('BAG HERE', bag)
    console.log('CLUB ID', req.params.clubId)
    res.redirect(`/bags/${bag._id}`)
  })
}

function addToClubs(req, res) {
  Bag.findById(req.params.id)
  .then(bag => {
    bag.clubs.push(req.body.clubId)
    bag.save()
    .then(() => {
      res.redirect(`/bags/${bag._id}`)
    })
  })
}


export {
  index,
  create,
  show,
  addToClubs,
  deleteClub,
}