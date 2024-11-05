
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

        button.addEventListener("click", () => {

      const nome = document.getElementById("nomeAluno").value;
   const turma = document.getElementById("turmaAluno").value;
    const idade = document.getElementById("idadeAluno").value;
  
            const alunoNV = new Aluno(nome,turma,idade);
            
            alunoNV.exibirAluno();
          
           

//excluir if e else se der merda
    const resultadoDiv = document.getElementById("resultado");
 
    resultadoDiv.innerHTML = "";
    if(idade >= 14){
        resultadoDiv.textContent = "* Apto para aulas extras com foco no Vestibular"
    }
    

    //excluir se der merda
   
});      


