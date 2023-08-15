//alert("It worked")
const form = document.getElementById('formato');
const respostaElement= document.getElementById("resposta");
//Este evento prevé o funcionamiento preestablecido do navegador, evita limpar o formúlário ao clicar o botão
form.addEventListener("submit", function (event){event.preventDefault();
const mensagem = '';
});
//Declara as variabeis a usar
const button = document.getElementById("btn_valida");
let first = document.getElementById("a");
let second = document.getElementById("b");
button.addEventListener("click", function (event)
    //Dentro da função se faz a comparação e verifica se result é válido ao não
    {event.preventDefault();
        //Converte a float ambos os números para evitar bugs
        let result = parseFloat(second.value) > parseFloat(first.value);
        if (result === true){mensagem =`O número: ${second.value} é maior que o número: ${first.value}`;
        }else if(second.value===first.value){mensagem=`Os números: ${first.value} e ${second.value} são iguias.`;
        }else {mensagem =`O número: ${second.value} é menor que o número: ${first.value} `};
//A mensagem de validação é enviada no window
        respostaElement.textContent = mensagem;
//limpa os inputs para volver a usar, sem necesidade de carregar a página de novo
first.value="";
second.value="";



});
/*form.addEventListener("submit",function (x){
    x.preventDefault();
})
let mensagem = ""


button.addEventListener("submit",valida(first,second));
    function valida(){
        let result = second.value > first.value;

        if(result === true){
        mensagem = "O segundo número é  o maior";
        return mensagem;
        }else if (second.value == first.value){
            mensagem = "Os dois números sao iguais";
            return mensagem;
        
        }else{
            mensagem ="O primeiro número é o menor"; 
            return mensagem;}
        }
document.getElementById("resposta").innerHTML = `${mensagem}`;
first.value = ' ';
second.value= ' ';*/
        
        