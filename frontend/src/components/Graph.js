import React from 'react';
import {Line} from 'react-chartjs-2'


import "./Graph.css";
function Graph(){
    const data = {
        labels : ['Mars','avril','mai','juin'],

        datasets :[
            {
                label : 'nombre de cas',
                data : [20,30,10,50]


            }
            
        ]



    }
        
          
      
    return <Line data={data} />
        


}
  

   

export default Graph;