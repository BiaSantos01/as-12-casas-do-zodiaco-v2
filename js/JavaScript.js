function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto2 = document.querySelector("h2");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
  
    if((valor=="gemeos")|| (valor=="Gêmeos")|| (valor=="Gemeos") || (valor=="gêmeos")||(valor== "GEMEOS")||(valor=="GÊMEOS" )){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de gêmeos. Natural da Grécia. Possui duas personalidades, do bem e do mal. Tem experiências de lutas contínuas com seu lado mal instalado em seu corpo. Nessa condição, ameaçou a vida da Deusa Atena mas foi impedido por Aiolos de Sagitário. Mesmo entre os Cavaleiros de Ouro, ele é o mais poderoso, utilizando o golpe 'Explosão Galáctica' com elevada concentração de energia cósmica capaz de destruir algo comparado a uma galáxia inteira.";

    }

    else if((valor=="escorpiao")|| (valor=="Escorpião")|| (valor=="Escorpiao") || (valor=="escorpião")||(valor== "ESCORPIÃO")||(valor=="ESCORPIAO" )){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de escorpião. Natural da Grécia. Como o Aiolia, é espontâneo e tem forte espírito de justiça. Tem muito orgulho por ser um Cavaleiro de Ouro. A técnica mortal 'Agulha Escarlate' usa as pontas dos dedos para espetar violentamente quinze pontos do oponente, paralisando os seus cinco sentidos. Era muito amigo de Camus de Aquário.";

    }
    
    else if((valor=="peixes")|| (valor=="PEIXES")|| (valor=="Peixes") || (valor=="Peixe")||(valor== "PEIXE")||(valor=="peixe" )){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixe.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de peixes. Natural da Suécia. É o mais belo de todas as 88 constelações e acredita fielmente que 'a força é a justiça'. Utiliza as características da rosa pelo Cosmo e aplica os golpes. As 'Rosas Diabólicas Reais' são flores vermelhas com veneno para atacar os inimigos. Apesar do lema 'a força é a justiça', é o Cavaleiro que mais se preocupa com a paz na superfície.";


    }
    else if((valor=="aquario")|| (valor=="Aquario")|| (valor=="AQUARIO") || (valor=="aquário")||(valor== "Aquário")||(valor=="AQUÁRIO" )){
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src","img/aquario.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de aquário. Natural da França. Por trás de sua aparente frieza, esconde uma alma quente. 'Em vez de julgar o bem e o mal, continua a lutar sem perder o foco.'' É o que ele busca como cavaleiro. Utiliza a técnica de luta do gelo, sendo assim chamado de 'Feificeiro da Água e do Gelo'. Seu golpe mortal máximo, 'Execução Aurora', é uma poderosa rajada de ar frio, em zero absoluto, que pulveriza tudo aquilo que for atingido."

    }
    else if((valor=="aries")|| (valor=="Aries")|| (valor=="ARIES") || (valor=="áries")||(valor== "Áries")||(valor=="ÁRIES" )){
        texto.innerHTML = "Aries";
        imagem.setAttribute("src","img/aries.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de Áries. Natural do Tibete. Elegante e tem personalidade pacífica. É o único capaz de restaurar armaduras. Tem admiração pelo Dohko, amigo do mestre Shion e o chama de Velho Mestre. É forte nas técnicas de Psicocinese, teletransporte e de defesa 'Muralha de Cristal' que aplicam a supercapacidade."
    }
    else if((valor=="leao")|| (valor=="Leao")|| (valor=="LEAO") || (valor=="leão")||(valor== "Leão")||(valor=="LEÃO" )){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "É o herói desta obra. Cavaleiro de Ouro do signo de Leão. Natural da Grécia.Tem a personalidade mais correta entre os Cavaleiros de Ouro e não gosta de trapaças. É um cavaleiro de honra que desfere abertamente golpes do tipo 'relâmpago' na velocidade da luz. É o irmão mais novo de Aiolos de Sagitário que foi acusado de 'irmão traidor' mas com a grande missão de salvar Atena descobre uma verdade bravamente guardada. Finalmente se reencontra com Aiolos que fora exterminado no Muro das Lamentações.";

    }
    else if((valor=="cancer")|| (valor=="Cancer")|| (valor=="CANCER") || (valor=="câncer")||(valor== "Câncer")||(valor=="CÂNCER" )){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de câncer. Natural da Itália. Manipula o buraco que liga ao submundo. Tem como valor 'a definição da justiça muda com o passar do tempo' e já ajudou o Papa (Saga) que se converteu ao mal. Talvez o seu modo de viver possa ser descrito como humano dentre os Cavaleiros de Ouro. Desfere o golpe mortal 'Ondas dos Infernos' que envia para o submundo a alma dos oponentes.";


    }
    else if ((valor=="capricornio")|| (valor=="Capricornio")|| (valor=="CAPRICORNIO") || (valor=="capricórnio")||(valor== "Capricórnio")||(valor=="CAPRICÓRNIO" )){
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src","img/capricornio.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de capricórnio. Natural da Espanha. No passado, recebeu a vida do Papa (Saga) e teve um confronto direto com Aiolos. Originalmente tinha grande lealdade à Deusa e no episódio de Hades, voltou à ativa lutando sob comando de Hades ao mesmo tempo em que, nas batalhas ao lados dos companheiros, deu a vida como Cavaleiro de Ouro de Atena.";

    }
    else if((valor=="libra")|| (valor=="Libra")|| (valor=="LIBRA")){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de libra. Natural da China. Um dos únicos dois sobreviventes da última Guerra Santa, é chamado respeitosamente por todos de 'Velho Mestre'. Originalmente é um Cavaleiro que luta com seus próprios punhos mas a armadura de libra é adaptada com equipamentos de espada e de lança. Essas armas tem poder suficiente para destruir estrelas e precisa de autorização de Atena para serem utilizadas. Tem força o bastante em seus punhos, incluindo o golpe mortal 'Cólera dos Cem Dragões'.";

    }
    else if((valor=="sagitario")|| (valor=="Sagitario")|| (valor=="SAGITARIO") || (valor=="sagitário")||(valor== "Sagitário")||(valor=="SAGITÁRIO" )){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sagitario.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de sagitário. Natural da Grécia. É o irmão mais velho de Aiolia e foi considerado traidor pela morte de Atena. Mas na verdade é um cavaleiro exemplar que dedicou sua vida na grande missão de proteger Atena mesmo desprezado pelos que o rodeavam. Tido como candidato ao próximo Papa, tem grande caráter e espírito de luta e disposto a sacrificar sua própria vida se for por uma causa justa. Finalmente, reencontra com seu irmão mais novo Aiolia no Muro das Lamentações.";

    }
    else if((valor=="touro")|| (valor=="Touro")|| (valor=="TOURO")){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de touro. Natural do Brasil. Possui físico admirável que não sofre impacto nenhum dos oponentes. Assim como Aeolia, concentra os golpes com os punhos. De poucas palavras, estuda o oponente pela troca de socos. Desfere o golpe mortal 'Grande Chifre' baseado na técnica Iainuki.";


    }
    else if((valor=="virgem")|| (valor=="Virgem")|| (valor=="VIRGEM")){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.jpg");
        imagem.setAttribute("width","1000px");
        texto2.innerHTML = "Cavaleiro de Ouro do signo de virgem. Natural da Índia. É o mais sensato entre os Cavaleiros de Ouro. Não se abala com qualquer coisa e avalia tudo com muita calma. Não é cego mas mantem os olhos fechados e se priva da visão para elevar seu cosmo ao extremo. No momento que os olhos se abrem, bloqueia os cinco sentidos do oponente, até mesmo o sexto sentido, e desfere o golpe de defesa e ataque 'Tesouro do Céu'.";

    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}
function descobrirSigno(){

    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);
    const texto3 = document.querySelector("h3");
    let signo = "";
    //alert(`dia ${dia} e mes ${mes}`);
    

    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
        texto3.innerHTML = "Áries";
        alert(`dia ${dia} e mes ${mes}`);
    } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
        texto3.innerHTML = "Touro";
    } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
        texto3.innerHTML = "Gêmeos";
    } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
        texto3.innerHTML = "Câncer";
    } else if ((mes == 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        texto3.innerHTML = "Leão";
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        texto3.innerHTML = "Virgem";
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        texto3.innerHTML = "Libra";
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        texto3.innerHTML = "Escorpião";
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        texto3.innerHTML = "Sagitário";
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
        texto3.innerHTML = "Capricórnio";
    } else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)) {
        texto3.innerHTML = "Aquário";
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        texto3.innerHTML = "Peixes";
    }
    const resultadoElement = document.querySelector("resultado");
    const signoElement = document.querySelector("signo");
    const cavaleiroElement = document.querySelector("cavaleiro");
    signoElement.textContent = signo;
    
}
