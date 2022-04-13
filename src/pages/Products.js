import React from 'react';
import sofa from './images/sofa.png';

import homestyle from './images/homestyle.png';
import tvimage from './images/tvimage.png';
import watch from './images/tvimage.png';
import men from './images/men.png';
import mobile from './images/mobile.png';
import order from './images/order.png';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Products() {

  return(
<div id="main">
      <div class="banner">
        <div class="banner-text">

          <div>HOME SHOPPING SPREE</div>
          <div>Festive Edition</div>
          <div>UPTO 70% OFF</div>
          <div>4th - 10th september</div>
  
        </div>
        <div class="banner-image">
        <img src={sofa} alt="sofa" ></img>
      </div>      
    </div>


    <div class="container">

    <div class="row">
<div class="col-sm">  
  <div class="detail1">   
  Hi JOhn
  <br/>
  Customer since 2017
  <br/>
  Top links for you

  <div class="container">
    <div class="row">
      <div class="col">your orders
        <img src={order} alt="order" ></img>
      </div>
    </div>
  </div>
</div>
</div>

<div class="col-sm"> 
  <div class="detail2"> Up to 70%off|Electronics Clearance store
  <br/>
  
  <img src={tvimage} alt="Tv" ></img>
  <a href="">see more</a>
  </div>
</div>

<div class="col-sm"> 
  <div class="detail3">  Shop on the Amazon App 

    <p>Fast,convenient and secure|over 17 crore products in your pocket</p>
  </div>

</div>
</div>

      </div>
      
  
</div>



);
    
  
}
export default Products;