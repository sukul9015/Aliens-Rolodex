import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {

      aliens : [
        {
          name : 'Canon Bolt',
          id : '01'
        },
        {
          name : 'Spider Monkey',
          id : '02'
        },
        {
          name : 'Sting Fly',
          id : '03'
        },
        {
          name : 'Heat Blast',
          id : '04'
        }
      ]

    };
  }

  render(){
    return(
      <div className="App">

        {
          this.state.aliens.map(alien => (
            <h1 key = {alien.id} >{alien.name}</h1>
          ))
        }

    </div>
    );
  }
}

export default App;
