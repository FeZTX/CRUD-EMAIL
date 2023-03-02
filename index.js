const btnInicia = document.getElementById("btnInicia");
const container = document.getElementById("container");
const btnLista = document.getElementById("btnLista");
// const inputEmail = document.getElementById("")
let id = 1;
let usuarios = [];

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
  container.innerHTML = `<h1>Crie Seu Usuário!</h1>`;

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

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
    menu();
    }
  });

}

function insereEmail() {
  if (inputEmail.value && inputSenha.value != "") {
    user = {
      id: id,
      usuario: inputEmail.value,
      senha: inputSenha.value,
    };
    usuarios.push(user);
    id++;
  }

  console.log(usuarios);
  btnInicia.classList.remove("ocultaBtn");
  container.removeChild(boxButton);
  container.removeChild(boxInput);
  container.appendChild(btnInicia);
  container.appendChild(btnLista);
}

function listaUsuario() {
  // alert("Ta funcionando pelo menos!");

  console.log(boxButton);
  boxButton.innerHTML = "";
  boxInput.innerHTML = "";
  inputEmail.value = "";
  inputSenha.value = "";

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

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
    menu();
    }
  });

  for (let i = 0; i <= usuarios.length; i++) {
    boxInput.innerHTML += `<span>${usuarios[i].id}- ${usuarios[i].usuario} <button onclick="editar()"><i class="fa-solid fa-pen"></i></button></span>`;
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
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
    bgEditar.classList.remove("bgModalOpen");
    listaUsuarios();
    }
  });
  modalEditar.appendChild(btnEdita);
  btnEdita.setAttribute("onClick", "alteraEmail()");
};

let alteraEmail = () => {
  for(let u = 0; u <= usuarios.length; u++){
    alert(usuarios[u].usuario);
  }
  console.log(usuarios);
};
