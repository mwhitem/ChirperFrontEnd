import React from 'react';


const Chirp = props => {
    const message = [{
        id: 'item1',
        username: 'madison',
        text: 'my chirp'
    },
    {
        id: 'item2',
        username: 'nosidam',
        text: 'chirp my'
    },
    {
        id: 'item3',
        username: 'maddie',
        text: 'ym prihc'
    }
];
    const myChirpTest = message.map(val => {
        return <p key = {`custom-${val.id}`}>@{val.username}: {val.text}</p>
    });
    return <div>{myChirpTest}</div>
    }

export default Chirp;