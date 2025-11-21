var cadastros = [];
function cadastrar() {
    var nomeInput = document.getElementById("nome");
    var dataInput = document.getElementById("data");
    var generoInput = document.getElementById("Genero");
    
    var nome = nomeInput.value;
    var nascimento = dataInput.value;
    var genero = generoInput.value;
    var usuario = {
        name: nome,
        nascimento: nascimento,
        genero: genero
    };
    cadastros.push(usuario);

    nomeInput.value = "";
   dataInput.value = "";
   generoInput.value = "Masculino";
}
var mostrar = function (cadastros) {
    var usuarios = document.getElementById("showUsers");
    usuarios.innerHTML = "";
    for (var i = 0; i < cadastros.length; i++) {
        usuarios.innerHTML += `<p>Nome:${cadastros[i].name} | Genero:${cadastros[i].genero} | Nascimento:${cadastros[i].nascimento}</p>`;
    }
};
