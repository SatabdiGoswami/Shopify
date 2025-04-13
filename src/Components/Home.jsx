import React from 'react';
import Nav from './Nav';
import BannerCarousel from './carousel'; 
import Deals from './Deals';
import Category from './Category';


export default function Home() {
  return (
    <div id='Home'>
    <Nav/>

      <div id="home_catagory">
        <button id=''>Men <i className='fa-solid fa-angle-down'></i></button>|
        <button id=''>Women <i className='fa-solid fa-angle-down'></i></button>|
        <button id=''>Baby <i className='fa-solid fa-angle-down'></i></button>|
        <button id=''>Children <i className='fa-solid fa-angle-down'></i></button>|
        <button id=''>Pets <i className='fa-solid fa-angle-down'></i></button>|
        <button id=''>Trend <i className='fa-solid fa-angle-down'></i></button>|
        <button id=''>Wardrobe <i className='fa-solid fa-angle-down'></i></button>

        <div id="home_catagory_slide">          
        </div>
      </div>

    <BannerCarousel /> 
    <Deals/>
    <Category/>
    </div>
  )
}
