import React from 'react';
//import {NativeSelect , FormControl} from '@material-ui/core';
import "./Country.css";

const Country = ({handlecountrychange}) =>{

    return(

        <div className="pays">
            <select defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
            <option value="">Global</option>
            <option value="France">France</option>

            </select>


        </div>
        /*
       <FormControl className="pays">
           <NativeSelect defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
               <option value="">Global</option>
               <option value="France">France</option>
           </NativeSelect>
       </FormControl>
       */

    )
}
export default Country;