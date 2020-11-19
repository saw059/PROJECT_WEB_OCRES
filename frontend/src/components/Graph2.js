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

const Graph2 = ({data : {confirmed,recovered,deaths},country}) => {
    const [dailyydata, setdailydata] = useState([]);

    useEffect(() => {
        const Fetchapi = async () => {
            setdailydata(await dailydata());
        }

        // console.log(dailyydata);

        Fetchapi();
    }, []);

const graphique = (
    dailyydata.length ?
    
  
    (<Chart height={300} 
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
        color={['type', 'rgb(252,143,72)-rgb(255,215,135)']}
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
          },
        }]}
      />
    </Chart>):null
  
);
const graphique2 = (
    dailyydata.length ?
    
  
    (<Chart height={300} 
    data={[
    { type: 'Confirmés', value: confirmed.value },
    { type: 'retablis', value: recovered.value},
    { type: 'morts', value: deaths.value },
    
    ]}
        
    autoFit>
      <Coordinate
        type="polar"
         startAngle={0} 
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
        color={['type', 'rgb(252,143,72)-rgb(255,215,135)']}
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

//ReactDOM.render(<Labelline />, mountNode);


export default Graph2;