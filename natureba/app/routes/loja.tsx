import type { Route } from "./+types/home";
import { Produtos } from "../loja/produtos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Natureba" },
  ];
}

export default function Loja() {
  return <Produtos />;
}
