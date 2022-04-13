import React from 'react';
import headerLogo from './images/logo.png';
import '../App.css';
import './Header.css';

function Header() {
  return (
    <div className='hero-container'>

<header id="container">
      <div id="nav-bar">
        <div id="nav-belt">
          <div class="nav-left">
            <div id="nav-logo">
              <img src={headerLogo} class="rounded float-start" alt="..."></img>
            </div>
          </div>
          <div class="nav-fill">
            <div id="nav-search">
              <form id="nav-search-bar-form">
                <div class="nav-left">
                  <a href="">ALL</a>
                </div>
                <div class="nav-fill">

                </div>
                <div class="nav-right">
                  <button type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
          <div class="nav-right">
            <div id="nav-tools">
              <a href="/">Accounts & Lists</a>
              <a href="/">Returns & Orders</a>
              <a href="/">Cart</a>
            </div>
          </div>
        </div>


        <div>
        <div class="nav-fill">
          <a href="#">All</a>
          <a href="#">Fashion</a>
          <a  href="#">Mobiles</a>
          <a href="#">Gift ideas</a>
          <a href="#">Amazon pay</a>
          <a href="#">sports,fitness and outdoors</a>
          <a href="#">Gift Cards </a>
          <a href="#">computers</a>
          <a href="#">customer service</a>
          <a href="#" class="font-weight-bold">CINDRELLA</a>
          <a href="#">Join prime now</a>
          <a href="#">|</a>
          <a href="#">prime video</a>
          </div>
          </div>
        
        </div>
        </header>
      
    </div>
  );
}

export default Header;
