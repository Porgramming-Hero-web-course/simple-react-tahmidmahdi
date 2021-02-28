import React from 'react';

const playerData = (props) => {
    console.log('aaa', props.player);
    const {name, img} = props.player;
    return (
        <div>
            <img src={img} alt=""/>
            <h3>{name}</h3>
        </div>
    );
};

export default playerData;