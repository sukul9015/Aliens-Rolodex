import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.componnt';

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

    const { aliens , searchField } = this.state;
    const filteredAliens = aliens.filter(alien => alien.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="App">
        <SearchBox 
          placeholder = 'Search Aliens' 
          clickmethod = { e => { this.setState({ searchField : e.target.value });  } }
        />
        <CardList aliens = {filteredAliens} />     
    </div>
    );
  }
}

export default App;
