import express from "express";
import cors from "cors";
import {
  getAlunoById,
  getAlunos,
  getPadrao,
  getProfs,
  getTecnicos,
  getProfById,
  cadastrarAluno,
  atualizarAluno,
} from "./endpoints.js";

const server = express();
const PORT = 8080;

server.use(cors());
server.use(express.json());

//Rotas
server.get("/", getPadrao);
server.get("/alunos", getAlunos);
server.get("/aluno", getAlunoById);
server.get("/profs", getProfs);
server.get("/prof/:id", getProfById);
server.get("/tecnicos", getTecnicos);

server.post("/cadastro", cadastrarAluno);
server.put("/atualizar", atualizarAluno);

server.listen(PORT, () => console.log("Server ON ..."));
