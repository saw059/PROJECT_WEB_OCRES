import React from 'react';
import { CardContent, Typography, Grid } from '@material-ui/core';
import './WidgetsCarte.css';
import CountUp from 'react-countup';

//on utilise pas

const WidgetsInf = ({ data: { confirmed, lastUpdate } }) => {
    // console.log(confirmed)
    if (!confirmed) {
        return "Loading...";
    }
    return (

        
        <div className="Carte">
            <Grid container spacing={3} justify="center">

                <Grid xs={8} md={3} className="Carte1">
                    <CardContent>
                        <Typography >Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                        
                        
                    </CardContent>
                </Grid>
            

                
            </Grid>
        </div>
    )
}
export default WidgetsInf;