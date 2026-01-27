import twText from "./tailwind.css?inline";
import { css, unsafeCSS } from "lit";

export const tw = css`${unsafeCSS(twText)}`;