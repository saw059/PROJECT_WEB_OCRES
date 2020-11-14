import React,{Component} from 'react';


import Toolbar from './components/plan/Toolbar';
import Graph from './components/Graph.js';

class admin extends Component{

  render(){

    return(
      <div className='admin'>
        <div className="architecture">
          <Toolbar />
          <main style={{marginTop:'64px'}}>

          </main>

        </div>
        <div className='chart'>
            <Graph/>
       


        </div>
        <p>hello world</p>
        
        
      </div>

    );
  }
}
export default admin
