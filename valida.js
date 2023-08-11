//alert("It worked")
const form = document.getElementById('formato')
console.log (form);

form.addEventListener("submit",function (x){
    x.preventDefault();
})
let first = document.getElementById("a");
let second = document.getElementById("b");
let mensagem = ""
document.getElementById("resposta").innerHTML = (mensagem);
const button = document.getElementById("btn_valida");

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
        document.getElementById("resposta").innerHTML = (mensagem);
   