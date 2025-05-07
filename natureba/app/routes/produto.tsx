import { Produto as DescricaoProduto } from "~/produto/produto";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Natureba" },
  ];
}

export default function Produto() {
  return <DescricaoProduto />;
}
