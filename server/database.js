export class Database {
  constructor() {
    this.alunos = [
      { id: 1, nome: "Marcos" },
      { id: 2, nome: "Bia" },
      { id: 3, nome: "Neto" },
      { id: 4, nome: "Dennis" },
      { id: 5, nome: "Yane" },
    ];

    this.profs = [
      { id: 11, nome: "Marlos" },
      { id: 22, nome: "Joari" },
      { id: 33, nome: "Daniel" },
    ];

    this.tecnicos = [
      { id: 44, nome: "Mara" },
      { id: 55, nome: "Vander" },
      { id: 66, nome: "Fagnar" },
    ];
  }

  getAlunoById(id) {
    for (let aluno of this.alunos) {
      if (aluno.id == id) {
        return aluno;
      }
    }

    return "Aluno not found 404!";
  }

  getProfById(id) {
    for (let prof of this.profs) {
      if (prof.id == id) return prof;
    }

    return "Prof not found 404!";
  }

  cadastrarAluno(data){
    this.alunos.push(data);
  }

  atualizarAluno(data) {
  for (let aluno of this.alunos) {
    if (aluno.id == data.id) {
      aluno.nome = data.nome;
      return 1; // encontrou e atualizou
    }
  }

  return 0; // não encontrou
}
}
