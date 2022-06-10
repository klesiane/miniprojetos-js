var calcular = document.getElementById("calcular");

calcular.addEventListener("click", imc);

function imc() {
  var nome = document.getElementById("nome").value;
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;
  var resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    var classificacao = ''
    var valorIMC = (peso / (altura * altura)).toFixed(2)

  
    if (valorIMC < 18.5){
        classificacao = 'Cuidado, você está abaixo do peso!'
    } else if (valorIMC >= 18.5 && valorIMC < 25){
        classificacao = 'Parabéns, você está com o peso normal!'
    } else if (valorIMC >= 25 && valorIMC < 30){
        classificacao = 'Cuidado, você está levemente acima do peso!'
    }else if (valorIMC >= 30 && valorIMC < 35){
        classificacao = 'Cuidado, você está com Obesidade grau I!'
    }else if (valorIMC >= 25 && valorIMC < 40){
        classificacao = 'Cuidado, você está com Obesidade grau II!'
    }else {
        classificacao = 'Cuidado, você está com Obesidade grau III!'
    }

    resultado.innerHTML = `${nome}, seu peso é ${peso}Kg e você tem ${altura} de altura. Então seu IMC corresponde a ${valorIMC}. ${classificacao}`;


} else {
    alert("É necessário inserir todos os dados!");
  }
}
