import React from "react"

function Header(){
   return (
    <div className="header">
        <input className="searchInput" placeholder="What Are You Looking For?"/>
        <button className="searchButton" >Search</button>
    </div>
   )
}

export default Header