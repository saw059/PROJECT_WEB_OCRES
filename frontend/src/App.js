import React,{Component} from 'react';

import './App.css';
import Toolbar from './components/plan/Toolbar';
//import Graph from './components/Graph'
import { BrowserRouter as Router ,Route} from 'react-router-dom';
//import WidgetsCarte from './components/WidgetsCarte';
//import { fetchdata } from './API/ApiCovid';
//import Country from './components/Country';

import admin from '../src/admin';
//import Moteur from './components/Moteur';
//import MoteurI from './Widgets/MoteurI';
//import MoteurM from './Widgets/MoteurM';
//import Moteur from './Widgets/Moteur';
import Acceuil from '../src/Acceuil';


//import WidgetsMorts from './components/WidgetsMorts';
//import WidgetsInf from './components/widgetsInf';
//import WidgetsRet from './components/WidgetsRet';
//import Graph2 from './Widgets/Graph2';
//import Comparaison from './Widgets/Comparaison';
import Footer from './components/plan/Footer';
//import Discours from './Widgets/Discours';




class App extends Component{


  
  render(){
    

    return(

      
      <div className='App' >
        


        
        <Router>
        <Toolbar />
        
       
        <Route path='/admin' component={admin}/>
        <Route exact path='/'component={Acceuil}/>
        

        
        <Footer/>
        
        
        </Router>




        
        
          
            
         

        </div>
        

        
      

    );
  }
}
export default App;
