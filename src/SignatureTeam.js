import React from 'react';

const SignatureTeam = ({ image, citation }) => (
  <footer
  style={{
    backgroundImage: "url(" + 'https://i.pinimg.com/originals/19/1d/c2/191dc28888396f1bdcc18e95b1d33ae6.gif' + ")",
    color:'white'
  }}
  >
      <h5 className="text-uppercase">Atelier Props crée par l'élite</h5>
      <p>Toute ressemblance avec des personnes existantes ou ayant existé serait purement fortuite</p>
    <img
      src={image}
      alt="Elite"
    />
    <div className="footer-copyright text-center py-3">© 2019 Copyright:
      <p>{citation}</p>
    </div>
  </footer >
);

export default SignatureTeam;