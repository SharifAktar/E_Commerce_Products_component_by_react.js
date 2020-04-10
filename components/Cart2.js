import React, { Component } from 'react'
import './myStyles.css'
 class Cart2 extends Component {
    render() {
        return (
            <div>
<div class="products_container products_Male"/>
  <div class="products_item">
    <a href="#">
    <div class="products_image">
      <img src="1518-18_dziny-knee-embroidery-blue.jpg"/>
    </div>
    </a>
   
    <div class="products_footer">
      <div class="products_title">
      Regular Fit Tapered Jeans
      </div>

      <div class="products_desc">
       Pierr Cardin Fit Jeans Autumn for Men. Available at different sizes.
      </div>
      
      <div class="products_price">
        CZK. 3500 <span class="discount">CZK. 4800</span>
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
        CZK. 3500 <span class="discount">CZK. 4800</span>
      </div>
     
  </div>
    </div> 
    </div>
           
        )
    }
}

export default Cart2
