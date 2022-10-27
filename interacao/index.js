let botao = window.document.querySelector('input#botao');
botao.addEventListener('click', setarValores);

// setar valores
let atxt = window.document.querySelector('input#a');
let btxt = window.document.querySelector('input#b');
let ctxt = window.document.querySelector('input#c');
function setarValores() {
    let numeroA = Number(atxt.value);
    let numeroB = Number(btxt.value);
    let numeroC = Number(ctxt.value);
    calcular(numeroA, numeroB, numeroC);
    limparInputs();
}

// limpar caixas de input
function limparInputs () {
    atxt.value = '';
    btxt.value = '';
    ctxt.value = '';
}

// calculo
let resp = window.document.querySelector('div#resposta');
let delta = 0;
let raizDelta = 0;
let numerador = [0, 0];
let denominador = 0;
let x = [0, 0];
function calcular(a, b, c) {
    if ((a == 0) || ((b == 0) && (c == 0))){
        window.alert('Verifique os dados e tente novamente');
    } else{
        delta = b**2 - 4*a*c;
        if (delta >= 0) {
            raizDelta = Math.sqrt(delta);
            numerador[0] = -(b) + raizDelta;
            numerador[1] = -(b) - raizDelta;
            denominador = 2 * a; 
            x[0] = numerador[0] / denominador;
            x[1] = numerador[1] / denominador;
            mensagem(a, b, c);
        } else {
            mensagem(a, b, c);
        }
    }
}

// mensagens
function mensagem(a, b, c) {
    switch(a) {
        case 1:
            resp.innerHTML = `x<sup>2</sup> `;
            break;
        case -1:
            resp.innerHTML = `-x<sup>2</sup> `;
            break;
        default:
            resp.innerHTML = `${a}x<sup>2</sup> `;
            break;
    }     
    if (b == 0) {
        resp.innerHTML += ``;
    } else if (b == 1) {
        resp.innerHTML += `+ x`;
    } else if ((b < 0) && (b != -1)){
        resp.innerHTML += `${b}x`;
    } else if (b == -1) {
        resp.innerHTML += `- x`;
    } else {
        resp.innerHTML += `+ ${b}x`;
    }
    if (c == 0) {
        resp.innerHTML += `= 0`;
    } else if (c < 0) {
        resp.innerHTML += ` ${c} = 0`;
    } else {
        resp.innerHTML += `+ ${c} = 0`;
    }
    resp.innerHTML += `<p>&Delta; = ${delta}</p>`;
    if (delta < 0) {
        resp.innerHTML += `Raízes não estão contidas no conjunto dos reais`;
    } else {
        if (x[0] != x[1]) {
            resp.innerHTML += `S = {${x[0].toFixed(2)}; `;
            resp.innerHTML += `${x[1].toFixed(2)}}`;
        } else {
            resp.innerHTML += `S = {${x[0].toFixed(2)}}`;
        }
    }
}