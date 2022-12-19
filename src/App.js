import React from 'react';
import './App.css';
import PostView from './PostView/postView_page';
import Landing_page from './LandingPage/landing_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post_form from './PostView/userPost/post_form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/PostView" element={<PostView/>} />
          <Route path="/" element={<Landing_page/>} />
          <Route path='/postview/userPost/post_form' element={<Post_form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;
