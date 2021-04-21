import { Parallax } from "react-scroll-parallax";
import "../css/ParallaxStyles.css"
import proyecto1 from "../img/proyecto1.jpeg"
import proyecto2 from "../img/proyecto2.jpeg"
import proyecto3 from "../img/proyecto3.png"
import Gob from "../img/gob.png"
import Ecommerce from "../img/ecommerce.png"

export default function Main() {
  return (
    <>
      <div className="body">

        <section>
          <div className="box">
            <Parallax x={[0, -20]}>
              <h2>www.estudiosantaespina.com</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img className=" jarallax-img" src={proyecto1} />
              </div>
              <Parallax y={[0, -200]}>
                <div className="content" data-jarallax-element="-100 0">
                  <p>                    
                    Trabajo realizado para el esudio de grabación Santa Espina.
                    Este forma parte del primer proyecto pago, después de terminar 
                    el curso de React js en Coder House. Los dueños estuvieron a gusto con el trabajo
                    y queda pendiente el sistema pago, para que un usuario pueda ver una transmisión en vivo.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </section>

        <section>
          <div className="box">
            <Parallax x={[-20, 0]}>
              <h2>Juego Desafío Bons</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img src={proyecto2} className="jarallax-img" />
              </div>
              <Parallax y={[0, -200]}>
                <div className="content" data-jarallax-element="-100 0">
                  <p>
                    Este es un juego de cartas, con ataques, defensas y escudos. 
                    Realizado en el marco de un desafío presentado por una empresa lider en el mercado.
                    El mismo se finalizo a tiempo, usando una api perteneciente a la misma empresa.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </section>        

        <section>
          <div className="box">
            <Parallax x={[0, -20]}>
              <a href="https://www.kupanaka.com.ar/principal/" >
                <h2>https://www.kupanaka.com.ar/</h2>
              </a>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img src={proyecto3} className="jarallax-img" />
              </div>
              <Parallax y={[0, -200]}>
                <div className="content" data-jarallax-element="-100 0">
                  <p>
                  Trabajo realizado para el esudio de grabación Santa Espina.
                    Este forma parte del primer proyecto pago, después de terminar 
                    el curso de React js en Coder House. Los dueños estuvieron a gusto con el trabajo
                    y queda pendiente el sistema pago, para que un usuario pueda ver una transmisión en vivo.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </section>
        

        <section>
          <div className="box">
            <Parallax x={[-20, 0]}>
              <a href="http://vacunate.tdf.gob.ar/">
                <h2>Turnos web para Vacunacion TDF</h2>
              </a>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img src={Gob} className="jarallax-img" />
              </div>
              <Parallax y={[0, -200]}>
                <div className="content" data-jarallax-element="-100 0">
                  <p>
                    Sistema de Turnos Web para vacunación COVID-19. Este sistema fue desarrollado con tecnología
                    PHP puro. Sirve para sacar, ver y descargar los turnos para vacunación. Completamente funcional
                    y usado por el Gob. de TDF, y toda la plblación de la Provincia.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </section>

        <section>
          <div className="box">
            <Parallax x={[0, -20]}>
              <h2>Proyecto Eccomerce Coder House</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img src={Ecommerce} className="jarallax-img" />
              </div>
              <Parallax y={[0, -200]}>
                <div className="content" data-jarallax-element="-100 0">
                  <p>
                  Trabajo realizado para el curso de React js. Realizado en el marco de desarrollo para la 
                  aprobación del curso.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </section>       
      </div>
    </>
  );
}
