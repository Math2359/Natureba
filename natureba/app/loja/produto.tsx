type ProdutoProps = {
    preco: number;
    imagem: string;
    nome: string;
}

export const Produto = ({ preco, imagem, nome }: ProdutoProps) => {
    return (
        <div className="bg-[white] shadow-[0_0_24px_rgb(0,0,0,0.25)] rounded-md w-fit flex flex-col items-center p-5">
            <div className="">
                <p>{preco.toLocaleString("pt-BR", {
                    currency: "BRL",
                    style: "currency",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>
                <img src={imagem} alt="Imagem do produto" />
            </div>
            <div className="">
                <p>{nome}</p>
            </div>
            <div className="">
                <button className="bg-[#3E7D4E] text-[white] py-1 px-5 text-[18px] rounded-md">Ver</button>
            </div>
        </div>
    )
}