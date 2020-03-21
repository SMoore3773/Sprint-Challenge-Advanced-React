import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent} from '@testing-library/react';
import PlayerList from './PlayerList';
import PlayerCard from'./PlayerCard';
import Header from './Header';

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

test('darkmode button functioning', ()=>{
  const container = render (<Header />)
  const click = {button:0}
  fireEvent.click(container.getByText('Dark Mode Toggle'),click)
})
