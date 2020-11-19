import React,{Component} from 'react';

import './App.css';
import Toolbar from './components/plan/Toolbar';
//import Graph from './components/Graph'
import { BrowserRouter as Router ,Route} from 'react-router-dom';
//import WidgetsCarte from './components/WidgetsCarte';
import { fetchdata } from './API/ApiCovid';
import Country from './components/Country';

import admin from '../src/admin';
//import Moteur from './components/Moteur';
import MoteurI from './Widgets/MoteurI';
import MoteurM from './Widgets/MoteurM';
import Moteur from './Widgets/Moteur';

//import WidgetsMorts from './components/WidgetsMorts';
//import WidgetsInf from './components/widgetsInf';
//import WidgetsRet from './components/WidgetsRet';
import Graph2 from './Widgets/Graph2';
//import Discours from './Widgets/Discours';




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
