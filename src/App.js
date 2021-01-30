import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

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
        <CardList aliens = {this.state.aliens}>     

        </CardList>
    </div>
    );
  }
}

export default App;
