import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';
import PlayerList from './PlayerList';
import PlayerCard from'./PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders PlayerCard on component', async() => {
  const container = render (<PlayerCard />)
  container.getByText(/home country/i)
  
});

test('renders PlayerList', async()=>{
  const players = [{name: 'player1',country: 'Country', searches: '2'}]
  const container = render (<PlayerList key={players.id} players={players}/>)
  container.getByText(/players/i)
});


