import React, { useEffect, useState } from "react";
  import data from "../Mock-data/data.json";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function Postview() {
  // let detail =[];
  const [detail,setdetail] = useState([])
  useEffect(() => {
    axios.get("https://instabackend-jmp4.onrender.com/user/api/v1/posts")
      .then(res => setdetail(res.data.Result.reverse()))
      .then((data) => {
        // detail = [...detail,...data.massage];
      }).catch((e) => {
        console.log("ERROR is ", e)
      })
  },[]);
  console.log(detail)
  // const detail = data.user;
  return (
    <>
      <div >
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <div className="container-fluid">
              <img id="logo" src="./image/instaLogo10X.png" />
              <h1 id="heading">Instaclone</h1>
            </div>
            <Link to={'./userPost/post_form'}><img id="camlogo" src="./image/camera.png" /></Link>
            {/* <i className="fa-solid fa-camera"></i> */}
          </div>
        </nav>
        <div className=" maincontainer">
          {detail?.map((elem, indx) => {
            return (
              
              <div key={indx} className="  card">

                <div className="heading_container">

                  <span className="city_and_user_name_container">
                    <p className="user_name">{elem.name}</p>
                    <p className="location">{elem.location}</p>
                  </span>
                  <span className=" dots_container">

                    <h3 >...</h3>
                  </span>

                </div>

                <div className="image_container">
                  <img id="post" src={elem.imageUrl} alt="img1" />
                  <div className="icon_container">
                    <i className="fa-regular fa-heart"> <img src="./image/heart.png" width="16 px" height="16 px" /></i>
                    <i className="fa-solid fa-rocket"><img src="./image/img.png" width="16 px" height="16 px" /></i>


                  </div>
                </div>

                <div className="date_Container">
                  <p>{new Date(elem.date).toLocaleDateString()}</p>
                </div>

                <div className="likes_Counter">
                  <p>{elem.likes} likes</p>
                </div>
                <div className="description_container">
                  <p>{elem.description}</p>
                </div>


              </div>

             );
          })}

        </div>
      </div>
    </>
  );
}
