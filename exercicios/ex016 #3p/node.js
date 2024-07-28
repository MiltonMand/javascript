function verificar() {
    let data = new Date()
    var ano = data.getFullYear()
    let fano = document.getElementById("ano")
    let res = document.getElementById("res")
    
    if(fano.value.length == 0 || fano.value > ano) {
        alert("verifique os dados e tente novamente")
     }
     else if(fano.value < 1924) {
         alert("essa pessoa ja morreu")
         }
    else {
         let fsex = document.getElementsByName("radsex")
         let idade = ano - Number(fano.value)
         let genero = ""
         let img = document.createElement("img")
         img.setAttribute("id" , "foto")
                  
         if(fsex[0].checked) {
             genero = "homem"
             if(idade <= 5) {
                 //bebe
                 img.setAttribute("src","bebe_m.jpg")
             }
             else if(idade > 5&&idade <= 16) {
                 //crianca
                 img.setAttribute("src","crianca_m.jpg")
             }
             else if(idade > 16&&idade <=35) {
                 //jovem
                 img.setAttribute("src","jovem_m.jpg")
             }
             else if(idade > 35&&idade <=64){
                 //adulto
                 img.setAttribute("src","adulto_m.jpg")
             }
             else if(idade > 64){
                 //velho
                 img.setAttribute("src","velho_m.jpg")
             }
         }
         else if(fsex[1].checked){
             genero = "mulher"
             if(idade <= 5) {
                 //bebe
                 img.setAttribute("src","bebe_f.jpg")
             }
             else if(idade > 5 && idade <= 16) {
                 //crianca
                 img.setAttribute("src","crianca_f.jpg")
             }
             else if(idade > 16 && idade <=35) {
                 //jovem
                 img.setAttribute("src","jovem_f.jpg")
             }
             else if(idade > 35 && idade <=64){
                 //adulto
                 img.setAttribute("src","adulto_f.jpg")
             }
             else if(idade > 64){
                 //velho
                 img.setAttribute("src","velho_f.jpg")
             }
         }
         res.innerHTML = (`${genero} com ${idade} anos`)
         res.appendChild(img)
     }
}
