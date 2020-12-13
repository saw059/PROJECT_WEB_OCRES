const router = require('express').Router();
let Articles = require('../models/article.model');


//methode get pour recuperer cqu'on a dans la bdd
router.route('/').get((req, res) => {
  Articles.find()
    .then(Articles => res.json(Articles))
    .catch(err => res.status(400).json('Error: ' + err));
});
//pour poster dans la bdd
router.route('/add').post((req, res) => {
  const nom = req.body.nom;
  const contenu = req.body.contenu;
  
  const date = Date.parse(req.body.date);
  const image = req.body.image;

  const newArticles = new Articles({
    nom,
    contenu,
    date,
    image,
  });

  newArticles.save()
  .then(() => res.json('Articles added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
//pour get par id
router.route('/:id').get((req, res) => {
  Articles.findById(req.params.id)
    .then(Article => res.json(Article))
    .catch(err => res.status(400).json('Error: ' + err));
});
//pour delete par id
router.route('/:id').delete((req, res) => {
  Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json('Articles deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//pour update par id
router.route('/update/:id').post((req, res) => {
  Articles.findById(req.params.id)
    .then(Article => {
      Article.nom = req.body.nom;
      Article.contenu = req.body.contenu; 
      Article.date = Date.parse(req.body.date);
      Article.image = req.body.image;

      Article.save() //save
        .then(() => res.json('Articles updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;