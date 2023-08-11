//console.log("it's working")

const form= document.getElementById('form_deposito');
function validaNome (nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}
form.addEventListener('submit', function(e){
    let formEvalido = false;
    e.preventDefault();
    const nomeBeneficiario = document. getElementById('nome_beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero_conta');
    const valorDeposito = document.getElementById('valor_deposito');
    const mensagemSucesso = "Montante de ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} conta: ${numeroContaBeneficiario.value}"

    const Evalido = validaNome(nomeBeneficiario.value)
    if (formEvalido){alert (mensagemSucesso);} else{
        alert ('O nome nao esta completo');
        nomeBeneficiario.value = ' ';
        numeroContaBeneficiario.value = ' ';
        valorDeposito.value= ' ';
    }})
    console.log(form);