import { VisualizacaoProduto } from "./visualizacaoProduto";
import imagem from "/banana.png";

export function Loja(){
    return(
        <main className="w-full mt-[100px] p-5">
            <section className="w-full">
                <div className="w-full flex items-end">
                    <h1 className="text-[40px] leading-none">Alimentos orgânicos</h1>
                    <p className="text-[#654321] leading-none cursor-pointer ml-3">VER MAIS</p>
                </div>
                <div className="mt-5">
                    <div className="w-full flex justify-between">
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                    </div>
                </div>
            </section>
            <section className="w-full mt-20">
                <div className="w-full flex items-end">
                    <h1 className="text-[40px] leading-none">Cosméticos veganos</h1>
                    <p className="text-[#654321] leading-none cursor-pointer ml-3">VER MAIS</p>
                </div>
                <div className="mt-5">
                    <div className="w-full flex justify-between">
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                    </div>
                </div>
            </section>
            <section className="w-full mt-20">
                <div className="w-full flex items-end">
                    <h1 className="text-[40px] leading-none">Suplementos naturais</h1>
                    <p className="text-[#654321] leading-none cursor-pointer ml-3">VER MAIS</p>
                </div>
                <div className="mt-5">
                    <div className="w-full flex justify-between">
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                        <VisualizacaoProduto preco={9.9} imagem={imagem} nome="Banana prata" />
                    </div>
                </div>
            </section>
        </main>
    );
}