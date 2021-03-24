import NavBAr from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'
import Lenguajes from './components/Lenguajes'
import Main from './components/Main'
import {ParallaxProvider} from 'react-scroll-parallax'
import Footer from './components/Footer';
import CardPersonal from './components/CardPersonal'

    function App() {
        return (
            <>
                <Router>
                    <NavBAr/>
                    <CardPersonal/>
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
