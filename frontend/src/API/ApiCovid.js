import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

//recuperer la data selon le pays
export const fetchdata = async ( country )=>{
    let changableurl = url;

    if(country){
        changableurl = `${url}/countries/${country}`;
    }

    try{

const {data : {confirmed , recovered , deaths , lastUpdate} } = await axios.get(changableurl);
return {confirmed , recovered , deaths , lastUpdate};
   
}
    catch(error){
console.log(error);
    }
}
//recupere la data modifié

export const dailydata = async ()=>{
    try{

        const {data} = await axios.get(`${url}/daily`);

        const modifieddata = data.map((dailydata)=>({
            confirmed : dailydata.confirmed.total,
            deaths:dailydata.deaths.total,
            date:dailydata.reportDate,
        }));

        return modifieddata;

    }catch(error){
        console.log(error);
    }
}

//recuperer le pays 
export const fetchcountries = async()=>{
    try{

const { data : {countries}} = await axios.get(`${url}/countries`);

return countries.map((country) => country.name);

    }catch(error){
        console.log(error);
    }
}