
const urlAtual = document.location.href.split("/")[3] || "home";
console.log(urlAtual);

document.querySelector(`.header-menu li[id=${urlAtual}]`).classList.add("selected")