import React,{Component} from 'react';

import './App.css';
import Toolbar from './components/plan/Toolbar';
import { BrowserRouter as Router ,Route} from 'react-router-dom';


import admin from '../src/admin';

import Acceuil from '../src/Acceuil';

import Footer from './components/plan/Footer';





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
