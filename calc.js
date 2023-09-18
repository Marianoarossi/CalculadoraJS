const botonNumeros = document.getElementsByName('data-number')
const botonOpera = document.getElementsByName('data-opera')
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual='';
var opeAnterior='';
var operacion=undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregaNumero(boton.innerText);
        //alert(boton.innerText);
    })
})

botonOpera.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperacion(boton.innerHTML)
        //alert(boton.innerHTML);
    })
})

botonIgual.addEventListener('click',function(){
    calcular();
    actualizarDisplay();
})

botonDelete.addEventListener('click',function(){
    clear();
    actualizarDisplay();
})

function agregaNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value =opeActual;
}

function clear(){
    opeActual ="";
    opeAnterior="";
    operacion= undefined;
}

function selectOperacion(op){
    if(opeActual==='') return;
    if(opeActual !==''){
        calcular();
    }
    operacion = op.toString();
    opeAnterior=opeActual;
    opeActual ='';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior +actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}
