import React from 'react';
import NavBar from '../NavBar/NavBar.js';

const Header = (params) => {
  return (
    <>
      <h1>{params.title}</h1>
      <NavBar />
    </>
  );
}

export default Header;
