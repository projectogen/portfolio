import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './css/Style.css'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'


const Menu =() =>{
    const [activo, setActivo] = useState(false)
    const [ cambioImg, setCambioImg ] = useState(img1)
 
    const ToggleMenu = () => {
        setActivo(!activo)
    }


    const changeImage=(anything)=>{
        setCambioImg(anything)
        console.log(anything)
    }

    
    
    
return(
    <>
        <div className={!activo  ? 'menuToggle' : 'menuToggle active'}  onClick={ToggleMenu}></div>

        
        <div className={!activo  ? 'navigation' : 'navigation active'}  onClick={ToggleMenu}>
        <div className="navArea">
            <ul>
                <li>
                    <Link to="/" onMouseEnter={() => changeImage(img1)}>Probando</Link>
                </li>
                <li>
                    <Link to="/"  onMouseEnter={() => changeImage(img1)}>Home</Link>
                </li>
                <li>
                    <a to="/" onMouseEnter={()=> changeImage(img2)}>About</a>
                </li>
                <li>
                    <a to="/" onMouseEnter={()=> changeImage(img3)}>Services</a>
                </li>
                <li>
                    <a to="/" onMouseEnter={()=> changeImage(img4)}>Portfolio</a>
                </li>
                <li>
                    <a to="/" onMouseEnter={()=> changeImage(img5)}>Team</a>
                </li>
                <li>
                    <a href="#" onMouseEnter={()=> changeImage(img6)}>Contact</a>
                </li>
            </ul>
        </div>
        <div className="imgArea">
            <img src={cambioImg} alt="" id="slider"/>
        </div>
    </div>
    </>
)
    


}

export default Menu