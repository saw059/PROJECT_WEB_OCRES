
import React from 'react';
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
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
            Vous voulez entrer dans la page admin ?
          </DialogContentText>
          
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