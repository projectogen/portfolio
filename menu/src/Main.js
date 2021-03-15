import { Parallax } from "react-scroll-parallax";
//import { Parallax } from 'react-parallax'
import "./css/ParallaxStyles.css";
import bg1 from "./img/bg1.jpg";
import proyecto1 from "./img/proyecto1.jpeg";
import proyecto2 from "./img/proyecto2.jpeg";

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
                <div className="content" data-jarallax-element="-200 0">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam esse accusantium beatae cupiditate officiis consequatur
                    ipsam dolorem non earum porro temporibus sapiente deleniti
                    inventore quis possimus et, incidunt eum fugit.
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
                <div className="content" data-jarallax-element="-200 0">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam esse accusantium beatae cupiditate officiis consequatur
                    ipsam dolorem non earum porro temporibus sapiente deleniti
                    inventore quis possimus et, incidunt eum fugit.
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
                <div className="content" data-jarallax-element="-200 0">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam esse accusantium beatae cupiditate officiis consequatur
                    ipsam dolorem non earum porro temporibus sapiente deleniti
                    inventore quis possimus et, incidunt eum fugit.
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
                <img src={bg1} className="jarallax-img" />
              </div>
              <Parallax y={[0, -200]}>
                <div className="content" data-jarallax-element="-200 0">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam esse accusantium beatae cupiditate officiis consequatur
                    ipsam dolorem non earum porro temporibus sapiente deleniti
                    inventore quis possimus et, incidunt eum fugit.
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
                <img src={bg1} className="jarallax-img" />
              </div>
              <Parallax y={[0, -200]}>
                <div className="content" data-jarallax-element="-200 0">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam esse accusantium beatae cupiditate officiis consequatur
                    ipsam dolorem non earum porro temporibus sapiente deleniti
                    inventore quis possimus et, incidunt eum fugit.
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
