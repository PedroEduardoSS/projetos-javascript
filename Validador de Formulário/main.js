function validar(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    if(name == ""){
        alert('Preencha o campo nome.');
        name.focus();
        return false;
    }
    
    if(email == "" || email.indexOf('@') == -1 ){
        alert('Preencha com um E-mail válido.');
        email.focus();
        return false;
    }

    if(senha == "" || senha.length <= 7){
        alert('Preencha o campo SENHA com no mmínimo 8 caracteres');
        senha.focus();
        return false;
    }
}