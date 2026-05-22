function mostrarAba(aba) {
  const formLogin = document.getElementById("formLogin");
  const formCadastro = document.getElementById("formCadastro");
  const botoes = document.querySelectorAll(".aba");

  botoes.forEach(function(botao) {
    botao.classList.remove("ativa");
  });

  if (aba === "login") {
    formLogin.classList.remove("escondido");
    formCadastro.classList.add("escondido");
    botoes[0].classList.add("ativa");
  } else {
    formCadastro.classList.remove("escondido");
    formLogin.classList.add("escondido");
    botoes[1].classList.add("ativa");
  }
}

function mostrarSenha(id) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const formCadastro = document.getElementById("formCadastro");
  const keyCadastro = document.getElementById("keyCadastro");
  const usuarioCadastro = document.getElementById("usuarioCadastro");
  const senhaCadastro = document.getElementById("senhaCadastro");
  const confirmarSenha = document.getElementById("confirmarSenha");

  if (formCadastro) {
    formCadastro.addEventListener("submit", function(event) {
      const key = keyCadastro.value.trim();
      const usuario = usuarioCadastro.value.trim();
      const senha = senhaCadastro.value.trim();
      const confirmar = confirmarSenha.value.trim();

      if (key.length < 8) {
        event.preventDefault();
        alert("Digite uma Key válida.");
        return;
      }

      if (usuario.length < 3) {
        event.preventDefault();
        alert("O usuário precisa ter pelo menos 3 caracteres.");
        return;
      }

      if (senha.length < 4) {
        event.preventDefault();
        alert("A senha precisa ter pelo menos 4 caracteres.");
        return;
      }

      if (senha !== confirmar) {
        event.preventDefault();
        alert("As senhas não são iguais.");
      }
    });
  }
});
