
const button = document.querySelector("button");
const spans = document.querySelectorAll(".span");


class Aluno {
    constructor(nome, turma, idade) {
      this.nome = nome;
      this.turma= turma;
      this.idade = idade;
    }
  

        exibirAluno() {
            spans[0].innerText = this.nome;
            spans[1].innerText = this.turma;
            spans[2].innerText = this.idade;
          }
        }

let alunosCadastrados = []; // Array para armazenar os alunos cadastrados
     
button.addEventListener("click", () => {
 const nome = document.getElementById("nomeAluno").value;
   const turma = document.getElementById("turmaAluno").value;
    const idade = document.getElementById("idadeAluno").value;
  
            const alunoNV = new Aluno(nome,turma,idade);
            //apagar embaixo
            alunosCadastrados.push(alunoNV); 
           
            alunoNV.exibirAluno();

            
// Limpar os campos de input após adicionar o aluno
  document.getElementById("nomeAluno").value = "";
  document.getElementById("turmaAluno").value = "";
  document.getElementById("idadeAluno").value = "";



    const resultadoDiv = document.getElementById("resultado");
 
    resultadoDiv.innerHTML = "";
    if(idade >= 14){
        resultadoDiv.textContent = "* Apto para aulas extras com foco no Vestibular"
    }
    


   
     

//apgar
 // Exibir a lista de alunos cadastrados
 const listaDiv = document.getElementById("listaAlunos");
 listaDiv.innerHTML = ""; // Limpa a lista antes de adicionar os alunos
 alunosCadastrados.forEach((aluno, index) => {
   const alunoItem = document.createElement("p");
   alunoItem.textContent = `${index + 1}. ${aluno.nome} - ${aluno.turma} - ${aluno.idade} anos`;
   listaDiv.appendChild(alunoItem);
 });
});


// EDITAR INFO

