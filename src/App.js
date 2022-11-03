import { Component } from 'react';
import './App.css';

class App extends Component {
  // constructor runs first
  constructor() {
    super();

    // init state
    this.state = {
      monsters: []
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


  // this runs next and termiines what to show
  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monters' 
          onChange={(event) => {
            
          }} />
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>;         
          })
        }
      </div>
    );
  }
}


export default App;