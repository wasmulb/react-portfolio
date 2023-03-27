import './nav.css';

function Nav () {
 const path = window.location.pathname
return (
<nav>
    <h1>Levi Wasmundt</h1>
    <ul>
       <CustomLink href="/">About me</CustomLink>    
        <CustomLink href="/portfolio">Portfolio</CustomLink>       
        <CustomLink href="/contact">Contact</CustomLink>        
        <CustomLink href="/resume">Resume</CustomLink>        
    </ul>
</nav>
)
}

function CustomLink({href, children, ...props}){
    const path= window.location.pathname
    return (
        <li className={path === href ? "active": ""}>
            <a href={href}>{children}</a>
        </li>
    )
}
export default Nav;