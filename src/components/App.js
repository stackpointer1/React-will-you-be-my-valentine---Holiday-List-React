
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India', location:'location1' },
    { name: 'Amsterdam', country: 'Netherlands' ,location:'location2'},
    { name: 'New York', country: 'USA',location:'location3' },
    { name: 'Darjeeling', country: 'India',location:'location4'  },
    { name: 'Tokyo', country: 'Japan',location:'location5'  },
    { name: 'Lonavala', country: 'India',location:'location6'  },
    { name: 'Brandenburg Gate', country: 'Germany',location:'location7' },
    { name: 'Reichstag Building', country: 'Germany',location:'location8'  },
    { name: 'Museum Island', country: 'Germany',klocation:'location9'  },
    { name: 'Munnar', country: 'India',location:'location10'  },
    { name: 'Leh Ladakh', country: 'India' ,location:'location11' },
    { name: 'Goa', country: 'India',location:'location12'  },
    { name: 'Agra', country: 'India' ,location:'location13' },
    { name: 'Dalhousie', country: 'India' ,location:'location14' },
    { name: 'Coorg', country: 'India',location:'location15'  },
    { name: 'Rome', country: 'Italy',location:'location16'  },
    { name: 'Milan', country: 'Italy' ,location:'location17' },
    { name: 'Venice', country: 'Italy',location:'location18'  },
    { name: 'Varanasai', country: 'India',location:'location19'  },
    { name: 'Jaipur', country: 'India',location:'location20'  },
    { name: 'The Hofburg', country: 'Austria',location:'location21'  },
    { name: 'Belvedere Palace', country: 'Austria' ,location:'location22' },
    { name: 'St. Stephen Cathedral', country: 'Austria' ,location:'location23' },
    { name: 'Kahna National Park', country: 'India',klocation:'location24'  },
    { name: 'Amritsar', country: 'India',location:'location25'  },
    { name: 'Mussoorie', country: 'India',location:'location26'  },
    { name: 'Mount Abu', country: 'India',location:'location27'  },
    { name: 'Tirupati', country: 'India',location:'location28'  },
    ]
  }

  render() {
    return (
      <div id="main">
      <ol>
        {this.cityList.filter(location=>location.country==='India').map(filteredLocation=>(
          <li key="filteredLocation.location">{filteredLocation.name},{filteredLocation.country}
          </li>
          
        ))}
        </ol>
    </div>
    )
  }
}



export default App;