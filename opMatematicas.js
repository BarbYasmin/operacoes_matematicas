
var campoDeResultado=document.getElementById('campoDeResultado')

function soma(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var resultado=n1+n2
    campoDeResultado.innerText=resultado
}
function sub(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var resultado=n1-n2
    campoDeResultado.innerText=resultado
}
function div(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var resultado=n1/n2
    campoDeResultado.innerText=(resultado.toFixed(2))
}
function mult(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var resultado=n1*n2
    campoDeResultado.innerText=resultado
}
