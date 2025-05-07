import React from 'react';
import imagem from "/banana.png";

export function Produto() {
    return (
        <div className="w-full mt-[100px] p-5 ">
            <div className="flex flex-col md:flex-row gap-5 mb-10">
                    <img
                        src={imagem}
                        alt="Produto"
                        className=" w-full max-w-xs rounded-lg"
                    />
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">Banana prata</h1>
                    <p className="mt-2 text-gray-600">
                    Banana Prata 700g: Fruta fresca e saborosa, ideal para lanches saudáveis e receitas. Rica em nutrientes, como potássio e fibras, a banana prata é perfeita para manter a energia ao longo do dia. Embalagem prática com 700g, garantindo qualidade e frescor.
                    </p>
                                    <p className="text-[#8B5A2B] font-semibold">{(9.9).toLocaleString("pt-BR", {
                                        currency: "BRL",
                                        style: "currency",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}</p>
                    <button className="mt-4 bg-[#3E7D4E] text-white py-2 px-4 rounded hover:bg-[#2e5b3c] cursor-pointer">
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Avaliações dos Clientes</h2>
                <div className="grid grid-flow-row grid-cols-2 gap-4">
                    <div className="bg-[#654321] text-white p-4 rounded">
                        <div className="flex items-center">
                            <p className="font-semibold mr-2">João da Silva</p>
                            <div className="text-yellow-500">★★★★★</div>
                        </div>
                        <p>
                            "Produto excelente, recomendo!"
                        </p>
                    </div>
                    <div className="bg-[#654321] text-white p-4 rounded">
                        <div className="flex items-center">
                            <p className="font-semibold mr-2">Maria Oliveira</p>
                            <div className="text-yellow-500">★★★★☆</div>
                        </div>
                        <p>
                            "Muito bom, mas poderia ser mais barato."
                        </p>
                    </div>
                    <div className="bg-[#654321] text-white p-4 rounded">
                        <div className="flex items-center">
                            <p className="font-semibold mr-2">Carlos Pereira</p>
                            <div className="text-yellow-500">★★★☆☆</div>
                        </div>
                        <p>
                            "Produto bom, mas demorou para chegar."
                        </p>
                    </div>
                    <div className="bg-[#654321] text-white p-4 rounded">
                        <div className="flex items-center">
                            <p className="font-semibold mr-2">Ana Souza</p>
                            <div className="text-yellow-500">★★★★★</div>
                        </div>
                        <p>
                            "Adorei, superou minhas expectativas!"
                        </p>
                    </div>
                    <div className="bg-[#654321] text-white p-4 rounded">
                        <div className="flex items-center">
                            <p className="font-semibold mr-5">Pedro Lima</p>
                            <div className="text-yellow-500">★★★★☆</div>
                        </div>
                        <p>
                            "Gostei bastante, mas poderia ter mais opções."
                        </p>
                    </div>
                    <div className="bg-[#654321] text-white p-4 rounded">
                        <div className="flex items-center">
                            <p className="font-semibold mr-5">Fernanda Costa</p>
                            <div className="text-yellow-500">★★★★★</div>
                        </div>
                        <p>
                            "Excelente qualidade, comprarei novamente!"
                        </p>
                    </div>
                    <div className="bg-[#654321] text-white p-4 rounded">
                        <div className="flex items-center">
                            <p className="font-semibold mr-5">Lucas Almeida</p>
                            <div className="text-yellow-500">★★★☆☆</div>
                        </div>
                        <p>
                            "Bom produto, mas o preço é um pouco alto."
                        </p>
                    </div>
                    <div className="bg-[#654321] text-white p-4 rounded">
                        <div className="flex items-center">
                            <p className="font-semibold mr-5">Juliana Martins</p>
                            <div className="text-yellow-500">★★★★★</div>
                        </div>
                        <p>
                            "Adorei, super recomendo para todos!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};