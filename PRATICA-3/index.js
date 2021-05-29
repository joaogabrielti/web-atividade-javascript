let usuario, senha;

usuario = prompt("Usuário:");
senha = prompt("Senha:");

if ((usuario == "aluno" && senha == "123") || (usuario == "professor" && senha == "456")) {
    alert("Autenticado com sucesso!");
} else {
    alert("Usuário ou Senha inválidos!");
}