import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    persons:[
      {name:'Max',age:28},
      {name:'Manu',age:29},
      {name:'Manu',age:29}
    ]
  } 
  switchNameHandler=()=>{
    // console.log('Was clicked');
    // manipulating state
    // DON'T DO THIS 
    // this.state.persons[0].name='Ajay';
    // setState merges old state with new state
    this.setState({
      persons:[
        {name:'Ajay',age:20},
        {name:'Vijay',age:21},
        {name:'Jay',age:20}
      ]});
  }
  // in normal js=onclick on the other hand react=onClick
  // state is a special property
  // if the state property is changed then react will lead react to re-render the dom
  // react will do for us is it will look at our state and see which part of it we're overwriting or changing it will not discard other state but it will simply merge the old state with the new one
  // If the state or props changes , react re-render the dom
  render() {
    return (
        <div className="App">
        <h1>Hi, I'm react App</h1>
        <p>This is really working</p>
        {/* Don't use () in onClick otherwise react will just call the function as it render it we only need to pass the function name that is only by reference*/}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // Props are set and passed from outside into a particular component
    // State is managed from inside a component
    // convention uppercase for component and lowercase for native html, so that react can identify 
    // Wrap everything into one root per component
    // We can't use class as it is a reserved in javascript
    // React is required to import as after compiling jsx it turns out to React.createElement();
    // React.createElement('html-tag','configuration/className','children/body');
    // return React.createElement('div', null, 'h1', 'Hi I\'m a React App');
    // return React.createElement('div',null,React.createElement('h1',null,'Hi I\'m a React App'));
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I\'m a React App')); this becomes difficult while nesting better use React
  }
}

export default App;
