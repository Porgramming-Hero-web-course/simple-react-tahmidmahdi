import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, gender, currentClub, salary, img } = props.player;
    return (
        <div className="player">
            {/* <div className="player-img">

            </div> */}
            <div className="player-data">
                <img src={img} alt="" />
                <h3>Name:  {name}</h3>
                <h5>Club:  {currentClub}</h5>
                <p>Salary:  {salary}</p>
                <p><small>Gender:  {gender}</small></p>
                <button><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>ADD ON THE TEAM</button>

            </div>
        </div>
    );
};

export default Player;