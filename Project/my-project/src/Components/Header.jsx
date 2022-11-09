import React from "react";
import css from "./Header.css"
const Header=()=>{
   return (
    <div id="like" style={{css}}>
        <h1>What are you looking for?</h1>
        <div>
        <input placeholder="Search for Medicine"></input> 
        <div><h4>Search</h4></div>
        </div>
    </div>
   )
}

export default Header 