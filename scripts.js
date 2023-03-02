var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
//Duas casas depôs da vírgula 
valorEmReal = valorEmReal.toFixed(2);
var nome = "jose carlos";
//Quanto vale o dólar em real
alert("R$" + valorEmReal);
