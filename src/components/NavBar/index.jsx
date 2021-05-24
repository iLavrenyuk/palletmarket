import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../constants/Routes';

export const NavBar = () => {
  return (
    <header className="nav">
      <div className="container">
        <div className="logo">
          <NavLink exact to={routes.Home}>
            <span className="title">PalletMarket</span>
            <img src="" alt="logo" />
          </NavLink>
        </div>
        <div className="links">
          <NavLink exact to={routes.Products} className="item">
            Товары
          </NavLink>
          <NavLink exact to={routes.Home} className="item">
            Главная
          </NavLink>
        </div>
      </div>
    </header>
  );
};
