

//Widget de questionnaire pour déterminer si quelqu'un est malade (avec un pourcentage)

//Meant to change the state 'checked' of the checkbox AND count checkboxes that are checked to determine 
//whether someone should call the ambulance, go to the doctor, or stay home, 
//depending of the number of symptoms and their age

import React from 'react';
import {CardContent, Grid } from '@material-ui/core';
import '../Widgets/Questionnaire.css';


//A class to create a checkbox for each symptom and to use it in the parent class Questionnaire in order to create and count the number of box checked

class Checkbox extends React.Component {
    //constructor 
    constructor(props) {
      super(props)
      this.state = {
        isChecked: false
      }

    //handle check
    }
    handleCheck () {
      let isChecked = !this.state.isChecked
      if (isChecked) {
        this.props.count(true)
      } else {
        this.props.count(false)
      }
      this.setState({isChecked})
    }
    render () {
      return (
        <div>
          <label>
            {this.props.name}
            <input type='checkbox' checked={this.state.isChecked} onChange={() => this.handleCheck()}/>
          </label>
         </div>
      )
    }
}

class Questionnaire extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = { 
            age: null,
            isChecked: false,
            count: 0
        };   
    }

    //handle the "age" input change : gets the value given by the user
    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //Si isChecked est vrai (ou faux) d'après la class Checkbox, ajoute (ou soustrait) 1 au nombre de checkboxes étant cochées
    //Donc count donne le total de checkboxes cochées à la fin du process

    count (isChecked) {
        let { count } = this.state
        if (isChecked) {count ++} 
        else {count --}
        console.log(count)
        this.setState({count})
    }

    //Return message 
    message() {
        if (this.state.age==null) {
            return null
        }
        if (this.state.age>39) {
            if (this.state.count===0) {
                return <h4> Vous ne semblez pas infecté. Limitez quand même les déplacements. </h4>
            }
            if (this.state.count<3) {
                return <h4> Il est plus prudent de rester chez vous et de vous reposer. </h4>
            }
            if (this.state.count<6) {
                return <h4>Appeler votre médecin traitant ou aller faire des tests.</h4>
            }
            if (this.state.count>5) {
                return <h4> Veuillez contacter le Samu au plus vite et faite part de votre état. </h4>
            }
        }
        if (this.state.age<40) {
            if (this.state.count<4) {
                return <h4> Limiter les contacts avec les personnes fragiles. </h4>
            }
            if (this.state.count>3) {
                return <h4> Veuillez faire un test et rester isolé. </h4>
            }
        }
}

    render() {
        const arr = ['Fièvre', 'Fatigue', 'Toux', 'Difficultés respiratoires', 'Maux de tete', 'Perte du gout', 'Maux de gorge', 'Courbatures', 'Diarees']
    
        return (
            <Grid item  className = "Questionnaire" xs={6} >
            <CardContent>

            <div>

                <div className="text">
                <h3>Contamination à la COVID-19 ? Faites le test :</h3>

                <form>
                    <label>Votre âge :
                    <input type="number" min="0"  placeholder='0-120 ans' name="age" onChange={this.handleInputChange}/>
                    </label>
                </form> 
                <form>
                    <h4> Cocher les symptômes que vous avez : </h4>
                    {arr.map(a => <Checkbox  name={a} count={this.count.bind(this)}/>)}
                   
            
                   
                </form>
                </div>

                <div className="reco">
                    <h4> Recommendations:</h4>
                {this.message()}
                </div>
                
            
            </div>
            </CardContent>
          </Grid>
            
        )
    }
}


export default Questionnaire;