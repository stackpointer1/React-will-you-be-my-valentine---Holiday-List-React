
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India', key:'location1' },
    { name: 'Amsterdam', country: 'Netherlands' ,key:'location2'},
    { name: 'New York', country: 'USA',key:'location3' },
    { name: 'Darjeeling', country: 'India',key:'location4'  },
    { name: 'Tokyo', country: 'Japan',key:'location5'  },
    { name: 'Lonavala', country: 'India',key:'location6'  },
    { name: 'Brandenburg Gate', country: 'Germany',key:'location7' },
    { name: 'Reichstag Building', country: 'Germany',key:'location8'  },
    { name: 'Museum Island', country: 'Germany',key:'location9'  },
    { name: 'Munnar', country: 'India',key:'location10'  },
    { name: 'Leh Ladakh', country: 'India' ,key:'location11' },
    { name: 'Goa', country: 'India',key:'location12'  },
    { name: 'Agra', country: 'India' ,key:'location13' },
    { name: 'Dalhousie', country: 'India' ,key:'location14' },
    { name: 'Coorg', country: 'India',key:'location15'  },
    { name: 'Rome', country: 'Italy',key:'location16'  },
    { name: 'Milan', country: 'Italy' ,key:'location17' },
    { name: 'Venice', country: 'Italy',key:'location18'  },
    { name: 'Varanasai', country: 'India',key:'location19'  },
    { name: 'Jaipur', country: 'India',key:'location20'  },
    { name: 'The Hofburg', country: 'Austria',key:'location21'  },
    { name: 'Belvedere Palace', country: 'Austria' ,key:'location22' },
    { name: 'St. Stephen Cathedral', country: 'Austria' ,key:'location23' },
    { name: 'Kahna National Park', country: 'India',key:'location24'  },
    { name: 'Amritsar', country: 'India',key:'location25'  },
    { name: 'Mussoorie', country: 'India',key:'location26'  },
    { name: 'Mount Abu', country: 'India',key:'location27'  },
    { name: 'Tirupati', country: 'India',key:'location28'  },
    ]
  }

  render() {
    return (
      <div id="main">
        {this.cityList.filter(location=>location.country=='India').map(filteredLocation=>(
          <li key="key">{filteredLocation.name},{filteredLocation.country}
          </li>
        ))}
    </div>
    )
  }
}



export default App;