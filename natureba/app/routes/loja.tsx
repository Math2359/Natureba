import type { Route } from "./+types/home";
import { Loja as Produtos } from "../loja/loja";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Natureba" },
  ];
}

export default function Loja() {
  return <Produtos />;
}
