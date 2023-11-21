function validaFormulario() {
    const nome = document.getElementById('nome').value
    const email = document.querySelector('#email').value
    const senha = document.getElementById('senha').value

    if(nome == '' || email == '' || senha == ''){
        alert('Por favor, digite novamente')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+s/
    if(!emailRegex.test(email)){
        alert('')
    }


    if(senha > 8){
        alert('Digite menos caracteres')
    }
}