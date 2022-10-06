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
    res.redirect('/clubs')
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Club.create(req.body)
  .then(club => {
    res.redirect(`clubs`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/clubs')
  })
}

function show(req, res) {
  Club.findById(req.params.id)
  .populate('owner')
  .then(club => {
    res.render('clubs/show', {
      club,
      title: "Club show"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/clubs')
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

function edit(req, res) {
  Club.findById(req.params.id)
  .then(club => {
    res.render("clubs/edit", {
      club,
      title: "Edit Club"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Club.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(club => {
    res.redirect(`/clubs/${club._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createReview(req, res) {
  Club.findById(req.params.id)
  .then(club => {
    club.reviews.push(req.body)
    club.save()
    .then(() => {
      res.redirect(`/clubs/${club._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  create,
  deleteClub as delete,
  show,
  createReview,
  update,
  edit
}