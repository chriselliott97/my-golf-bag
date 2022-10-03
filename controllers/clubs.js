import { Club } from "../models/club.js"

function index(req, res) {
  Club.find({})
  .then(clubs => {
    res.render('clubs/index', {
      title: 'Add Clubs',
      clubs: clubs
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function create(req, res) {
  Club.create(req.body)
  .then(club => {
    res.redirect(`clubs/${club._id}`)
  })
  .catch(err => {
    res.redirect('/clubs/new')
  })
}

function deleteClub(req, res) {
  Club.findByIdAndDelete(req.params.id)
  .then(club => {
    res.redirect('/clubs')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/clubs')
  })
}

export {
  index,
  create,
  deleteClub as delete
}