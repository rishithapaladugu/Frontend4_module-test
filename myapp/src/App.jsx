import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./redux/postSlice";
import DisplayPosts from "./DisplayPosts";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import SinglePost from "./SinglePost";

const App = () => {
  // const location = useLocation();

  return (
    <div>
       <h1>Social Media App</h1>
     <div className="underline"></div>
      <Routes>
        <Route path="/singlepost/:id" element={<SinglePost />}></Route>
        <Route path="/" element={<DisplayPosts/>}/>
      </Routes>

    
      {/* {location.pathname === "/" && <DisplayPosts />} */}
    </div>
  );
};

export default App;
