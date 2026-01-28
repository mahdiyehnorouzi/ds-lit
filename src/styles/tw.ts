// import twText from "./tailwind.css?inline";
import { css, unsafeCSS } from "lit";

// export const tw = css`${unsafeCSS(twText)}`;

import twText from "./tailwind.css?inline";
console.log("TW TEXT SAMPLE:", twText.slice(0, 200));

export const tw = css`${unsafeCSS(twText)}`;