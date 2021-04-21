import React from 'react'
import federico from '../img/fede.png'
import leandro from '../img/leandro.png'
import '../css/CardPersonal.css'

const CardPersonal = () =>  {

    return(
    <>
        <div className="container">
            <div className="card">
                <div className="content">
                    <h2>Fede Osandon</h2>
                    <p>
                    Lorem impun dolor ajjkkzkmnsd sj ssadkjsd sdfksd fskdf sdf isdf sdisdf sdfos sf s fsisfkjnasd fosdsdf sdfinnsdf sdfsd di dij sdi fsdif sdif sdif sdh sdi sdfgsdi ggasdashd asd hha soiasgf iadhf iuahdf oahdf 
                    </p>
                    <a href="#">VER CV</a>
                </div>
                <img className="avatar" src={federico}/>
            
            </div>
    
            <div className="card">
                <div className="content">
                    <h2>Leandro Suasnabar</h2>
                    <p>
                    Lorem impun dolor ajjkkzkmnsd sj ssadkjsd sdfksd fskdf sdf isdf sdisdf sdfos sf s fsisfkjnasd fosdsdf sdfinnsdf sdfsd di dij sdi fsdif sdif sdif sdh sdi sdfgsdi ggasdashd asd hha soiasgf iadhf iuahdf oahdf 
                    </p>
                    <a href="#">VER CV</a>
                </div>
                <img className="avatar" src={leandro}/>
            </div>
        </div>
    </>    
    )
}

export default CardPersonal