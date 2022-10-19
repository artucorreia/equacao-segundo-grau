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
let numerador = 0;
let denominador = 0;
let x = [0, 0];
function calcular(a, b, c) {
    if ((a == 0) || ((b == 0) && (c == 0))){
        window.alert('Verifique os dados e tente novamente');
    } else{
        delta = b**2 - 4*a*c;
        resp.innerHTML = `${a}x<sup>2</sup> + ${b}x + ${c} = 0`;
        resp.innerHTML += `<p>&Delta; = ${delta}</p>`;
        if (delta >= 0) {
            raizDelta = Math.sqrt(delta);
            numerador = -(b) + raizDelta;
            denominador = 2 * a;
            x[0] = numerador / denominador;
            numerador = -(b) - raizDelta;
            x[1] = numerador / denominador;
            if (x[0] != x[1]) {
                resp.innerHTML += `S = {${x[0].toFixed(2)}; `;
                resp.innerHTML += `${x[1].toFixed(2)}}`;
            } else {
                resp.innerHTML += `S = {${x[0].toFixed(2)}}`;
            }
        } else {
            resp.innerHTML += `Raízes não estão contidas no conjunto dos reais`;
        }
    }
}