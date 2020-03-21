import React from 'react';

const PlayerCard = props => {
    // console.log('props in playerCard',props)
  
    return(
        <div>
            <h2>{props.name}</h2>
            <p>Home Country: {props.country}</p>
            <p>Times Searched: {props.searches}</p>
        </div>
    )
}
export default PlayerCard;