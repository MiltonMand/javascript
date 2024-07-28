let valor = document.getElementById('valor');
let opcoes = document.getElementById('opcoes');
let metodo = document.getElementById('metodo');
let res = document.getElementById('resposta');

function avancar(){
    let valorp = Number(valor.value);
    let todop = Number(metodo.value);

    if (valorp.length ) {
        alert("nao pode")
    } else {
        opcoes.style.display = "block"
    }
    res.innerHTML = (`valorp: ${metodop} ; `)
}

function continuar(){
    res.style.display = "block"
}
