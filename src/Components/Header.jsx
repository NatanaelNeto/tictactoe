import React, { useState } from 'react';
import Logo from '../data/logo.png';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <div className="header_logo">
        <img src={ Logo } alt="Tic Tac Toe" />
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="header_menu">
        <button
          className="header_menu-button"
          type="button"
          onClick={ () => setMenu(!menu) }
        >
          <MenuRoundedIcon style={ { fontSize: "50px" } } />
        </button>
        <nav className={ menu ? 'header_nav' : 'header_nav--disable' }>
          <ul className="header_nav-list">
            <li className="header_nav-element">Reiniciar</li>
            <li className="header_nav-element">Nesn, o Game Dev</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
