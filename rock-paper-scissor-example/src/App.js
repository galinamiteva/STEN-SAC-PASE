import './App.css';
import React from 'react';

import ChooseWeapon from './components/chooseWeapon';
import ChooseWinner from './components/chooseWinner';

/**
 1. En klasskomponent som renderar två komponenter och håller koll på vårt state som är användarens och 
 datorns val av vapen. I denna komponent slumpas datorns val.
 2. En funktionell komponent som renderar olika vapen med knappar (sten, sax och påse) och uppdaterar state med
 valt vapen.
 3. En funktionell komponent som visar vinnaren.
 */

 class App extends React.Component {
   constructor() {
     super();

     this.state = {
       user: '',
       computer: '',
       weapons: ['sax', 'sten', 'påse']
     }

     this.handleClick = this.handleClick.bind(this);
   }

   randomComputerWeapon() {
     const randomNumber = Math.round(Math.random() * 2);
     
     //För att uppdatera state skicka in ett objekt med den egenskap du vill uppdatera
     this.setState({ computer: this.state.weapons[randomNumber] });
   }

   handleClick(event) {
     console.log('Du klickade på ', event.target.value);
     this.setState({ user: event.target.value });

     this.randomComputerWeapon();
   }

   render() {
     return (
       <section>
         <h1>Sten, sax eller påse?</h1>
         <ChooseWeapon updateUser={ this.handleClick } />
         <ChooseWinner user={ this.state.user } computer={ this.state.computer } />
       </section>
     )
   }
 }

export default App;
