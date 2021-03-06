import React, { useState, useEffect } from 'react';
import {
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate
} from 'bizcharts';
import { dailydata } from '../API/ApiCovid';
import "./Graph.css";

/***** 
 * 
 * 
le widgets du graphique 
*
*
*
*/////////

const Graph2 = ({data : {confirmed,recovered,deaths},country}) => {
    const [dailyydata, setdailydata] = useState([]);

    useEffect(() => {
        const Fetchapi = async () => {
            setdailydata(await dailydata());
        }

        // console.log(dailyydata);

        Fetchapi();
    }, []);

const graphique =(
    dailyydata.length ?
    
  
    (<Chart height={400} 
    data={[
    { type: 'Confirmés', value: confirmed.value },
    { type: 'retablis', value: recovered.value},
    { type: 'morts', value: deaths.value },
    
    ]}
        
    autoFit>
      <Coordinate
        type="polar"
         startAngle={Math.PI} 
         endAngle={Math.PI *(3/2)} 
      />
      <Axis name="value" grid={{
        line: {
          type: 'circle',
        },
        closed: false,
      }} />
      <Tooltip showTitle={false} />
      <Interval
        position="type*value"
        adjust="stack"
        color={['type', 'aqua-black']}
        element-highlight
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
        label={['value', {
          offset: -15,
          style: {
            textAlign: 'center',
            fill: '#000',
            fontSize: 0,
          },
        }]}
      />
    </Chart>):null
  
)
const graphique2 = (
    dailyydata.length ?
    
  
    (<Chart height={400} 
    data={[
    { type: 'Confirmés', value: confirmed.value },
    { type: 'Rétablis', value: recovered.value},
    { type: 'Morts', value: deaths.value },
    
    ]}
        
    autoFit>
      <Coordinate
        type="polar"
         startAngle={0} 
         endAngle={Math.PI *(4/2)} 
      />
      <Axis name="value" grid={{
        line: {
          type: 'circle',
        },
        closed: false,
      }} />
      <Tooltip showTitle={false} />
      <Interval
        position="type*value"
        adjust="stack"
        color={['type', 'aqua-black']}
        element-highlight
        style={{
          lineWidth: 1,
          stroke: '#fff',
        }}
        label={['value', {
          offset: -15,
          style: {
            textAlign: 'center',
            fill: '#000',
            fontSize: 0,
            
            
            
          },
        }]}
      />
    </Chart>):null
  
)
return (
    <div className="graph">
{country ? graphique : graphique2 }

    </div>
 )
}


export default Graph2;