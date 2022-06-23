import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>Web Development Tools</h1>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">New Blog</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;