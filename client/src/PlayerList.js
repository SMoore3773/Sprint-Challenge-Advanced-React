import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList = props => {
    console.log('props in playerList',props)
    console.log('props.players in PL',props.players)

    return(
        <div>
           <p>players</p>
           <div>
                {props.players.map(pl =>
                        <PlayerCard
                            key={pl.id}
                            name={pl.name}
                            country={pl.country}
                            searches={pl.searches}
                        />
                    )
                }
            </div>
        </div>
    )
}
export default PlayerList;