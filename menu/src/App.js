import Menu from './Menu'
import NavBAr from './NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Lenguajes from './Lenguajes'
import Main from './Main'
import {ParallaxProvider} from 'react-scroll-parallax'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

    function App() {
        return (
            <>
                <Router>
                    <NavBAr/>
                    
                    <Lenguajes/>
                    
                    <ParallaxProvider>
                        <Main />
                    </ParallaxProvider>
                </Router>
                <Footer />
            </>
        );
    }

export default App;
