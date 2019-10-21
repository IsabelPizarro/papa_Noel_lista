import React from 'react';

import ListWhist from './ListWhist';
import AddWhist from "./AddWhist";
import './App.css';


class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      wish:"",
      wishes:[]
     
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleText = this.handleText.bind(this);
  }
  
 
   
  handleText (event) {
    
    const choice=event.currentTarget.value;
    console.log(choice);
    
    this.setState({wish:choice,
      
  });
}
  handleChange (event) {
    event.preventDefault();
    debugger;
    if (this.state.wish === "") {
      return "";
    }
    
    
    console.log(event.currentTarget.value);
    this.state.wishes.push(this.state.wish);
    
    this.setState({
      whises:this.state.wishes,
      wish:""
    });
    
    
    


   console.log(this.setState.wishes) 
console.log(this.state.wish);    
console.log(this.state.wishes);   

      
  
 }





  render(){
    const {wish, wishes}=this.state;
  return (
    <div className="App">
      <header className="App-header">
        <h1> Lista de Papa Noel</h1>
     
    
      </header>
      <main>
        <AddWhist 
        handleText={this.handleText}
      
        handleChange={this.handleChange}
        wishes={wishes}
        wish={wish}/>
        
        <ListWhist 
        wishes={wishes} />
      </main>
    </div>
  );
}
}
export default App;
