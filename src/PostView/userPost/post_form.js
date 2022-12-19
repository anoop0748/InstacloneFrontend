import React, { useState  } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";
import './post_form.css'
import axios from 'axios'
import redirect from "react"
import Postview from "../postView_page";
import {Navigate} from "react-router-dom"


const Post_form = ()=>{
    
    
    const form_data = useRef();
    const [img,setimg] = useState("")
    function get_data(e){
         e.preventDefault()
       
        console.log(img.tempFilePath)
        let data = {
            "name": form_data.current.author.value,
            "location": form_data.current.location.value,
            "likes": 1,
            "description":form_data.current.description.value,
            "PostImage":img,
            "date": new Date().toLocaleDateString()    
        }
        
          
        postData("https://instabackend-jmp4.onrender.com/user/api/v1/posts",data)

    }
    
    async function postData(url, data) {
        let formData = new FormData();
        formData.append("name",data.name);
        formData.append("location",data.location);
        formData.append("likes",data.likes);
        formData.append("description",data.description);
        formData.append("PostImage",data.PostImage);
        formData.append("date",data.date);
         let response = await axios.post(url,formData);
        if(response.status === 200){
            console.log("yes")
        }
           
    }
    const [user_img,setUser_img] = useState("No File Chosen");
    console.log(user_img)
    return (
        <>
            <div>
                {/* <img src={user_img}/> */}
            </div>
            <div id='user_post_form'>
            <form ref={form_data} encType='multipart/form-data' >
            <div className="input-group">
                <input type="text" id="input_file_text" placeholder={user_img} readOnly=""/>
                      <label id="input_file">
                            <span className="input-group-text">
                              Browse… <input type="file" id="image" name="image" style={{display: 'none'}}
                               onChange={(e)=>{setimg(e.target.files[0]);setUser_img(e.target.value)}} multiple=""/>
                      </span></label>
                      
                  </div>
                {/* <div>
                   
                    <input type="file"  id="image" name="image" onChange={(e)=>{setUser_img(e.target.value)}}/>
                    
                    
                </div> */}
                <div>
                    <input type="text" placeholder="Author" id="author" name="author"/>
                    <input type= "text" placeholder="Location" id="location" name="location"/>
                </div>
                <div>
                    <input type="text" placeholder="Description" id="description" name="description"/>
                </div>
                <div>
                    <button onClick={get_data} id='postButton' >Post</button> 
                </div>
                

                

            </form>
            </div>
        </>
    )
}

export default Post_form;