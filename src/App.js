import './App.css';
import { Nav,About,Contact,Portfolio,Resume,Footer } from './components';
import {Route, Routes} from "react-router-dom"

function App () {

  return  <div className="App">
        <Nav />
        <Routes>
            <Route path ="/" element = {<About />} />
            <Route path ="/contact" element = {<Contact />} />
            <Route path ="/portfolio" element = {<Portfolio />} />
            <Route path ="/resume" element = {<Resume />} />
        </Routes>
        <Footer />
    </div>
}

export default App;
