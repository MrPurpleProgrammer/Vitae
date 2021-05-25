import React, { Component } from 'react';
import Game from './components/Game';
import './style.scss';
class PurpleLife extends Component {

  render() {
    return (
      <div className="purpleLife">
        <div>
          <p> Credits to: <a className="url" href="https://github.com/audrium">Audrius Mečionis</a> </p>
          <h1>(This is Conways Game of Life, click the play button.)</h1>
          <p id="hiddenTreasureKey" className="none">mrpurple.org/api/treasure_map/key/{"My Favorite Comic (no spaces or capital letters)"}?quote={"Type the quote given to you through my Favorite Comic."}&walletAddr={"Your Ethereum Wallet Address"}&name="{"Your Name/Pseudonymn"}"</p>
        </div>
        <Game />
      </div>
    );
  }
}

export default PurpleLife;
