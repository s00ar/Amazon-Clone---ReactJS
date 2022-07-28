import React from 'react';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import arrow from "./Down_Arrow_Icon.png";
  
function PageNotFound() {
  return (
    <div>
    <Header />
    <div className='space center'>
        <h1>404 Error</h1>
        <h2>Page Not Found</h2></div>
        {/* Agregué este mensaje como para darle un poco más de vida a la página */}
        <div className="small-box center space"> <h3> We are really sorry but the page your trying to visit doesn't exists.        Perhaps some of the things you are looking for are in our catalog below.</h3></div>
        <img className="med-img" src={arrow} alt="down-arrow"/>
        <Home />
    </div>
  )
}
  
export default PageNotFound;
