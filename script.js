document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade-batata');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade-batata');
 
    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
 
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });
 
    const aumentaFonteBotao = document.getElementById('aumentar-fonte-batata');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte-batata');
 

    let tamanhoAtualFonte = 1;
 
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
 
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
 
   
});
 
ScrollReveal().reveal('#inicio-batata', { delay: 500 });
ScrollReveal().reveal('#historia-batata', { delay: 500 });
ScrollReveal().reveal('#galeria-batata', { delay: 500 });
ScrollReveal().reveal('#contato-batata', { delay: 500 });
