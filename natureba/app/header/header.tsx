import { text } from "stream/consumers";
import logo_verde from "/logo_verde.svg";
import { Link, useLocation } from "react-router"

export const Header = () => {

    const location = useLocation();

    return (
        <nav className="flex items-center h-fit w-full border-b-1 border-b-[#3E7D4E] fixed top-0 bg-white justify-between p-[10px] pl-[25px] pr-[25px]">
            <Link to="/">
                <img src={logo_verde} />
            </Link>
            <div className="text-[18px]">
                <Link className="mr-15 decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline"  to="/loja">Loja</Link>
                <Link className="mr-15 decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline" to="#">Blog</Link>
                <Link className="decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline" to="#sobre">Sobre</Link>
            </div>
        </nav>
    )
}

const estilo = {
    color: "#B8B8B8",
    textDecoration: "underline",
    textDecorationColor: "#8B5A2B"
}