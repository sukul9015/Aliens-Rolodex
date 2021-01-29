import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {

      aliens : []

    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(name => this.setState({ aliens : name }))
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
