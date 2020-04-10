import React, { Component } from 'react'
import './myStyles.css'
 class Cart extends Component {
    render() {
        return (
<div>
<div class="index_products_control">
  <div class="index_products_control__leftTitle">
    E-Commerce Products
  </div>
  <div class="index_products_control__left">
    <hr/>
  </div>

  <div class="index_products_control__right">
    <button onclick="showFemale(this)" class="button_female index_products_control__active">Female</button>
    <button class="button_male" onclick="showMale(this)">Male</button>
  </div>
</div>

<div class="products_container products_female"/>
 
  
  <div class="products_item">
    <a href="#">
    <div class="products_image">
      <img src="19338936-sCrzgXmj.jpg"/>
    </div>
    </a>
    
    <div class="products_footer">
      <div class="products_title">
      Women's jeans Skinny
      </div>

      <div class="products_desc">
       Pierr Cardin Fit Jeans Autumn for Men. Available at different sizes.
      </div>
      
      <div class="products_price">
        CZK. 2500 <span class="discount">CZK.3600</span>
      </div>
    </div>
    <div class="products_special">
      <div class="products_sale">Sale</div>
      <div class="products_new">New</div>
    </div>
    <div class="products_control">
      <div class="products_sizes">Sizes: <span>S M L XL</span></div>
      <button class="products_buy">Add To Cart</button>
      <button class="products_heart">Wishlist</button>
      <div class="products_price">
        CZK. 2500 <span class="discount">CZK. 3600</span>
      </div>
    </div>  
    </div>
    </div>
        )
    }
}

export default Cart
