import { Produto } from "./produto";
import imagem from "/banana.png";

export function Produtos(){
    return(
        <main className="w-full mt-[100px]">
            <section className="w-full">
                <div className="w-full flex items-end">
                    <h1 className="text-[40px]">Alimentos orgânicos</h1>
                    <p>VER MAIS</p>
                </div>
                <div>
                    <Produto preco={9.9} imagem={imagem} nome="Banana prata" />
                </div>
            </section>
            <section className="w-full">
                <div className="w-full flex items-end">
                    <h1 className="text-[40px]">Alimentos orgânicos</h1>
                    <p>VER MAIS</p>
                </div>
                <div>
                    <Produto preco={9.9} imagem={imagem} nome="Banana prata" />
                </div>
            </section>
            <section className="w-full">
                <div className="w-full flex items-end">
                    <h1 className="text-[40px]">Alimentos orgânicos</h1>
                    <p>VER MAIS</p>
                </div>
                <div>
                    <Produto preco={9.9} imagem={imagem} nome="Banana prata" />
                </div>
            </section>
        </main>
    );
}