import { useNavigate } from "react-router";

type ProdutoProps = {
    preco: number;
    imagem: string;
    nome: string;
}

export const VisualizacaoProduto = ({ preco, imagem, nome }: ProdutoProps) => {
    const navigate = useNavigate();
    return (
        <div className="bg-[white] shadow-[0_0_24px_rgb(0,0,0,0.25)] rounded-md w-fit flex flex-col items-center p-5">
            <div className="text-[#654321] text-[16px] font-semibold">
                <p>{preco.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>
                <div className="relative">
                    <img src={imagem} alt="Imagem do produto" />
                    <div className="cursor-pointer bg-white w-[50px] h-[50px] flex items-center justify-center p-5 rounded-[100%] absolute top-[50%] right-0 shadow-[0_0_24px_rgb(0,0,0,0.25)]">
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                    </div>
                </div>
            </div>
            <div>
                <p>{nome}</p>
            </div>
            <div>
                <button onClick={() => navigate("/produto")} className="bg-[#3E7D4E] text-[white] py-1 px-5 text-[18px] rounded-md">Ver</button>
            </div>
        </div>
    )
}