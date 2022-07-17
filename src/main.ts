import cards from "./cards";
import content from "./heading";

export const root = document.querySelector("#app") as HTMLBodyElement;
const headingDOM = document.querySelector("#heading") as HTMLElement;
const cardsDOM = document.querySelector("#cards") as HTMLElement;

root.innerHTML = `
<div class="flex flex-flow gap-10 my-16">
  <div class="bg-white flex flex-col items-center py-16 px-16 rounded-2xl shadow-2xl text-slate-800">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>

    <h1 class="font-black text-2xl mt-8" >Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  <div class="bg-white flex flex-col items-center py-16 px-16 rounded-2xl shadow-2xl text-slate-800">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>

    <h1 class="font-black text-2xl mt-8" >Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
  </div>
`;

headingDOM.innerHTML = content;
cardsDOM.innerHTML = cards;
