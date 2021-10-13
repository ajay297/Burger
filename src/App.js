import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id:'akjn',name: 'Max', age: 28 },
      { id:'ajsns',name: 'Manu', age: 29 },
      { id:'nnqqsk',name: 'Manu', age: 29 }
    ]
  }
  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // manipulating state
    // DON'T DO THIS 
    // this.state.persons[0].name='Ajay';
    // setState merges old state with new state
    // We can actually pass a reference to this handler as a property to our component
    // We can actually pass method as props
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'AJay', age: 21 },
        { name: 'Vijay', age: 20 }
      ]
    });
  }
  nameChangedHandler = (event,id) => {
    const personsIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    // const personsIndex=index;
    // const person=Object.assign({},this.state.persons[personsIndex]);
    const person={...this.state.persons[personsIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personsIndex]=person;
    this.setState({persons: persons});
  }
  // in normal js=onclick on the other hand react=onClick
  // state is a special property
  // if the state property is changed then react will lead react to re-render the dom
  // react will do for us is it will look at our state and see which part of it we're overwriting or changing it will not discard other state but it will simply merge the old state with the new one
  // If the state or props changes , react re-render the dom
  // passing arguments to the handler function
  // this.switchNameHandler.bind(this,arguments);
  // or
  // ()=>this.switchNameHandler()
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: (doesShow = !doesShow) });

  }
  deletePersonHandler=(personIndex)=>{
    // const persons=this.state.persons;
    // persons.splice(personIndex,1);
    // this.setState({persons:persons}); //this a flaw
    // Alternative
    // const persons=this.state.persons.slice();
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={()=>this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event,person.id)}/>

          })}
          {/* We should assign a key property to allow react to keep track of the individual elements so that it can compare between the different elements to find out which elements changed and which didn't so that it only re-renders the elements which did change and not the whole list. React compares with the future and the past*/}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "zero")}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> 
            gender={this.state.persons[2].gender}
            
            */}
        </div>

      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm react App</h1>
        <p>This is really working</p>
        {/* Don't use () in onClick otherwise react will just call the function as it render it we only need to pass the function name that is only by reference
        if is not used here,use tertnary condition*/}
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
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
