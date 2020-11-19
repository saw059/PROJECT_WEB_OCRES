import React,{Component} from 'react';

import './App.css';
import Toolbar from './components/plan/Toolbar';
//import Graph from './components/Graph'
import { BrowserRouter as Router ,Route} from 'react-router-dom';
//import WidgetsCarte from './components/WidgetsCarte';
import { fetchdata } from './API/ApiCovid';
import Country from './components/Country';

import admin from '../src/admin';
//import Graph2 from './components/Graph2';
//import Moteur from './components/Moteur';
import MoteurI from './components/MoteurI';
import MoteurM from './components/MoteurM';
import Moteur from './components/Moteur';

//import WidgetsMorts from './components/WidgetsMorts';
//import WidgetsInf from './components/widgetsInf';
//import WidgetsRet from './components/WidgetsRet';
import Graph2 from './components/Graph2';




class App extends Component{


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
/*
    if(this.state1.loading){
      
    }
    */
    const {data , country} = this.state;

    return(

      
      <div className='App' >
        


        
        <Router>
        <Toolbar />
        
       
        <Route path='/admin' component={admin}/>

        <Country handlecountrychange={this.handlecountrychange} />
        <Graph2 data={data} country={country}/>
        
        <Moteur  data={data} country={country}/>
        <MoteurI  data={data} country={country}/>
        <MoteurM  data={data} country={country}/>
        
        

        
        
        </Router>




        
        
          
            
         

        </div>
        

        
      

    );
  }
}
export default App;
