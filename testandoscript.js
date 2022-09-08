const animais = document.getElementById('animais');
const gridSection = document.getElementsByClassName('grid-section');

//PRIMEIRO EXERCÍCIO

// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll('img');
console.log('img');

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgImagem);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]'); 

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);  


//SEGUNDO EXERCICIO

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
    console.log(item);
});

// Mostre o texto dos parágrafos no console

paragrafos.forEach((item) => {
    console.log(item).innerText;
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => { //1 erro, não tem os parênteses fechando os argumentos.  
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => { //2 erro, faltou os () não tendo nenhum argumento
  console.log(i++);
});

imgs.forEach(() => i++);

//TERCEIRO EXERCÍCIO

// Adicione a classe ativo a todos os itens do menu
const itensmMenu  = document.querySelectorAll('.menu a');
    itensMenu forEach((item) => { //não tinha colocado forEach
        item.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu forEach((item) => { //não tinha colocado forEach
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
    imgs.forEach((img) => { //tb naõ tinha colocado forEach
        const possuiAtributo = img.hasAttribute('alt');
        console.log(img, possuiAtributo);
    })


// Modifique o href do link externo no menu
document.querySelector('a[href^="http"]');
linkInterno.setAttribute('href', 'https://www.google.com/');


//QUARTO EXERCÍCIO

// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => {
        soma += imagens.offsetWidth
        console.log(imagem.offsetWidth);
    }); 
    console.log(soma);
}

window.onload = function() {
    somaImagens();
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeigth = link.offsetHeight;
    if(linkWidth >= 48 && linkHeigth >= 48) {
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
});


// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}

//QUINTO EXERCÍCIO
// Quando o usuário clicar nos links internos do site, adicione a classe "ativo" ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
const linksInternos = document.querySelector('a[href^="#"]');

function handleLink(event) {
    event.preventDefault(); //o link é ativado mas previne o comportamento padrão(de ir pro lugar)
    linksInternos.forEach((link) => { //usa o forEach pra dar o loop e passar por todos os itens
        link.classList.remove('ativo'); //remove a class ativo onde tiver
    });
    event.currentTarget.classList.add('ativo'); //add uma class 'ativo' ao current target quando clica (e aí onde tinha antes não vai ter mais por causa do remove)
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
})

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
//Para selecionar todos os elementos do site, com o CSS existe o seletor *, então podemos usar no querySelector

const todosElementos = document.querySelectorAll(' body *'); //como eu quero todos itens só de body, então bota body * . 

function handleElemento(event) { //2º cria a função 
    console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento); //1º cria aqui
})


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
const todosElementos = document.querySelectorAll(' body *'); 

function handleElemento(event) {
    event.currentTarget.remove(); //mudou só isso. Cada vez que clica em algo no site, ele remove. Se clicar em tudo, o site fica limpo, sem nada. 
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior'); //documentElement é o HTML, e eu quero adicionar uma classe nele. Esse texto maior eu coloquei no CSS, e ele só ativa caso clique no 't'. No CSS: html.textomaior {font-size: 150%;}.
    }
}

window.addEventListener('keydown', handleClickT);

//SEXTO EXERCICIO

// Duplique o menu e adicione ele em copy - acerteiiiii
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
//eu fiz assim e deu certo
const faqLista = document.querySelector('.faq-lista');
faqLista.children[0];
//ele fez assim
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
const proximoDD = primeiroDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais - erreii
/*const animais = document.querySelector('.animais');
const faq = document.querySelector('.faq');
const html = document.querySelector('html');
html.replaceChild(animais, faq); TÁ ERRADO*/  

const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;