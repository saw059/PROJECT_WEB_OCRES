//Widget sur les articles concernant la COVID-19

import React from 'react';
import '../Widgets/Articles.css';
import pp1 from '../images/pp1.jfif';
import pp2 from '../images/pp2.jfif';
import pp3 from '../images/pp3.jpg';


import { CardContent, Grid } from '@material-ui/core';


//Objet contenant les infos des articles

const articles = [
    {
        nom: "Covid-19 : morts en baisse", contenu: "340 morts du virus lors des dernières 24 heures à l'hôpital", date: "il y a 3 heures", pp: pp1,
     },
    {
        nom: "Lutte contre le VIH", contenu: "La Covid-19 pourrait provoquer jusqu'à 150.000 décès supplémentaires en trois ans", date: "il y a 1 jour", pp: pp2,
     },
     {
        nom: "Baromètre du coronavirus en Ile-DeFrance:", contenu: "Point au 24 novembre", date: "il y a 3 jours", pp: pp3,
     },
];

//Partie principale

class Articles extends React.Component {
     //Affiche Article
     //constructor
     constructor(props){
        super(props);
        this.state = { numero: 0 };   
    }

    handleClick() {
        if (this.state.numero>1) {
            this.setState({numero: 0});
        }
        else {
        this.setState({numero: this.state.numero+1});
        }
    }

    //Affiche un article
    Article() {
        return(
            <Grid item className="UnArticle" xs={6} >
          <CardContent>
    
                <div className="image">
                    <img className ="imageArticle" src={articles[this.state.numero].pp} alt={articles[this.state.numero].nom}></img>
                </div>
                <div className="texte .d-md-none d-lg-block ">
                    <h3 className ="Nom">{articles[this.state.numero].nom}</h3>
                    <p className ="Contenu">{articles[this.state.numero].contenu}</p>
                    <p className ="Date">{articles[this.state.numero].date}</p>
                    
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