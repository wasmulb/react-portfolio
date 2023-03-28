import './footer.css';
import ReactDOM from 'react-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'


const Footer = () =>
<footer>
      <ul>
        <li>
          <a href="https://github.com/wasmunlb">
            < FaGithub size={30} style={{color: 'white'}}/>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/levi-wasmundt">
            <FaLinkedin size={30} style={{color:'white'}} />
          </a>
        </li>
      </ul>
</footer>

export default Footer