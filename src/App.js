import React, { Component } from 'react';
import './App.css';
import Avatar from "./Avatar";
import SignatureTeam from './SignatureTeam';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.geniescout.com/scope/48038683.png" className="App-logo" alt="logo" />
          <h1>SandBox ateliers JS</h1>
        </header>
        <Avatar
          image="https://www.mhscfoot.com/sites/default/files/styles/195x295/public/photo_joueur/mahtat.jpg?itok=xGYAes9_"
          firstName='Anisse'
          lastName='Mahtat'
          surnom="canaillou"
          description="Ballon dort du plus jeune développeur"
          isJS
        />
        <Avatar
          image="https://cdn.discordapp.com/attachments/542989969917083648/554978036890599425/image0.gif"
          firstName='Léa'
          lastName='Godard'
          surnom="La machine Feed."
          description="Sorcière qui fait semblant d'être végétarienne"
          isJS
        />
        <Avatar
          image="https://image.noelshack.com/fichiers/2019/13/3/1553696289-benoit-superboss.gif"
          firstName='Benoit'
          lastName='Le boss'
          surnom="Le T1000 du JavaScript"
          description="Enseigne aux humains le JS"
          isJS
        />
        <Avatar
          firstName="Le Java"
          lastName='Censuré'
          surnom="Celui-dont-on-ne-prononce-pas-le-nom"
          description="**BIP***BIP***BIP**"
        />
        <SignatureTeam
          image="https://cdn.discordapp.com/attachments/542989969917083648/555412055037837312/image0.gif"
          citation="CodeCodeCodec"
        />
      </div>
    );
  }
}
export default App;
