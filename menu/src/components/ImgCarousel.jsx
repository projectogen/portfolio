
import html from '../img/html.png'
import css from '../img/css-3.png'
import js from '../img/java-script.png'
import php from '../img/php.png'
import python from '../img/python.png'
import mysql from '../img/mysql.png'
import react from '../img/atom.png'
import github from '../img/github.png'

export const imgObj =[
    {
        id: html,
        name: 'html'
    },
    {
        id: css,
        name: 'css'
    },
    {
        id: js,
        name: 'js'
    },
    {
        id: php,
        name: 'php'
    },
    {
        id: python,
        name: 'python'
    },
    {
        id: mysql,
        name: 'mysql'
    },
    {
        id: react,
        name: 'react'
    },
    {
        id: github,
        name: 'github'
    },
    {
        id: html,
        name: 'html'
    },
    {
        id: css,
        name: 'css'
    },
    {
        id: js,
        name: 'js'
    },
    {
        id: php,
        name: 'php'
    },
    {
        id: python,
        name: 'python'
    },
    {
        id: mysql,
        name: 'mysql'
    },
    {
        id: react,
        name: 'react'
    },
    {
        id: github,
        name: 'github'
    }
] 



const ImgCarousel = ({urlImg}) => {
      return(
          <img src={urlImg} className="imagen" alt={urlImg}/>
      )
}
export default ImgCarousel
