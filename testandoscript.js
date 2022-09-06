const animais = document.getElementById('animais');

const gridSection = document.getElementsByClassName('grid-section');


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
