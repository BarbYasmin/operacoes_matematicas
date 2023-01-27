
var result=document.getElementById('result')

function soma(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var s=n1+n2
    result.innerText=s
}
function sub(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var s=n1-n2
    result.innerText=s
}
function div(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var d=n1/n2
    result.innerText=d
}
function mult(){
    var n1=Number(document.getElementById('n1').value)
    var n2=Number(document.getElementById('n2').value)
    var m=n1*n2
    result.innerText=m
}
