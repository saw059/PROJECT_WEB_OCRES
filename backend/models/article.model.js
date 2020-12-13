const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema de la bdd
const articleSchema = new Schema({
  nom: { type: String, required: true },
  contenu: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String, required: true },
}, {
  timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;