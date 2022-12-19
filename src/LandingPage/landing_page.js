import React from 'react';
import { Link } from 'react-router-dom';
 
export default function Landing_page() {
  return (
    <div>
       <nav className="navbar bg-light">
          <div className="container-fluid">
            <div className="container-fluid">
              <img id="logo" src="./image/instaLogo10X.png" />
              <h1 id="heading">Instaclone</h1>
            </div>
          </div>
        </nav>
      <div className='land_section'>
        <div >
          <img src='./image/landingImg.jpg'/>
        </div>
        <div className='land_button_sec'>
          <h2>10x Team 04</h2>
          <Link to={"/postview"}><button className='land_button'>Enter</button></Link>
        </div>
      </div>
    </div>
  )
}
