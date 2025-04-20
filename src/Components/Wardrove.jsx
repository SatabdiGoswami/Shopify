import React from 'react'
import { Link } from 'react-router-dom'

export default function Wardrove() {
  return (
    <div id='wardrove' >
      <div id="w_nav">
         <div id="w_nav_left">
           <Link to='/'><i className="fa-solid fa-angle-left"></i></Link>
           <p>Your Wardrobe</p>
         </div>
         
         <button id='w_nav_mid'>Season Fit</button>

         <div id="w_nav_right">
            <div id="w_nav_right_input">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
              <input type="search" placeholder='Search the items -  men, women and child' />
            </div>
            <i className="fa-regular fa-bell"></i>
            <i className="fa-regular fa-user"></i>
         </div>
      </div>

      <div id="w_path">
        <Link to='/'><p>Home <i className="fa-solid fa-angle-right"></i></p></Link>
        <Link to='/'><p>Wardrobe <i className="fa-solid fa-angle-right"></i></p></Link>
      </div>

      <p id='w_title'>Choose any of your wardrobe clothings and get its matching outfits</p>

      <div id="w_con">
        <div id="w_con_left">
          <div id="w_con_left_part1">
            <i className="fa-solid fa-image"></i>
            <img src="\Images\ad3.jpg" alt="" />
          </div>
          <form id="w_con_left_part2">
            <p>Apply your prefrence</p>
            <select required name="" id="w_con_left_yorcatagory">
              <option value="">Select your cloth catagory</option>
              <option value="">Pants</option>
              <option value="">Shirt</option>
              <option value="">Shoes</option>
              <option value="">Shocks</option>
            </select>
            <select required name="" id="w_con_left_whtcatagory">
              <option value="">What do you want?</option>
              <option value="">Pants</option>
              <option value="">Shirt</option>
              <option value="">Shoes</option>
              <option value="">Shocks</option>
            </select>
            <button id='w_spin'>Apply & Search</button>

          </form>
        </div>
        <div id="w_con_right">

        <img src="\Images\ad3.jpg" alt="" />
        <img src="\Images\ad1.jpg" alt="" />
        <img src="\Images\ad2.jpg" alt="" />
        <img src="\Images\ad3.jpg" alt="" />
        <img src="\Images\ad4.jpg" alt="" />
        <img src="\Images\ad1.jpg" alt="" />
        <img src="\Images\ad2.jpg" alt="" />
        <img src="\Images\ad3.jpg" alt="" />
        <img src="\Images\ad4.jpg" alt="" />
        <img src="\Images\ad1.jpg" alt="" />
        <img src="\Images\ad2.jpg" alt="" />
        <img src="\Images\ad3.jpg" alt="" />
        <img src="\Images\ad4.jpg" alt="" />
        <img src="\Images\ad1.jpg" alt="" />
        <img src="\Images\ad2.jpg" alt="" />
        <img src="\Images\ad3.jpg" alt="" />
        <img src="\Images\ad4.jpg" alt="" />
        <img src="\Images\ad1.jpg" alt="" />
        <img src="\Images\ad2.jpg" alt="" />
        <img src="\Images\ad3.jpg" alt="" />
        <img src="\Images\ad4.jpg" alt="" />
        <img src="\Images\ad1.jpg" alt="" />
        <img src="\Images\ad2.jpg" alt="" />
        <img src="\Images\ad3.jpg" alt="" />
        <img src="\Images\ad4.jpg" alt="" />
        <img src="\Images\ad1.jpg" alt="" />
        <img src="\Images\ad2.jpg" alt="" />
        <img src="\Images\ad3.jpg" alt="" />
        <img src="\Images\ad4.jpg" alt="" />
        <img src="\Images\ad1.jpg" alt="" />
        <img src="\Images\ad2.jpg" alt="" />

        </div>
      </div>
    </div>
  )
}
