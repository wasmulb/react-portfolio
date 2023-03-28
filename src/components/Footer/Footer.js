import './footer.css';
import ReactDOM from 'react-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const Footer = () =>
<footer>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/wasmulb">
            < FaGithub size={30} style={{color: 'white'}}/>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/levi-wasmundt-19721522b">
            <FaLinkedin size={30} style={{color:'white'}} />
          </a>
        </li>
      </ul>
</footer>

export default Footer