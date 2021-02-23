import React from 'react'
import Menu from './Menu'
import './NavbarStyle.css'
import imgSlider from './img/imagen.png'

const NavBAr = () => {
        
    return(
        <>
        <header>
            <a href="#" className="logo">Logo</a>
            
            <div className="search">
                <input type="text" placeholder="Search"/>
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <Menu/>
        </header>
        <div className="banner">
            <div className="content">
                <h2>Responsive header Desing</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt in eius culpa! Blanditiis laudantium quasi, tempora ut, 
                laboriosam eius repellendus ad quaerat nobis doloribus nisi quae officiis animi asperiores.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt in eius culpa! Blanditiis laudantium quasi, tempora ut, 
                laboriosam eius repellendus ad quaerat nobis doloribus nisi quae officiis .</p>
                <a href="#">Read More</a>
            </div>
            <img src={imgSlider} className="image"/>
        </div>
        </>
    )
}

export default NavBAr