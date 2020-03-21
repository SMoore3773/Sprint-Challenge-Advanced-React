import React from 'react';
import PlayerList from './PlayerList';
import Header from './Header';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      players:[]
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(res => this.setState({players: res}))
    .catch(err => console.log('catch error in api request CDM', err))
  }

  render(){
    console.log('this.state in app.js',this.state)
    return (
      <div>
        <Header />
        <PlayerList 
          players = {this.state.players}
        />
      </div>
    )
  }
}

export default App;
