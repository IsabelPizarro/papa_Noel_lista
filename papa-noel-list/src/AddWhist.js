import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 600
  }
}));

 class AddWhist extends React.Component {
 
  constructor() {
    super();
    
    this.handleChange=this.handleChange.bind(this);
    this.handleText=this.handleText.bind(this);
   
  }
  handleChange(event) {
    
    console.log(event.currentTarget.value);
    
  }
  handleText(event){
  
  
    console.log(event.currentTarget.value);
  }

  render(){
  const {handleChange, handleText, wish} = props;
  

  

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
     
      <Button variant="contained" color="primary" value="enviar"  onClick={handleChange}>
     Añadir
    </Button>
    </form>
  );
}
}
export default AddWhist;