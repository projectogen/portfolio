import React, {Component} from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../css/Lenguajes.css'
import {imgObj} from './ImgCarousel'
import ImgCarousel from './ImgCarousel'

const Lenguaje = () =>  {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 12,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: false
      }   

    return(
        <div className="secctionDiv">
            <h1 className="titulo">Lenguajes trabajados</h1>
 
            <Slider className="lengIcon" {...settings}>                
                { imgObj.map(obj => <ImgCarousel key={obj.name} urlImg={obj.id}  />) }                

            </Slider>
        </div>
    )
}

export default Lenguaje