//isolar tudo numa função só:

function initTabNav() {
    //quando clicar na foto do animal, que ele direcione para a respectiva descrição
    const tabMenu = document.querySelectorAll('.js-tabmenu li'); //li pq eu quero selecionar e por um evento em cada li da lista
    const tabContent = document.querySelectorAll('.js-tabcontent section'); //idem

    //fazer uma verificação se os itens acima existem, se não digitou errado. Tem que dar true e true
    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            //faz um loop para retirar a class ativo
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');//só com isso ele vai adicionando a class em todos os itens, mas eu quero que limpe todos os ativos que existem e e ativar apenas o que estiver passando na função no momento (de acordo com o index). Então criamos uma regra acima^
        } 

        //adicionar o evento ao link, ou seja, quando clicar passe o número de onde clicou dentro da função activeTab
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);//ativa a função dentro da outra função
            })
        });
    }
//este loop está rodando por cada li, cada item da tab. Hpa dois argumentos. Cada item que for adicionado o evento de click, ele vai executar a função que vai executar a activeTab com argumento index.

//Agora temos que modificar o CSS, pra ele esconder o que não estiver ativo e mostre o que estiver ativo. 

//como adicionar o ativo para o primeiro item da lista sempre
//ou posso colocar direto no html em section um class ativo, ou (adicionei lá em cima na linha 7)

}
//lembrando que tem que ativar a função:
initTabNav();


//agora vamos fazer accordion list no FAQ
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    //Se repetir demais a mesma string, como 'ativo', melhor colocar numa constante
    const activeClass = 'ativo';
    //novamente, verificar se '.js-accordion dt' existe
    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass); //pra iniciar o primeiro aberto e saberem que pode abrir

        function activeAccordion() {
            //console.log(this);
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);//nesse caso não vamos remover o ativo, a pessoa clicou, fica aberto
        }
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

//vamos fazer um scroll suave para os links internos, pq qdo clica ele vai mto de repente e parece que mudou de página

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href'); //vai dar #contato, #faq etc, como se fosse uma id
        const section = document.querySelector(href); //faz o contato entre link e seção

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        //forma alternativa
        /*const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });*/
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

//quando descer a pag com scroll, fazer uma pequena animação para as sections mexerem

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    //verificar se sections existe. Se existir, faz toda a função de animação, se não, não faz sentido que ocorra
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6; //para que a animação se ajuste ao tamanho da tela, está considerando 60% do tamanho da tela

        function animaScroll() {
        //primeiro, precisa saber qual a distância cada elemento está do topo. Sempre que fala "cada", usa forEach
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
            //temos que verificar se o sectionTop está < 0.
                if (isSectionVisible) 
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo'); //para não ficar animando toda hora
            });
        }

    animaScroll(); //ativa uma vez pelo menos
    window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();