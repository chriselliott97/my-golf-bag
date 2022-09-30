import { Club } from "../models/club.js"

function index(req, res) {
  Club.find({})
  .then(clubs => {
    res.render('clubs/index', {
      title: 'Clubs',
      clubs: clubs
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

export {
  index
}