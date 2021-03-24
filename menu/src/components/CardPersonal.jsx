import React from 'react'
import nathan from '../img/nathan.png'
import sam from '../img/sam.png'
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
                    <a href="#">Read More</a>
                </div>
                <img className="avatar" src={nathan}/>
            
            </div>
    
            <div className="card">
                <div className="content">
                    <h2>Leandro Suasnabar</h2>
                    <p>
                    Lorem impun dolor ajjkkzkmnsd sj ssadkjsd sdfksd fskdf sdf isdf sdisdf sdfos sf s fsisfkjnasd fosdsdf sdfinnsdf sdfsd di dij sdi fsdif sdif sdif sdh sdi sdfgsdi ggasdashd asd hha soiasgf iadhf iuahdf oahdf 
                    </p>
                    <a href="#">Read More</a>
                </div>
                <img className="avatar" src={sam}/>
            </div>
        </div>
    </>    
    )
}

export default CardPersonal