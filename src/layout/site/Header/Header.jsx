import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='all_header'>

      <div className='header_ust'>

        <div className='header_ust_input'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text " placeholder='Search' />
        </div>

        <div className='header_ust_logo'>
          <h3>Shoppers</h3>
        </div>

        <div className='header_ust_icon'>
          <ul>
          <li><i class="fa-solid fa-user"></i></li>
          <li><i class="fa-regular fa-heart"></i></li>
          <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>

      </div>

      <div className='header_alt'>
        <ul>
          <li> Home <i class="fa-solid fa-chevron-down"></i></li>
          <li> About <i class="fa-solid fa-chevron-down"></i></li>
          <li> Shop</li>
          <li> Cataloge</li>
          <li>New Arrivals</li>
          <li>Contact</li>

        </ul>

      </div>

    </div>
  )
}

export default Header
