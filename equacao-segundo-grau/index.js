var botao = window.document.querySelector('input#botao')
botao.addEventListener('click', calcular)

function calcular(){
    var atxt = window.document.querySelector('input#a')
    const a = Number(atxt.value)
    var btxt = window.document.querySelector('input#b')
    const b = Number(btxt.value)
    var ctxt = window.document.querySelector('input#c')
    const c = Number(ctxt.value)
    if (a == 0) {
        window.alert('Verifique os dados e tente novamente') 
    } else{
        var resp = window.document.querySelector('div#resposta')
        const delta = b**2 - 4*a*c
        resp.innerHTML = `<p>Δ = ${delta}</p>`
        if (delta >= 0) {
            var raiz = Math.sqrt(delta)
            var numerador = -(b) + raiz
            var denominador = 2 * a
            var x = numerador / denominador
            resp.innerHTML += `S = {${x}; `
            numerador = -(b) - raiz
            x = numerador / denominador
            resp.innerHTML += `${x}}`
        }
    }
}