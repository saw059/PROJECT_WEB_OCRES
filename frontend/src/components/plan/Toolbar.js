/*
import React,{Component} from 'react';

import {Link} from "react-router-dom";


import'./Toolbar.css';



class toolbar extends Component {
  
    state={
      result :''
    } 
  test()  {
    
      var code = confirm("Entre ton mot de passe?");

    if(code ==true)  {
        alert("bienvenue Admin");
        this.setState({
          result:'/admin'
        });
        
        
        
        
        
      
    }else {
    alert("vous n'est pas l'admin");
    }
}  
    render(){
      const {result} = this.state;
      
        
        return(

          <header className="toolbar" >
              <nav className="toolbar_nav">


            <div></div>
            <div className="toolbar_logo"><a href="/">Covid-19 </a></div>
            <div className="espace"/>

            <div className="toolbar_nav_items">
                <ul>
        <li> texte : {result}</li>
                    <li><Link onClick={this.test.bind(this)} to={result}>Admin</Link></li>
                    
                    

                    
                    
                </ul>


            </div>
        </nav>





    </header>
);
        }
    }
export default toolbar;*/
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import'./Toolbar.css';
import {Link} from "react-router-dom";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
    setOpen(false);
  };
 

  return (
    <div>
      <header className="toolbar" >
              <nav className="toolbar_nav">


            <div></div>
            <div className="toolbar_logo"><a href="/">Covid-19 </a></div>
            <div className="espace"/>

            <div className="toolbar_nav_items">
                <ul>
        

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Admin
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            entrer votre mot de passe d'admin
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="mot de passe"
            type="password"
            
            fullWidth
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
          <Link to="admin">Connexion</Link>
          </Button>
        </DialogActions>
      </Dialog>
           
      </ul>


</div>
</nav>





</header>

    </div>
  );
}