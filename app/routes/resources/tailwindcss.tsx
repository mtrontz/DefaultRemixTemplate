import type { LoaderFunction } from "remix";
import { serveTailwindCss } from "~/services/tailwind.server"; // "remix-tailwind";
import TWConfig from "~/config/tailwind.config.js"
export const loader: LoaderFunction = () => serveTailwindCss(TWConfig)