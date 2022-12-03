# Calculadora de média e conversor de temperaturas (Variáveis, operações e média)

### Screenshot

![](screenshot.png)

https://imersao.dev/aulas/aula01-variaveis-operacoes-media

### Conteúdo detalhado desta aula:

- Criar uma conta no CodePen;
- Entender as diferenças entre HTML, CSS e JavaScript;
- Variáveis, manipulação dos valores armazenados e a memória do computador;
- Tipos de variáveis, como texto e inteiro;
- Fixando a quantidade de casas decimais com a função toFixed().

### Desafios desta aula!

- [x] Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não;
```js
if (media >= 6){
  aprovacao.innerHTML = "<b>APROVADO!</b>";
} else
  aprovacao.innerHTML = "<b>REPROVADO!</b>";
```

- [x] Alterar o fundo da tela da maneira que achar mais legal;
```css
body {
  background-color: #000000;
}
```

- [x] Imprimir na própria página o resultado, ao invés do console;
```js
document.querySelector("#media").innerHTML = `<b>Média final:</b> ${media}`;
var aprovacao = document.querySelector("#aprovacao");
```

- [x] Criar um conversor de temperaturas entre farenheit e celcius;
```js
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
```

- [x] Colocar a conta inteira da média em apenas uma linha.
```js
var media = +(notas.reduce(function(a, b){return a+b}) / notas.length).toFixed(1);
```

A [Pen](https://codepen.io/rhatiro/pen/xxjwgoK) by [rhatiro](https://codepen.io/rhatiro) on [CodePen](https://codepen.io).

[License](https://codepen.io/license/pen/xxjwgoK).
