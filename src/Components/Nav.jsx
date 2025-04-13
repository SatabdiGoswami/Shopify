import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div id='Nav'>
      <div id="Nav_left">
        <h4 id="Nav_left_title">Shopify</h4>
      </div>
      <div id="Nav_middle">
        <div id="nav_middle_input">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
          <input type="search" placeholder='Search the items -  men, women and child' id="Nav_right_search" />
        </div>
          
      </div>
      <div id="Nav_right">
        <i className="fa-regular fa-bell"></i>
        <i className="fa-regular fa-user"></i>
      </div>
    </div>
  )
}
