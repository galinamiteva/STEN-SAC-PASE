import React from 'react';

function ChooseWeapon(props) {
    return (
        <section>
            <button value="sten" onClick={ props.updateUser }>Sten</button>
            <button value="sax" onClick={ props.updateUser }>Sax</button>
            <button value="påse" onClick={ props.updateUser }>Påse</button>
        </section>
    )
}

export default ChooseWeapon;