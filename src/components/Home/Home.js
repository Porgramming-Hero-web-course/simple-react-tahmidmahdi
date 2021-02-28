import React, { useEffect, useState } from 'react';
import './Home.css'
import playerData from '../../data/data.json'
import Player from '../Player/Player';

const Home = () => {
    //player is a list of array
    const [players, setPlayer] = useState([]);
    useEffect(() => {
        setPlayer(playerData);
    })
    // console.log(player);
    return (
        <div className="home">
            <div className="name-unit">
                <div>
                    {
                        players.map(player => <Player player={player} id={player.id}></Player>)
                    }
                </div>
            </div>
            <div className='cart-unit'>
                
            </div>
        </div>
    );
};

export default Home;