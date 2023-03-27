import './App.css';
import { Nav,About,Contact,Portfolio,Resume,Footer } from './components';

function App () {
let component
switch (window.location.pathname){
    case "/":
    component = <About />
    break

    case "/portfolio":
    component = <Portfolio />
    break

    case "/contact":
    component = <Contact />
    break

    case "/resume":
    component = <Resume />
    break


}
  return  <div className="App">
        <Nav />
        {component}
        <Footer />
    </div>
}

export default App;
