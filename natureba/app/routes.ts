import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("loja", "routes/loja.tsx"), route("produto", "routes/produto.tsx")] satisfies RouteConfig;

