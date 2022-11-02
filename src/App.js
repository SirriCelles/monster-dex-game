import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12rfdjldl93u'
        },
        {
          name: 'Frank',
          id: '12rfdjldlo3u'
        }, 
        {
          name: 'Jacky',
          id: '12rkdjldl93u'
        },
        {
          name: 'Jed',
          id: '124fdjldl93u'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
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
