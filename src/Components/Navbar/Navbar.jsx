import React, { useState } from 'react'


import st from "../Navbar/Navbar.module.css";
import { Link } from 'react-router-dom';
export default function Navbar({setShowLogin}) {
const [activeMenu,setActiveMenu]=useState("home")


  return (
    <>
   <div className={st.navbar}>
      <Link to="/">
      <img src="/images/lazeez3.png" alt="logo" className={st.logo} />
      </Link>

      <ul className={st.navbarmenu}>
        <Link
          className={activeMenu === "home" ? st.active : ""}
          onClick={() => setActiveMenu("home")} to={"/"}
        >
          Home
        </Link>
        <a href='#exploreMenu'
          className={activeMenu === "menu" ? st.active : ""}
          onClick={() => setActiveMenu("menu")}
        >
          Menu
        </a>
        <a href='#appDownLoad'
          className={activeMenu === "mobile-app" ? st.active : ""}
          onClick={() => setActiveMenu("mobile-app")}
        >
          Mobile App
        </a>
        <a href='#footer'
          className={activeMenu === "contact-us" ? st.active : ""}
          onClick={() => setActiveMenu("contact-us")}
        >
          Contact Us
        </a>
      </ul>

      <div className={st.navbarright}>
       <div className={st.navbarsearchicon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-search " viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>

       </div>
   <div className={st.dot}>
 <Link to='/cart'>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
</svg>
 </Link>
   </div>
        <button  onClick={()=>setShowLogin(true)} className={st.btt}>Sign In</button>
      </div>
    </div>

    </>
  )
}
