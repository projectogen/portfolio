import React from 'react'
import Menu from './Menu'
import '../css/NavbarStyle.css'
import imgSlider from '../img/imagen.png'
import NeonButton from './NeonButton'

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
                <h2>PORTFOLIO EN CONSTRUCCIÓN</h2>
                {/* <p>Projecto gen es una start-up dedicada crear soluciones digitales para quienes lo deseen. Abajo podes encontrar algunos de nuestros trabajos y contactarnos.
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur quo aliquam animi repellat iusto, accusamus quisquam a nobis minus ut veritatis ipsa fuga nisi excepturi totam dolore, beatae dolorem!
                </p> */}
            <NeonButton />      
            </div>
            <img src={imgSlider} className="image"/>
        </div>
        </>
    )
}

export default NavBAr