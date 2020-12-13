import React from 'react';
import '../Widgets/Articles.css';

import axios from 'axios';


import { CardContent, Grid } from '@material-ui/core';


//Objet contenant les infos des articles



//Partie principale

class Articles extends React.Component {
     //Affiche Article
     //constructor
     constructor(props){
        super(props);
        this.state = { 
            
        numero: 0 ,
        
        articles:[
                {
                    nom:'',
                    contenu:'',
                    image:'',
                    date:''
                }
            
            ]
    
            
    
        }
    };
        
        
    
    

    handleClick() {
        
        if (this.state.numero> this.state.articles.length-2)  {
            this.setState({numero: 0});
        }
        else {
        this.setState({numero: this.state.numero+1});
        }
    }

    async componentDidMount(){
        try{
           axios.get("http://localhost:5003/articles")
          .then( response => {
            console.log(response);
            this.setState({articles:response.data})
            
          
            
            
            }
            
          )
          console.log(this.state.allNote)
            console.log(this.state.allNote.length)
          .catch(err => {
            console.log(err)
          })
        }catch(err){
          console.log(err);
        }
        
        
      
      }

    //Affiche un article
    Article() {
        const {articles} = this.state;
        const url= articles[this.state.numero].image;

        return(

            <Grid item className="UnArticle" xs={6} >
          <CardContent>
    
                <div className="image">
                    <img className ="imageArticle" src={url} alt={articles[this.state.numero].nom}></img>
                </div>
                <div className="texte .d-md-none d-lg-block ">
                    <h3 className ="Nom">{articles[this.state.numero].nom}</h3>
                    <p className ="Contenu">{articles[this.state.numero].contenu}</p>
                    <p className ="Date">{new Date(articles[this.state.numero].date).toDateString()}</p>
                    
                </div>
                <button className="boutonNew" type="button" onClick={ () => this.handleClick()}> Changer d'article </button>
    
          </CardContent>
          </Grid>

 

            
            
        );
    }

    render() {
        return(
            <div>
                {this.Article()}
            </div>
        );
    }
}

export default Articles;