import React,{Component} from 'react';
import '../src/admin.css'

import { Table,Input,CardContent, Typography, Grid } from '@material-ui/core';



//import Toolbar from './components/plan/Toolbar';


class admin extends Component{

  render(){

    return(
      
            <Grid container  justify="center">

                <Grid xs={12} md={6} className="Carte1">
                    <CardContent>
                      <Table>

                        <Typography  variant="h3" >Formulaire admin</Typography><image src="https://lh3.googleusercontent.com/proxy/k4lE5eMzqFVxWCbeTLJJ78EALfnpmjXdnAKpg2VTLKuCzVVfRHr6Jrdcq54biaiyinCnMT454F7kSTuYZV10wm9-0uifsCGU7Wnd"/>
                        <br/>
                        <br/>
                        <br/>
                        <Typography variant="h6">
                          Nom de l'article :
                          <div className="espace"/>
                          <Input type="text" placeholder="nom de l'article"></Input>
                           
                        </Typography>
                        
                        
                        <Typography variant="h6">
                          lien :
                          <div className="espace"/>
                          <Input  type="text" placeholder="http://...."></Input>
                           
                        </Typography>
                        <Typography variant="h6">
                          date :
                          <div className="espace"/>
                          <Input type="date" placeholder="entrer la date"></Input>
                           
                        </Typography>
                        <Typography variant="h6">
                          img :
                          <div className="espace"/>

                          <Input type="text" placeholder="url adresse image"></Input>
                           
                        </Typography>
                        </Table>
                        
                        
                    </CardContent>
                </Grid>
            

                
            </Grid>
        
    );
  }
}
export default admin
