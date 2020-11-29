import React,{Component} from 'react';

import style from './Acceuil.css';
import Toolbar from './components/plan/Toolbar';

import { fetchdata } from './API/ApiCovid';
import Country from './components/Country';

import MoteurI from './Widgets/MoteurI';
import MoteurM from './Widgets/MoteurM';
import Moteur from './Widgets/Moteur';
import { Grid } from '@material-ui/core';





import Graph2 from './Widgets/Graph2';
import Comparaison from './Widgets/Comparaison';
import Footer from './components/plan/Footer';

import Articles from './Widgets/Articles'
import Questionnaire from './Widgets/Questionnaire';
import Attestation from './Widgets/Attestation';





class Acceuil extends Component{


  state={
    data :{},
    country:""
  }



  async componentDidMount(){
  const fetchdataa = await fetchdata();
 
  this.setState({
    data:fetchdataa
  });
}

handlecountrychange = async(country)=>
{
  const fetchdataa = await fetchdata(country);
  this.setState({
    data:fetchdataa,
    country:country
  });
}

  render(){
    const {data , country} = this.state;

    return(

      
      <div className='Acceuil' >
        


        
        
        <Toolbar />

        <div className={style.container}>
        <Grid container spacing={3} >
        <Country handlecountrychange={this.handlecountrychange} />
        
        <Graph2 data={data} country={country}/>
        <Comparaison data={data} country={country}/>
        <MoteurI data={data} country={country}/>
        <Moteur  data={data} country={country}/>
        <MoteurM   data={data} country={country}/>
        
          
          <Articles/>
        

          
            
             
              
       
        
        <Questionnaire/>
        <Attestation/>
                
        </Grid>
        </div>

        <Footer/>
        
        
        




        
        
          
            
         

        </div>
        

        
      

    );
  }
}
export default Acceuil;
