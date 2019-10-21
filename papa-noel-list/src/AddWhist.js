import React from "react";
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    marginTop:25,
    color:"blue",
  },
 
}));
 function AddWhist (props) {
 
   const {handleChange, handleText, wish} = props;
  
  

  
  const classes = useStyles();
  return (
    <form className="form" noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Introduce tu deseo"
        className="text"
        wish={wish}
        
        onChange={handleText}
        type="text"
        margin="normal"
        variant="outlined"
      /> 
     
      <Button   value="enviar"  onClick={handleChange} variant="outlined" size="medium" color="primary" className={classes.margin}>
     Añadir
    </Button>
    </form>
  );
}

export default AddWhist;