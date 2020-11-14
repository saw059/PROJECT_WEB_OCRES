import React from 'react';
import {Line} from 'react-chartjs-2'


import "./Graph.css";
function Graph(){
    const data = {
        labels : ['Mars','avril','mai','juin'],

        datasets :[
            {
                label : 'nombre de cas',
                data : [20,30,40,25]


            }
            
        ]



    }
        
          
      
    return <Line data={data} />
        


}
  

   

export default Graph;