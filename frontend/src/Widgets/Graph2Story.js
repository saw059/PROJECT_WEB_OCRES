import React from 'react';
import {
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate
} from 'bizcharts';

import "./Graph.css";

/***** 
 * 
 * 
le widgets du graphique 
*
*
*
*/////////

const Graph2Story = () => {
   

const graphique =(
    
    
  
    (<Chart height={350} 
    data={[
    { type: 'Confirmés', value: 500},
    { type: 'retablis', value: 400},
    { type: 'morts', value: 90},
    
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
        color={['type', '#25fde9-black']}
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
    </Chart>)
  
)
const graphique2 = (
    
    
  
    (<Chart height={350} 
    data={[
    { type: 'Confirmés', value: 100 },
    { type: 'retablis', value: 90},
    { type: 'morts', value: 221 },
    
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
        color={['type', 'red-black']}
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
    </Chart>)
  
)
return (
    <div className="graph">
        {graphique2 }
        <br/>
        <br/>
        <br/>
        <br/><br/><br/><br/>
        {graphique}

    </div>
 )
}

//ReactDOM.render(<Graph2Story />, mountNode);


export default Graph2Story;