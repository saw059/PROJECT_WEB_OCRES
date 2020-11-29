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
le widgets des nombres d'infectés avec le le petit moteur en pourcentage
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

const MoteurI = ({data : {confirmed,lastUpdate},country}) => {
   

if (!confirmed) {
    return "Loading...";
}

const graphique = (
    
		(<Chart
			height={500}
            data={{value:confirmed.value/65979457}}
            
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
				end={[confirmed.value/65979457, 1]}
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
				content={`${(confirmed.value/65979457 * 100).toFixed()} %`}
				style={{
					fontSize: 36,
					fill: '#545454',
					textAlign: 'center',
				}}
				offsetY={15}
			/>
		</Chart>)
	)

	const graphique2 = (
    
		(<Chart
			
			height={500}
			bottom={0}
            data={{value:confirmed.value/7000000000}}
            
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
				end={[confirmed.value/7000000000, 1]}
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
				content={`${(confirmed.value/7000000000* 100).toFixed()} %`}
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
        
            <div className="moteurC">
                <h3>Confirmés</h3>
				<p1>{new Date(lastUpdate).toDateString()}</p1>
                <p> <CountUp start={0} end={confirmed.value} duration={2.5} separator="," /> </p>
                {country ? graphique : graphique2 }
	
                

            </div>
            
                
        
     )
}



export default MoteurI;