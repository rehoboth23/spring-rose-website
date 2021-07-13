import Home from './components/home';
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ScrollToTop from './components/scrolltop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/generalthemes.scss'
import dotenv from 'dotenv'

function App() {
  dotenv.config()
  return (
    <div className="App">
      <div className="z-0 repeat-back fixed-top" />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
