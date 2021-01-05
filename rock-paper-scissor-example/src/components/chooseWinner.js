import React from 'react';

function declareWinner(userWeapon, computerWeapon) {
    let winner = '';
    if(userWeapon === computerWeapon && userWeapon !== '') {
        winner = 'Lika';
    } else if (userWeapon == 'sten') {
        if (computerWeapon == 'påse') {
            // Vinner datorn
           winner = 'Datorn vann!';
        } else {
            // Vinner användaren
            winner = 'Du vann!';
        }
    } else if (userWeapon == 'sax') {
        if (computerWeapon == 'sten') {
            // Vinner datorn
            winner = 'Datorn vann!';
        } else {
            // Vinner användaren
            winner = 'Du vann!';
        }
    } else if (userWeapon == 'påse') {
        if (computerWeapon == 'sax') {
            // Vinner datorn
            winner = 'Datorn vann!';
        } else {
            // Vinner användaren
            winner = 'Du vann!';
        }
    }

    return winner;
}


function ChooseWinner(props) {
    const won = declareWinner(props.user, props.computer);

    return (
        <section>
            <h2>{ won }</h2>
            <p>Du valde: { props.user }</p>
            <p>Datorn valde: { props.computer }</p>
        </section>
    )
}

export default ChooseWinner;