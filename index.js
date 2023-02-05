const btnInicia = document.getElementById("btnInicia");
const container = document.getElementById("container");
// const inputEmail = document.getElementById("")
let emails = [];

function addMail() {
  container.innerHTML = `<h1>Crie Seu email!</h1>`;

  boxInput = document.createElement("div");
  boxInput.classList.add("boxInput");
  inputEmail = document.createElement("Input");
  inputEmail.setAttribute("id", "inputEmail");
  inputEmail.setAttribute("type", "Email");
  inputSenha = document.createElement("Input");
  inputSenha.setAttribute("id", "inputSenha");
  inputSenha.setAttribute("type", "Password");
  boxButton = document.createElement("div");
  boxButton.classList.add("boxButton");
  btnCria = document.createElement("button");
  btnCria.innerHTML = "Enviar";
  btnCria.setAttribute("onClick", "teste()");

  container.appendChild(boxInput);
  container.appendChild(boxButton);
  boxInput.appendChild(inputEmail);
  boxInput.appendChild(inputSenha);
  boxButton.appendChild(btnCria);
  btnInicia.classList.add("ocultaBtn");
}

function teste() {
    user = {
        email: inputEmail.value,
        senha: inputSenha.value,
    }

    emails.push(user);
    

    console.log(emails);
    btnInicia.classList.remove("ocultaBtn");
    container.removeChild(boxButton);
    container.removeChild(boxInput);
    container.appendChild(btnInicia);
}

console.log(teste);