import React from 'react';
import './Comparaison.css'



const Comparaison = ({data : {confirmed,recovered,deaths},country}) => {
    if (!confirmed) {
        return "Loading...";
    }
    
    const varG = ([((confirmed.value/57164742)*100)-100,((recovered.value/36682753)*100)-100,((deaths.value/1364959)*100)-100]
     
    )
    const varF= ([((confirmed.value/2137096)*100)-100,((recovered.value/153145)*100)-100,((deaths.value/47201)*100)-100])

    
    return (

        
        <div className="Compa">
            <div className="confirmé">
                <p>Confirmés/jour <br/>
                <p1>Comparé au : 20-11-2020</p1>
                 <h1>{country ? varF[0].toFixed(1) : varG[0].toFixed(1)} %</h1></p>
             
    
            </div>
            <div className="retablis">
                <p>Rétablis/jour <br/>
                <p1>Comparé au : 20-11-2020</p1>
                 <h1>{country ? varF[1].toFixed(1) : varG[1].toFixed(1)} %</h1></p>
                

            </div>
            <div className="morts">
                <p>Morts/jour<br/> 
                <p1>comparé au : 20-11-2020</p1>
                <h1>{country ? varF[2].toFixed(1) : varG[2].toFixed(1)} %</h1></p>


            </div>
            
        </div>
    )
}
export default Comparaison;