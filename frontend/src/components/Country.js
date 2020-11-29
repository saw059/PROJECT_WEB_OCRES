import React from 'react';
//import {NativeSelect , FormControl} from '@material-ui/core';
import "./Country.css";
/***** 
 * 
 * 
la barre de changement de pays 
*
*
*
*/////////
const Country = ({handlecountrychange}) =>{

    return(

        <div className="pays">
            <select defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
            <option value="">Monde entier</option>
            <option value="France">France</option>
            

            </select>


        </div>

    )
}
export default Country;