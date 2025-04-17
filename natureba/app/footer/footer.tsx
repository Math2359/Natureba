import { Link } from "react-router"
import instagram_logo from "/instagram_logo.svg";
import whatsapp_logo from "/whatsapp_logo.svg";
import twitter_logo from "/twitter_logo.svg";
import info_endereco from "/info_endereco.svg";

export const Footer = () => {
    return (
        <footer className="bg-[#3E7D4E] text-white flex justify-between items-center p-4">
            <div className="flex-1 flex justify-center  " >
                <ul>
                    <li><Link className="" to='#blog'>Blog</Link></li>
                    <li><Link className="" to='/loja'>Loja</Link></li>
                    <ul> <span className="text-[13px] ">
                        <li>Alimentos</li>
                        <li>Cosméticos</li>
                        <li>Suplementos</li>
                    </span> </ul>
                    <li><Link className="" to='#sobre'>Sobre</Link></li>
                </ul>
            </div>
            <div className="w-px bg-white h-16"></div>
            <div className="flex-1 flex justify-center space-x-4">
                <a href="https://www.instagram.com" target="_blank">
                    <img src={instagram_logo} alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <img src={twitter_logo} alt="Twitter" />
                </a>
                <a href="https://web.whatsapp.com" target="_blank">
                    <img src={whatsapp_logo} alt="Whatsapp" />
                </a>
            </div>
            <div className="w-px bg-white h-16"></div>
            <div className="flex-1 flex justify-center">
                <img src={info_endereco} />
            </div>
        </footer>
    );
};
