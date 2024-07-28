var agora = new Date()
var hora = agora.gethours

if(hora < 12) {
    console.log("bom dia")
}
else if(hora <= 17) {
    console.log("boa tarde")
}
else {
    console.log("boa noite")
}