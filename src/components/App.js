
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    const locations = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
  
    ]
  }

  render() {
    return (
      <div id="main">
        {locations.map(location=>(
          <l1 key={location.country}>{location.name}</l1>
        ))}
      </div>
    );
  }
}


export default App;
