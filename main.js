function redirecionamentoWhats (){
    let numero = document.getElementById("number").value

    window.open (`https://api.whatsapp.com/send/?phone=55${numero}`, '_blank')

}

document.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let numero = document.getElementById("number").value
        window.open (`https://api.whatsapp.com/send/?phone=55${numero}`, '_blank')
    }
})

