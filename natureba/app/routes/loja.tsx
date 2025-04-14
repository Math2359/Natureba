import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Natureba" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Loja() {
  return (
    <>OLA OLA OLA</>
  );
}
