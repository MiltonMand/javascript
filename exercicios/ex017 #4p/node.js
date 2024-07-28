function contar() {
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf") 
    let pas = document.getElementById("txtp")
    let res = document.getElementById("res")
    let delet = document.getElementById("del") 
            
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert("preencha todos os espaços em branco")        
    }
    
    else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        
        if(p == 0) {
            alert("seu passo é zero,vou considerar como 1")
            p = 1
        }
        //contagem crescente
        if(i < f) {
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
            }
        }
        //contagem regreciva
        else {
            for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += (`\u{1f3c1}`)
    }
}

function delet() {
        res.innerHTML = " "
    }
