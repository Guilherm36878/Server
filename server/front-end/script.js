async function getAlunos() {
  let url = "http://localhost:8080/alunos";

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  for (let aluno of data) {
    let cardAluno = document.createElement("div");
    cardAluno.classList.add("aluno");

    cardAluno.innerHTML = `
        <p>Id: ${aluno.id}</p>
        <p>Nome: ${aluno.nome}</p>
    `;

    document.querySelector(".todosAlunos").appendChild(cardAluno);
  }
}

async function cadastrar() {
  let id = document.querySelector("#idAluno").value;
  let nome = document.querySelector("#nomeAluno").value;

  //Tratamento de erros

  let dados = {
    id,
    nome,
  };

  let url = "http://localhost:8080/cadastro";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dados),
  });
  const data = await response.json();

  console.log(data);
  window.location.reload();
}

async function atualizar() {
  let id = document.querySelector("#idAluno").value;
  let nome = document.querySelector("#nomeAluno").value;

  let dados = {
    id,
    nome,
  };

  let url = "http://localhost:8080/atualizar";

  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dados),
  });
  const data = await response.json();

  if (!response.ok) {
    alert("Erro: " + data.erro);
    return;
  }

  alert(data.mensagem);

  console.log(data);
  window.location.reload();
}

getAlunos();

