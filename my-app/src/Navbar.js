import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="./Home" className="navlogo"><h1>Horizon</h1></NavLink>
            <div className="links">
                <NavLink to="./Home" className="navlink">Home</NavLink>
                <NavLink to="./Explore" className="navlink">Browse</NavLink>
                <NavLink to="./Messages" className="navlink">Library</NavLink>
                <NavLink to="./Profile" className="navlink">Profile</NavLink>
            </div>
        </nav>
    );
}
 
export default Navbar;