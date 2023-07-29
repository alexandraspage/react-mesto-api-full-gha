import logo from '../images/logo.svg';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';


function Header(props) {
  const email = props.userEmail;
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="лого Место" />
      <div className='header__container'>
        <p className='header__email'>{email}</p>
        <Routes>
          <Route path="/sign-in" element={<NavLink to="/sign-up" replace className="header__link">Регистрация</NavLink>}></Route>
          <Route path="/sign-up" element={<NavLink to="/sign-in" replace className="header__link">Войти</NavLink>}></Route>
          <Route path="/" element={<NavLink to="/sign-in" onClick={props.signOut} replace className="header__link">Выйти</NavLink>}></Route>

        </Routes>
      </div>
    </header>
  )
}
export default Header;