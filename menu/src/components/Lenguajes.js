import React, {Component} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../css/Lenguajes.css'
import html from '../img/html.png'
import css from '../img/css-3.png'
import js from '../img/java-script.png'
import php from '../img/php.png'
import python from '../img/python.png'
import mysql from '../img/mysql.png'
import react from '../img/atom.png'
import github from '../img/github.png'

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
                <Slider {...settings}>
                
                    <img className="lengIcon" src={html}/>
                    <img className="lengIcon" src={css}/>
                    <img className="lengIcon" src={js}/>
                    <img className="lengIcon" src={php}/>
                    <img className="lengIcon" src={python}/>
                    <img className="lengIcon" src={mysql}/>
                    <img className="lengIcon" src={react}/>
                
                    <img className="lengIcon" src={github}/>
                    <img className="lengIcon" src={css}/>
                    <img className="lengIcon" src={js}/>
                    <img className="lengIcon" src={php}/>
                    <img className="lengIcon" src={python}/>
                    <img className="lengIcon" src={mysql}/>
                    <img className="lengIcon" src={react}/>
                    <img className="lengIcon" src={php}/>
                
            </Slider>
        </div>
    )
}

export default Lenguaje