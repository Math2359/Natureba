import logo_verde from "/logo_verde.svg";
import { Link, useLocation, useNavigate } from "react-router"
import { motion } from "motion/react"
import { useState } from "react";
import imagem from "/banana.png";

export const Header = () => {
    const location = useLocation();

    const [abrir, setAbrir] = useState(false);

    const preco = 9.9;
    const [multiplicador, setMultiplicador] = useState(1);

    const [dropDown, setDropDown] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <nav className="flex items-center h-fit w-full border-b-1 border-b-[#3E7D4E] fixed z-1 top-0 bg-white justify-between p-[10px] pl-[25px] pr-[25px]">
                <Link to="/">
                    <img src={logo_verde} />
                </Link>
                <div className="flex items-center text-[18px]">
                    <div className="relative flex items-center mr-15">
                        <Link className="decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline" to="/loja">
                            Loja
                        </Link>
                            {!dropDown && <span className="material-symbols-outlined cursor-pointer" onClick={() => setDropDown(true)}>keyboard_arrow_down</span>}
                            {dropDown && <span className="material-symbols-outlined cursor-pointer" onClick={() => setDropDown(false)}>keyboard_arrow_up</span>}
                        <motion.div className="absolute rounded-lg top-[100%] bg-[#8B5A2B]" transition={{ type: "spring", bounce: 0.2 }} animate={!dropDown ? { y: -1000, display: "none" } : { display: "flex", y: 0 }}>
                            <div className="grid grid-rows-3 text-white text-center cursor-pointer">
                                <div className="p-2 border-b hover:bg-[#654321] rounded-t-lg">Alimentos</div>
                                <div className="p-2 border-b hover:bg-[#654321]">Cosméticos</div>
                                <div className="p-2 hover:bg-[#654321] rounded-b-lg">Suplementos</div>
                            </div>
                        </motion.div>
                    </div>
                    <Link className="mr-15 decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline" to="#">Blog</Link>
                    <Link className="decoration-[#8B5A2B] underline-offset-10 hover:text-[#B8B8B8] hover:underline" to="#sobre">Sobre</Link>
                </div>
                {location.pathname === "/loja" && <span onClick={() => setAbrir(valor => !valor)} className="material-symbols-outlined text-[#8B5A2B] cursor-pointer">shopping_cart</span>}
            </nav>
            <motion.div className="h-screen w-[400px] bg-white fixed z-2 top-0 flex flex-col" animate={!abrir ? { right: "-100%" } : { display: "flex", right: 0 }}>
                <div className="py-5 px-2 bg-[#8B5A2B] flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-white cursor-pointer material-symbols-outlined" onClick={() => setAbrir(false)}>close</span>
                        <p className="text-white text-[14px]">Seu carrinho</p>
                    </div>
                    <div className="flex items-center relative">
                        <span className="text-white material-symbols-outlined text-[20px]">shopping_cart</span>
                        <div className="bg-[#3E7D4E] text-white absolute text-[12px] w-[20px] h-[20px] top-[-50%] right-[-25%] rounded-[100%] flex items-center justify-center">3</div>
                    </div>
                </div>
                <div className="px-2 mt-5">
                    {multiplicador > 0 &&
                        <div className="grid grid-cols-4 gap-1">
                            <img src={imagem} className="border border-[#3E7D4E] rounded-2xl w-[100%]" />
                            <div className="col-span-3 grid grid-flow-row gap-4">
                                <div></div>
                                <div>Banana prata</div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[#8B5A2B] font-semibold">{(preco * multiplicador).toLocaleString("pt-BR", {
                                        currency: "BRL",
                                        style: "currency",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}</p>
                                    <div className="flex items-center bg-[#3E7D4E] rounded-sm text-white p-1">
                                        <span className="material-symbols-outlined mr-5 cursor-pointer" onClick={() => setMultiplicador(value => value - 1)}>remove</span>
                                        {multiplicador}
                                        <span className="material-symbols-outlined ml-5 cursor-pointer" onClick={() => setMultiplicador(value => value + 1)}>add</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </motion.div>
        </>
    )
}

const estilo = {
    color: "#B8B8B8",
    textDecoration: "underline",
    textDecorationColor: "#8B5A2B"
}