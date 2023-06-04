import React from 'react';
import Logo from './logo.png';

const Header = () => {
  return (
    <header className="flexContainer">
      <img src={Logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
    </header>
  );
};

export default Header;
