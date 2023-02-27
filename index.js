const btnInicia = document.getElementById("btnInicia");
const container = document.getElementById("container");
const btnLista = document.getElementById("btnLista");
// const inputEmail = document.getElementById("")
let id = 1;
let emails = [];

boxInput = document.createElement("div");
inputEmail = document.createElement("Input");
inputSenha = document.createElement("Input");
boxButton = document.createElement("div");
btnCria = document.createElement("button");
btnVolta = document.createElement("button");
btnEdita = document.createElement("button");
bgEditar = document.createElement("div");
modalEditar = document.createElement("div");


function addMail() {
  container.innerHTML = `<h1>Crie Seu email!</h1>`;

  inputEmail.value = "";
  inputSenha.value = "";
  boxInput.innerHTML = "";
  boxButton.appendChild(btnVolta);
  btnVolta.innerHTML = "Voltar";
  btnVolta.setAttribute("onClick", "menu()");
  boxInput.classList.remove("boxLista");
  boxInput.classList.add("boxInput");
  inputEmail.setAttribute("id", "inputEmail");
  inputEmail.setAttribute("type", "Email");
  inputSenha.setAttribute("id", "inputSenha");
  inputSenha.setAttribute("type", "Password");
  boxButton.classList.add("boxButton");
  btnCria.innerHTML = "Enviar";
  btnCria.setAttribute("onClick", "insereEmail()");
  
  container.appendChild(boxInput);
  container.appendChild(boxButton);
  boxInput.appendChild(inputEmail);
  boxInput.appendChild(inputSenha);
  boxButton.appendChild(btnCria);
}

function insereEmail() {
  if(inputEmail.value && inputSenha.value != "") {
    user = {
      id: id,
      email: inputEmail.value,
      senha: inputSenha.value, 
    };
    emails.push(user);
    id++;
  }

  console.log(emails);
  btnInicia.classList.remove("ocultaBtn");
  container.removeChild(boxButton);
  container.removeChild(boxInput);
  container.appendChild(btnInicia);
  container.appendChild(btnLista);
}

function listaEmails() {
  // alert("Ta funcionando pelo menos!");
  
  console.log(boxButton);
  boxButton.innerHTML = "";
  boxInput.innerHTML = "";

  container.removeChild(btnInicia);
  container.removeChild(btnLista);
  container.appendChild(boxInput);
  boxInput.classList.remove("boxInput");
  boxInput.classList.add("boxLista");
  container.appendChild(boxButton);
  boxButton.classList.add("boxButton");
  btnVolta.innerHTML = "Voltar";
  boxButton.appendChild(btnVolta);
  btnVolta.setAttribute("onClick", "menu()");

  for(let i = 0; i <= emails.length; i++){
    boxInput.innerHTML += `<span>${emails[i].id}- ${emails[i].email} <button onclick="editar()">AA</button></span>`;
  }
}

function menu() {
  container.innerHTML = "";
  container.appendChild(btnInicia);
  container.appendChild(btnLista);
}

let editar = () => {
  container.appendChild(bgEditar);
  bgEditar.classList.add("bgModal");
  bgEditar.appendChild(modalEditar);
  modalEditar.classList.add("modal");
  setTimeout(() => {
    bgEditar.classList.add("bgModalOpen");
  }, 0.1);
  modalEditar.appendChild(inputEmail);
  modalEditar.appendChild(inputSenha);
  
}

let alteraEmail = () => {

}