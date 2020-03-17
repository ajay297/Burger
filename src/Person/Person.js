// Create a functional component
// A component is just a function which returns some jsx,html
import React from "react";
// It is able to take the attributes and gives us access inside our receiving component on an object name props
// there is a special props called children to access data between opening and closing component  we can also pass html through children
const person=(props)=>{
    // return <p>I'm a Person and I am {Math.floor(Math.random()*30)} years old!</p>
return (
    <div>
        <p>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
);
}
// to treat something as javascript code rather than text we should write that code in curly braces{};
export default person;