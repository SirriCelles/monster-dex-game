import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  // constructor runs first
  constructor() {
    super();

    // init state
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // The the lifecycle methods commenses
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    },
    () => {
      console.log(this.state);
    }
    ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {searchField}
      }
    );
  }

  // this runs next and termiines what to show
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(el => el.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monters' 
          onChange={onSearchChange} />
        {
          filteredMonsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>;         
          })
        }

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}


export default App;