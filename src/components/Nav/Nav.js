import './nav.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


function Nav () {
 const path = window.location.pathname
return (
<nav>
    <h1>Levi Wasmundt</h1>
    <ul>
       <CustomLink to="/">About me</CustomLink>    
        <CustomLink to="/portfolio">Portfolio</CustomLink>       
        <CustomLink to="/contact">Contact</CustomLink>        
        <CustomLink to="/resume">Resume</CustomLink>        
    </ul>
</nav>
)
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to}>{children}</Link>
        </li>
    )
}
export default Nav;