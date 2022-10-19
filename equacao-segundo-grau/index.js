let botao = window.document.querySelector('input#botao');
botao.addEventListener('click', setarValores);

function setarValores() {
    let atxt = window.document.querySelector('input#a');
    let numeroA = Number(atxt.value);
    let btxt = window.document.querySelector('input#b');
    let numeroB = Number(btxt.value);
    let ctxt = window.document.querySelector('input#c');
    let numeroC = Number(ctxt.value);
    calcular(numeroA, numeroB, numeroC);
}

function calcular(a, b, c) {
    if (a == 0) {
        window.alert('Verifique os dados e tente novamente');
    } else{
        let resp = window.document.querySelector('div#resposta');
        let delta = b**2 - 4*a*c;
        resp.innerHTML = `<p>&Delta; = ${delta}</p>`;
        if (delta >= 0) {
            let raiz = Math.sqrt(delta);
            let numerador = -(b) + raiz;
            let denominador = 2 * a;
            let x = numerador / denominador;
            resp.innerHTML += `S = {${x.toFixed(2)}; `;
            numerador = -(b) - raiz;
            x = numerador / denominador;
            resp.innerHTML += `${x.toFixed(2)}}`;
        } else {
            resp.innerHTML += `Raízes não estão contidas no conjunto dos reais`;
        }
    }
}