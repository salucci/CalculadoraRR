import dictionary from "./src/modules/dic.js"

const $radioSalarioPerc = document.querySelector("#salarioperc")
const $radioSalarioFixo = document.querySelector("#salariofixo")

const $radioValorFixo = document.querySelector("#valorfixo")
const $radioValorCalc = document.querySelector("#valorcalc")

const $salariop = document.querySelector(".salariop")
const $expatual = document.querySelector(".expatual")
const $expmax = document.querySelector(".expmax")

const $salariof = document.querySelector(".salariof")
const $imposto = document.querySelector(".imposto")

const $tempodisp = document.querySelector(".tempodisp")
const $indexsaude = document.querySelector(".indexsaude")

const $valorenergia = document.querySelector(".valorenergia")

const $qtdrecurso = document.querySelector(".qtdrecurso")
const $precorecurso = document.querySelector(".precorecurso")

const $buttonProcess = document.querySelector(".button-process")


$radioSalarioPerc.addEventListener("click", () => {
  $salariop.hidden = false;
  $expatual.hidden = false; 
  $expmax.hidden = false;

  $salariof.hidden = true; 
  $imposto.hidden = true;
});

$radioSalarioFixo.addEventListener("click", () => {
  $salariop.hidden = true;
  $expatual.hidden = true; 
  $expmax.hidden = true;

  $salariof.hidden = false; 
  $imposto.hidden = false;
  });

$radioValorFixo.addEventListener("click", () => {
    $valorenergia.hidden = false;
  
    $qtdrecurso.hidden = true; 
    $precorecurso.hidden = true;
  });
  
  $radioValorCalc.addEventListener("click", () => {
    $valorenergia.hidden = true;
  
    $qtdrecurso.hidden = false; 
    $precorecurso.hidden = false;
    });




$buttonProcess.addEventListener("click", () => {
  const $salariop = document.querySelector(".salariop")
  const $expatual = document.querySelector(".expatual")
  const $expmax = document.querySelector(".expmax")
  
  const $salariof = document.querySelector(".salariof")
  const $imposto = document.querySelector(".imposto")
  
  const $tempodisp = document.querySelector(".tempodisp")
  const $indexsaude = document.querySelector(".indexsaude")
  
  const $valorenergia = document.querySelector(".valorenergia")

  const $qtdrecurso = document.querySelector(".qtdrecurso")
  const $precorecurso = document.querySelector(".precorecurso")

  const $result = document.querySelector("#result")

  var salarioreal = 0;

  if ($radioSalarioPerc.checked == true)
  {
  salarioreal = Math. trunc((Math.pow(parseInt($expatual.value), 0.6) / Math.pow(parseInt($expmax.value), 0.6)) * parseInt($salariop.value))
  }

  if ($radioSalarioFixo.checked == true)
  {
  salarioreal = Math. trunc( parseInt($salariof.value) * (100-parseInt($imposto.value))/100 )
  }


  var salariodiario = salarioreal * 30 * 6 * parseInt($tempodisp.value)

  var valorenergia = 0
  if ($radioValorFixo.checked == true)
  {
  valorenergia = parseInt($valorenergia.value);
  }

  if ($radioValorCalc.checked == true)
  {
  valorenergia = Math. trunc( parseInt($qtdrecurso.value) * parseInt($precorecurso.value) )
  }


  var recenergia = 0;

  switch (parseInt($indexsaude.value)) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      recenergia = 7;
      break;
    case 6:
      recenergia = 8;
      break;
    case 7:
      recenergia = 9;
      break;
    case 8:
      recenergia = 10;
      break;
    case 9:
      recenergia = 11;
      break;
    case 10:
      recenergia = 12;
      break;
    case 11:
      recenergia = 16;
      break;
    default:
      recenergia = 0;
      
  }


  var lucroenergia = (recenergia/10) * valorenergia;

  var resultado = "Resultado: </br> Salário 10E: $"+salarioreal.toLocaleString()+ " Salário 300E (1 hit): $"+(salarioreal*30).toLocaleString()+ "  Salario Médio Diário: $"+salariodiario.toLocaleString()+" <br/> Recuperação de energia: "+recenergia+" Valor 10E: $"+valorenergia.toLocaleString()+" Lucro 10min energia: $"+ lucroenergia.toLocaleString()+ "<br/>Total: "+(salariodiario+lucroenergia*6*24).toLocaleString();

  $result.innerHTML = resultado;
});