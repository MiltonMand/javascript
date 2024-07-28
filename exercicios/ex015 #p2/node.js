function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = (`agora são => ${hora}h : ${min}min`)
    if(hora >= 0 && hora < 12) {
        img.src = "foto_manha.jpg"
        document.body.style.background="yellow"
    }
    else if(hora >= 12 && hora < 18){
        img.src = "foto_tarde.jpg"
        document.body.style.background="orange"
    }
    else{
        img.src = "foto_noite.jpg"
        document.body.style.background="black"
    }
}
