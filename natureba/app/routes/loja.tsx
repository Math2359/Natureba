import type { Route } from "./+types/home";
import { Shop } from "../loja/shop";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Natureba" },
  ];
}

export default function Loja() {
  return <Shop />;
}
