import logo_verde from "public/logo_verde.svg";
import { Link } from "react-router"

export const Header = () => {

    return (
        <nav className="flex items-center w-full border-b-1 border-b-[#3E7D4E] fixed">
            <Link to="/">
                <img src={logo_verde} />
            </Link>
            <div className="ml-30 text-[18px]">
                <Link className="mr-15 decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline" to="/loja">Loja</Link>
                <Link className="mr-15 decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline" to="#">Blog</Link>
                <Link className="decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline" to="/loja">Sobre</Link>

            </div>
        </nav>
    )
}