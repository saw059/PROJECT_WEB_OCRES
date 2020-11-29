import React from 'react';
import {
	Chart,
	Point,
	Annotation,
	Axis,
	Coordinate,
	registerShape,
} from 'bizcharts';
//import { dailydata } from '../API/ApiCovid';
import "./Graph.css";
import CountUp from 'react-countup';

/***** 
 * 
 * 
le widgets des nombres de Rétablis avec le le petit moteur en pourcentage
*
*
*
*/////////

registerShape('point', 'pointer', {
	draw(cfg, container) {
		const group = container.addGroup();
		const center = this.parsePoint({ x: 0, y: 0 }); 
		const start = this.parsePoint({ x: 0, y: 0.5 });
		
		;

		const angle1 = Math.atan((start.y - center.y) / (start.x - center.x));
		const angle = (Math.PI - 2 * angle1) * cfg.points[0].x;
		if (group.cfg.animable) {
			group.animate((ratio) => {
				group.resetMatrix();
				group.rotateAtPoint(center.x, center.y, angle * ratio);
			}, 300);
		} else {
			group.rotateAtPoint(center.x, center.y, angle);
		}

		
	},
});

const Moteur = ({data : {confirmed,recovered,lastUpdate},country}) => {
  
if (!confirmed) {
    return "Loading...";
}

const pourcentage = recovered.value/confirmed.value;
const data= [{
    value : pourcentage
}];

const graphique = (
    
		(<Chart
			height={500}
            data={data}
            
			padding={[200,0, 520, 0]}
			scale={{
				value: {
					min: 0,
					max: 1,
					tickInterval: 0.1,
					formatter: v => v * 100
				}
			}}
			autoFit
		>
			<Coordinate
				type="polar"
				radius={0.75}
				startAngle={(-12 / 10) * Math.PI}
				endAngle={(2 / 10) * Math.PI}
			/>
			<Axis name="1" />
			<Axis
				name="value"
				line={null}
				label={{
					offset: -20,
					style: {
						fontSize: 8,
						textAlign: 'center',
						textBaseline: 'middle',
					},
				}}
				subTickLine={{
					count: 4,
					length: -13,
				}}
				tickLine={{
					length: -16,
				}}
				grid={null}
			/>
			<Point
				position="value*1"
				color="#1890FF"
				shape="pointer"
				animate={false}
			/>
			<Annotation.Arc
				top={false}
				start={[0, 1]}
				end={[1, 1]}
				style={{
					stroke: '#CBCBCB',
					lineWidth: 18,
					lineDash: null,
				}}
			/>
			<Annotation.Arc
				start={[0, 1]}
				end={[data[0].value, 1]}
				style={{
					stroke: '#25fde9',
					lineWidth: 18,
					lineDash: null,
				}}
			/>
			<Annotation.Text
				position={['50%', '85%']}
				
				style={{
					fontSize: 20,
					fill: '#545454',
					textAlign: 'center',
				}}
			/>
			<Annotation.Text
				position={['50%', '90%']}
				content={`${(data[0].value * 100).toFixed()} %`}
				style={{
					fontSize: 36,
					fill: '#545454',
					textAlign: 'center',
				}}
				offsetY={15}
			/>
		</Chart>)
    )
    return (
        
            <div className="moteurG">
                <h3>Rétablis</h3>
				<p1>{new Date(lastUpdate).toDateString()}</p1>
                <p><CountUp start={0} end={recovered.value} duration={4} separator="," /></p>
                {country ? graphique : graphique }
                
                
            </div>
            
    
       
     )
}



export default Moteur;