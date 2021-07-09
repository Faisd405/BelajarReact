import React from 'react';
import  './App.css';


function HandlingEvent() {
  return(
    <Submit />,
    <Toggle />
    )
} 

function Submit(){
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    alert("You clicked submit!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    // cara binding seperti ini diperlukan untuk membuat `this` dapat berfungsi -
    // pada callback binding
    this.handleClick = this.handleClick.bind(this); 
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default HandlingEvent;