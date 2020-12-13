import '../src/admin.css'
import React, { Component } from 'react';
import axios from 'axios';


//import { Table,Input,CardContent, Typography, Grid } from '@material-ui/core';



//import Toolbar from './components/plan/Toolbar';


class admin extends Component {
  //constructor
  constructor(props) {
    super(props);

    this.onChangenom = this.onChangenom.bind(this);
    this.onChangecontenu = this.onChangecontenu.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onChangeid = this.onChangeid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
    this.clickElem = this.clickElem.bind(this);

//declaration de la map
    this.state = {
      id: '',
      nom: '',
      contenu: '',
      image: '',
      date: new Date(),
      articles: []

    }
  }
  /*
    componentDidMount2() {
      axios.get('http://localhost:5003/articles/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map(user => user.nom),
              nom: response.data[0].nom
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  
    }
    */

  async componentDidMount() {
    try {
      axios.get("http://localhost:5003/articles")
        .then(response => {
          console.log(response);
          this.setState({ articles: response.data })




        }

        )
      console.log(this.state.articles)
      console.log(this.state.articles.length)
        .catch(err => {
          console.log(err)
        })
    } catch (err) {
      console.log(err);
    }



  }

  onChangenom(e) {
    this.setState({
      nom: e.target.value
    })

  }

  onChangecontenu(e) {
    this.setState({
      contenu: e.target.value
    })
  }

  onChangeid(e) {
    this.setState({
      id: e.target.value
    })
  }

  onChangeimage(e) {
    this.setState({
      image: e.target.value
    })
  }

  onChangedate(e) {
    this.setState({
      date: e.target.value
    })

  }

  onSubmit(e) {
    e.preventDefault();

    const article = {
      nom: this.state.nom,
      contenu: this.state.contenu,
      image: this.state.image,
      date: this.state.date
    }

    console.log(article);
    console.log(this.state.articles)

    axios.post('http://localhost:5003/articles/add', article)
      .then(res => console.log(res.data));
    console.log(this.state.articles)
    window.location = '/admin';


  }
  onSubmit2() {

    const article = {
      nom: this.state.nom,
      contenu: this.state.contenu,
      image: this.state.image,
      date: this.state.date
    }

    axios.post('http://localhost:5003/articles/update/' + this.state.id, article)
      .then(res => console.log(res.data));

    window.location = '/admin';
  }

  clickElem() {
    const article = {
      nom: this.state.nom,
      contenu: this.state.contenu,
      image: this.state.image,
      date: this.state.date
    }



    axios.delete('http://localhost:5003/articles/' + this.state.id, article)
      .then(res => {
        console.log(res.data.message);
      }).catch(err => {
        console.log(err)
      })
  }


  render() {
    const { articles } = this.state;

    return (

      <div className="Carte1">
        <br />
        <h1>Admin formulaire</h1>
        <form >
          <br />
          <div className="form-group">
            <label>id: </label>
            <input type="text"
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeid}

            />
          </div>
          <br />
          <div className="form-group">
            <label>nom: </label>
            <input type="nom"

              className="form-control"
              value={this.state.nom}
              onChange={this.onChangenom}
              placeholder="nom de l'article"
            />
          </div>
          <br />
          <div className="form-group">
            <label>contenu: </label>
            <input type="nom"

              className="form-control"
              value={this.state.contenu}
              onChange={this.onChangecontenu}
              placeholder="contenue de l'article"
            />
          </div>
          <br />
          <div className="form-group">
            <label>image: </label>
            <input
              type="nom"
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeimage}
              placeholder="url de l'image"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Date: </label>

            <input
              type="date"
              className="form-control"
              value={this.state.date}
              onChange={this.onChangedate}
            />
          </div>
          <br />
          <div className="form-group1">
            <input type="submit" value="add" className="btn btn-primary btn1" onClick={this.onSubmit} />
            <input type="submit" value="delete by id" className="btn btn-primary btn2" onClick={this.clickElem} />
            <input type="submit" value="update" className="btn btn-primary btn3" onClick={this.onSubmit2} />
          </div>
        </form>

        <div>

          <div className="table-responsive">
            <h2>Récapitulatif de la base de données</h2>
            <table className="table" border>
              <thead className="text-center">
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Contenu</th>
                  <th>Image</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>

                {
                  articles.length ?
                    articles.map(articles => <tr>
                      <td>{articles._id}</td>
                      <td>{articles.nom}</td>
                      <td>{articles.contenu}</td>
                      <td>{articles.image}</td>
                      <td>{new Date(articles.date).toDateString()}</td>
                    </tr>
                    ) : null



                }

                <tr />
              </tbody>
            </table>
          </div>

          


        </div>
      </div>

    );
  }
}
export default admin;
