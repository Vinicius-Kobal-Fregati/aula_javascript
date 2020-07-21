// comentário
/*
Comentário
Também
*/
/*var nome = "Vinícius Fregati"; //precisa do ; no final de algumas ações. O js é uma linguagem de tipagem, então não precisa declarar o tipo de função que vai se utilizar, como string, int, float, etc...
var idade = 20;
//var idade = "20";
var idade2 = 15;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos"); //gera um pop up com isso escrito
//alert(idade + idade2); // se for número, soma, se tiver alguma string, concatena.
console.log(nome); //gera as mensagens na parte console do navegador, dá para ver apertando F12
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil")); //Esse replace substitui a primeira palavra pela segunda.
//alert(frase.replace("Japão", "Brasil")); // dá para usar com o alert também.

/*
console.log(nome.toUpperCase()); coloca tudo em maíusculo 
console.log(nome.toLowerCase()); coloca tudo em minúsculo
*/

//Segunda aula, Array e dicionário.

//var lista =["maçã", "pêra", "laranja"]; //assim cria uma lista
//lista.push("uva"); //adiciona um item a lista
//lista.pop(); //tira o último elemento da lista
//console.log(lista);
//console.log(lista.length); //mostra o tamanho da lista
//console.log(lista.reverse()); //inverte a ordem da lista
//console.log(lista.toString()); //transforma a lista em uma string
//console.log(lista.toString()[0]); //transforma a lista em uma string e imprime a primeira letra, nesse caso, m
//console.log(lista.join(" - ")); // Transforma em string e substitui as vírgulas que separam as palavras pelo que está dentro dos "", nesse caso, -. Se usarmos o [0], também exibirá a letra m.
//alert(lista[1]); // o [1] pega o segundo item da lista, no caso, pêra

/*
var fruta = {nome:"maçã", cor:"vermelha"} //isso é um dicionário
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}] // lista de dicionários.
console.log(frutas);
alert(frutas[1].nome);
*/

//Aula 3, condicionais, laços de repetição e date.
/*
var idade = prompt("Qual sua idade ?"); // O prompt exibe uma mensagem onde o usuário pode inserir valores.
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};
*/

//laços
/*
var count = 0;
while (count <= 5){ //estrutura de repetição com o while
    console.log(count);
    count = count + 1; // ou count++
};
*/

/*
for (let count = 0; count <= 5; count++){
    alert(count);
};
*/

/*
var d = new Date(); // essa estrutura passa a data e o horário atual.
//alert(d);
//alert(d.getMonth() + 1); //pega o mês atual, esse sempre começa do zero, então normalmente se adiciona mais um.
//alert(d.getMinutes()); // dá os minutos atuais.
//alert(d.getDay()); //passa o dia, não sei porque, não está funcionando.
//alert(d.getHours()); // passa a hora
*/


//Desenvolva páginas web
/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
}

function validaIdade(idade, ){
    var validar;
    if (idade >= 18){
        validar = true // ou return true
    } else{
        validar = false // ou return false
    }
    return validar;
}

var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/



//Manipulando elementos da página.

function clicou(){
    //alert("Obrigado por clicar");
    //document.getElementById("agradecimento"); // isso faz o JS acessar o documento, procurando o elemento que tenha o ID agradecimento
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //O innerHTML injeta um texto.
    
    //console.log(document.getElementById("agradecimento")) // aqui mostra o resultado, que é um h3, etc...
}

function redirecionar(){
    window.open("https://www.detran.sp.gov.br/wps/portal/portaldetran/cidadao/habilitacao/fichaservico/renovacao/renovacaosimplificada/5e1f2b5c-b68f-4134-9fb4-4644a7a2be14/#"); // ao clicar, abre outro site em outra aba
    //window.location.href = "https://www.detran.sp.gov.br/wps/portal/portaldetran/cidadao/habilitacao/fichaservico/renovacao/renovacaosimplificada/5e1f2b5c-b68f-4134-9fb4-4644a7a2be14/#" // outra forma de fazer o que a linha de cima faz, só que essa abre na mesma janela
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto");
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

//Dava para fazer esses dois de cima assim também:
/* No html, deveria colocar this nos (), por exemplo: "trocar(this)" e "voltar(this)"
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

*/ 

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value) //.value carrega o valor que tem aquele elemento
}

