import Menu from './Menu'
import NavBAr from './NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Lenguajes from './Lenguajes'
import Main from './Main'
import {ParallaxProvider} from 'react-scroll-parallax'

function App() {
  return (
    <BrowserRouter>
      
        <NavBAr/>
        <Lenguajes/>
        
        <ParallaxProvider>
          <Main />
        </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
