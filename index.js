const btnInicia = document.getElementById("btnInicia");
const container = document.getElementById("container");
const btnLista = document.getElementById("btnLista");
// const inputUser = document.getElementById("")
let id = 1;
let usuarios = [];

boxInput = document.createElement("div");
inputUser = document.createElement("Input");
inputUser.setAttribute("id", "inputUser");
inputUser.setAttribute("type", "User");
inputNovoUser = document.createElement("Input");
inputNovoUser.setAttribute("type", "User");
inputSenha = document.createElement("Input");
inputSenha.setAttribute("id", "inputSenha");
inputSenha.setAttribute("type", "Password");
boxButton = document.createElement("div");
btnCria = document.createElement("button");
btnCria.setAttribute("onClick", "insereUser()");
btnVolta = document.createElement("button");
btnVolta.setAttribute("onClick", "menu()");
btnEdita = document.createElement("button");
btnEdita.setAttribute("onClick", 'alteraUser()');
bgEditar = document.createElement("div");
modalEditar = document.createElement("div");
labelInput = document.createElement("label");
labelInput.innerText = "Usuário";
labelInputNovo = document.createElement("label");
labelInputNovo.innerText = "Novo Usuário";
labelInputAntigo = document.createElement("label");
labelInputAntigo.innerText = "Usuário a ser alterado";
labelSenha = document.createElement("label");
labelSenha.innerText = "Senha";

function addMail() {
  container.innerHTML = `<h1>Crie Seu Usuário!</h1>`;
  inputUser.value = "";
  inputSenha.value = "";
  boxInput.innerHTML = "";
  boxButton.appendChild(btnVolta);
  btnVolta.innerHTML = "Voltar";
  boxInput.classList.remove("boxLista");
  boxInput.classList.add("boxInput");
  boxButton.classList.add("boxButton");
  btnCria.innerHTML = "Enviar";
  container.appendChild(boxInput);
  container.appendChild(boxButton);
  boxInput.appendChild(labelInput);
  boxInput.appendChild(inputUser);
  boxInput.appendChild(labelSenha);
  boxInput.appendChild(inputSenha);
  boxButton.appendChild(btnCria);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu();
    }
  });
}

function insereUser() {
  if (inputUser.value && inputSenha.value != "") {
    user = {
      id: id,
      usuario: inputUser.value,
      senha: inputSenha.value,
    };
    usuarios.push(user);
    id++;
  } else {
    alert("Por favor, insira ambos os dados, para criar o Usuário");
  }

  console.log(usuarios);
  btnInicia.classList.remove("ocultaBtn");
  container.removeChild(boxButton);
  container.removeChild(boxInput);
  container.appendChild(btnInicia);
  container.appendChild(btnLista);
}

function listaUsuario() {
  if (usuarios.length >= 1) {
    boxButton.innerHTML = "";
    boxInput.innerHTML = "";
    inputUser.value = "";
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

    for (let i = 0; i < usuarios.length; i++) {
      boxInput.innerHTML += `<span>${usuarios[i].id}- ${usuarios[i].usuario} <div class="buttonsContainer"><button onclick="editar('${usuarios[i].usuario}')"><i class="fa-solid fa-pen"></i></button> <button onclick="excludeUser('${usuarios[i].id}')"><i class="fa-solid fa-x"></i></button></div></span>`;
    }
  } else {
    alert("Não há registros!");
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu();
    }
  });
}

function menu() {
  container.innerHTML = "";
  container.appendChild(btnInicia);
  container.appendChild(btnLista);
}

const editar = (name) => {
  container.appendChild(bgEditar);
  bgEditar.classList.add("bgModal");
  bgEditar.appendChild(modalEditar);
  modalEditar.classList.add("modal");
  setTimeout(() => {
    bgEditar.classList.add("bgModalOpen");
  }, 0.1);
  modalEditar.appendChild(labelInputAntigo);
  modalEditar.appendChild(inputUser);
  inputUser.value = name;
  inputUser.setAttribute('disabled', true)
  modalEditar.appendChild(labelInputNovo);
  modalEditar.appendChild(inputNovoUser);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      bgEditar.classList.remove("bgModalOpen");
    }
  });
  modalEditar.appendChild(btnEdita);
  btnEdita.innerText = "Alterar";
};

const alteraUser = () => {
  for (let i = 0; i < usuarios.length; i++) {
    if (inputNovoUser.value.length > 0) {
        usuarios[i].usuario = inputNovoUser.value;
        alert("Usuário alterado com sucesso");
        inputUser.removeAttribute('disabled', true)
        menu();
        bgEditar.classList.remove("bgModalOpen");
    } else {
      alert("Por favor insira o novo nome para usuário!!");
    }
  }
};

const excludeUser = (userId) => {
  for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].id == userId) {
      alert(`Usuário: ${usuarios[i].usuario} excluído do diretório`)
      usuarios.splice(i, 1)
    }
  }
  menu();
}
