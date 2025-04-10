import logo_verde from "public/logo_verde.svg";
import { Link } from "react-router"

export const Header = () => {

    return (
        <nav className="flex items-center w-full">
            <Link to="/">
                <img src={logo_verde} />
            </Link>
            <div className="ml-10">
                <Link to="/loja">Loja</Link>
                <Link to="#">Blog</Link>
                <Link to="/loja">Sobre</Link>

            </div>
        </nav>
    )
}