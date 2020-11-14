import React,{Component} from 'react';
import {Router, Route} from "react-router"; 
import './App.css';
import Toolbar from './components/plan/Toolbar';
import Graph from './components/Graph'
import admin from "./admin";

class App extends Component{

  render(){

    return(
      
      <div className='App'>
        <div className="architecture">
          <Toolbar />
        </div>
          
          <main >
          <div className='chart'>
            <Graph />
        
       
         </div>


          </main>

        </div>
        

        
      

    );
  }
}
export default App;
