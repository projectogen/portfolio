import { Parallax } from "react-scroll-parallax";
import "../css/ParallaxStyles.css"
import proyecto1 from "../img/proyecto1.jpeg"
import proyecto2 from "../img/proyecto2.jpeg"

export default function Main() {
  return (
    <>
      <div className="body">

        <section>
          <div className="box">
            <Parallax x={[0, -20]}>
              <h2>Awesome Parrallax Scrolling</h2>
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
              <h2>Awesome Parrallax Scrolling</h2>
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
              <h2>Awesome Parrallax Scrolling</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img src={proyecto1} className="jarallax-img" />
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
       

        
      </div>
    </>
  );
}
