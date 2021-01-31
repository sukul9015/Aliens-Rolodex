import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  constructor(){
    super();

    this.state = {

      aliens : [],
      searchField : ''

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
        <input type='search' placeholder='Search Aliens' onChange={ e => { 
          this.setState({ searchField : e.target.value }, () => {console.log(this.state);} /*caLLback for synchronous function)*/;
         
          } } />
        <CardList aliens = {this.state.aliens} />     
    </div>
    );
  }
}

export default App;
