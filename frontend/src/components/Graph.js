import React, { useState, useEffect } from 'react';
import { HorizontalBar} from 'react-chartjs-2';
import { dailydata } from '../API/ApiCovid';

import "../Widgets/Graph.css";



/***** 
 * 
 * 
le widgets du graph qu'on utlise pas mais qui marche aussi
*
*
*
*/////////
const Graph = ({data : {confirmed,recovered,deaths},country}) => {
    const [dailyydata, setdailydata] = useState([]);

    useEffect(() => {
        const Fetchapi = async () => {
            setdailydata(await dailydata());
        }

        // console.log(dailyydata);

        Fetchapi();
    }, []);
    const Linechart = (
        dailyydata.length ?
            (<HorizontalBar
                data={{
                    labels:['Infected','Recovered', 'Deaths'],
                    datasets:[{
                        label:'people',
                        backgroundColor:['blue','green','red'],
                        data:[confirmed.value , recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend:{display:false},
                    title:{display:true , text:`Current state in ${country}`},
                }}
            />) : null
    );

    const Barchart =(
confirmed?
<HorizontalBar
data={{
    labels:['Infected','Recovered', 'Deaths'],
    datasets:[{
        label:'people',
        backgroundColor:['blue','green','red'],
        data:[confirmed.value , recovered.value, deaths.value]
    }]
}}
options={{
    legend:{display:false},
    title:{display:true , text:`Current state in ${country}`},
}}
/>
:null
    );

    return (
       <div className="graph">
    {country ? Barchart : Linechart}
       </div>
    )
}
   

export default Graph;