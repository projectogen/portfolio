import React from 'react'
import {Link} from 'react-router-dom'
import './css/ButtonStyle.css'

const NeonButton = () =>{
    
    return(
        <>
            <Link to="/" className="btn-neon">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                Botón Neon
            </Link>
        </>

    )
}

export default NeonButton