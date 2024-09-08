import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar =(setShowLogin) =>{

    const [menu , setMenu] = useState(null)

    return(
        <div className="navbar" >
            <Link to='/home'>
            <img src={assets.logo} alt="" className='logo' />
            </Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</Link>
                <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu === "menu"?"active":""}>menu</a>
                <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu === "mobile-app"?"active":""}>mobile-app</a>
                <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu === "contact-us"?"active":""}>contact-us</a>
            </ul>
           
        </div>
    )
};
export default Navbar