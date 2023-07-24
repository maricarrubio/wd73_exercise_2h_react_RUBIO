import { Link } from "react-router-dom"

function Navbar() {
    return ( 
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jewelrypage">Products</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar