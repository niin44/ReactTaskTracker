import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Footer = () => {
    const location = useLocation()

    return (
        <footer>
            <p>Copyright &copy; 2022</p>
            {location.pathname === '/about' ? <Link to="/">Go Back</Link>
            : <Link to="/about">About</Link>}
        </footer>
    )
}

export default Footer