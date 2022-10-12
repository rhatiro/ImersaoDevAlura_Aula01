// CALCULADORA DE MEDIA

a = prompt("Nota do primeiro bimestre:");
b = prompt("Nota do segundo bimestre:");
c = prompt("Nota do terceiro bimestre:");
d = prompt("Nota do quarto bimestre:");

var notas = [+a, +b, +c, +d];

alert("Média final: " + +(notas.reduce(function(a, b){return a+b}) / notas.length).toFixed(1));

document.querySelector("#notas").innerHTML = `<b>Notas de cada bimestre:</b> ${notas[0]}, ${notas[1]}, ${notas[2]} e ${notas[3]}`;

var media = +(notas.reduce(function(a, b){return a+b}) / notas.length).toFixed(1);

document.querySelector("#media").innerHTML = `<b>Média final:</b> ${media}`;

var aprovacao = document.querySelector("#aprovacao");
if (media >= 6){
  aprovacao.innerHTML = "<b>APROVADO!</b>";
} else
  aprovacao.innerHTML = "<b>REPROVADO!</b>";

// CONVERSOR DE TEMPERATURA

function toFarenheit(){
  let celcius = document.querySelector("#c").value;
  let result;
  if (celcius != ""){
    result = (celcius * 1.8 + 32).toFixed(1);
  } else
    result = "";
  document.querySelector("#f").value = result;
}

function toCelcius(){
  let farenheit = document.querySelector("#f").value;
  let result;
  if (farenheit != ""){
    result = ((farenheit - 32) / 1.8).toFixed(1);
  } else
    result = "";
  document.querySelector("#c").value = result;
}

document.querySelector("#c").addEventListener("keyup", toFarenheit);

document.querySelector("#f").addEventListener("keyup", toCelcius);