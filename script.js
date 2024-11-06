

// PARYTE COM EXCLUIR E EDITAR

const button = document.querySelector("#cadastrarbotao");  
const spans = document.querySelectorAll(".span");

class Aluno {
    constructor(nome, turma, idade) {
        this.nome = nome;
        this.turma = turma;
        this.idade = idade;
    }

    
    exibirAluno() {
        spans[0].innerText = this.nome;
        spans[1].innerText = this.turma;
        spans[2].innerText = this.idade;
    }
}

let alunosCadastrados = []; 
let alunoEditandoIndex = null; // Variável para armazenar o índice do aluno a ser editado

button.addEventListener("click", () => {
    const nome = document.getElementById("nomeAluno").value;
    const turma = document.getElementById("turmaAluno").value;
    const idade = document.getElementById("idadeAluno").value;

    if (alunoEditandoIndex === null) {
       
        const alunoNV = new Aluno(nome, turma, idade);
        alunosCadastrados.push(alunoNV); // Adiciona o aluno ao array
    } else {
      
        alunosCadastrados[alunoEditandoIndex].nome = nome;
        alunosCadastrados[alunoEditandoIndex].turma = turma;
        alunosCadastrados[alunoEditandoIndex].idade = idade;
        alunoEditandoIndex = null; 
    }

    
    document.getElementById("nomeAluno").value = "";
    document.getElementById("turmaAluno").value = "";
    document.getElementById("idadeAluno").value = "";

    
    exibirListaAlunos();
    exibirResultado();
});


function exibirResultado() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";  // Limpar o conteúdo do resultado

   
    const aluno = alunosCadastrados[alunosCadastrados.length - 1]; // Último aluno
    if (aluno) {
        const aptoTexto = aluno.idade >= 14 ? "* Apto para aulas extras com foco no Vestibular" : "";
        resultadoDiv.innerHTML = `
            <label>Nome: ${aluno.nome}</label><br>
            <label>Turma: ${aluno.turma}</label><br>
            <label>Idade: ${aluno.idade} anos</label><br>
            <div>${aptoTexto}</div>
        `;
    }
}

// Função para exibir a lista de alunos cadastrados
function exibirListaAlunos() {
    const listaDiv = document.getElementById("listaAlunos");
    listaDiv.innerHTML = ""; // Limpa a lista antes de adicionar os alunos

    alunosCadastrados.forEach((aluno, index) => {
        const alunoItem = document.createElement("p");
        alunoItem.textContent = `${index + 1}. ${aluno.nome} - ${aluno.turma} - ${aluno.idade} anos`;

        // Botão de excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => excluirAluno(index)); // Passa o índice para a função

        // Botão de editar
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.addEventListener("click", () => editarAluno(index)); // Passa o índice para a função

        // Adiciona os botões de editar e excluir ao item
        alunoItem.appendChild(btnExcluir);
        alunoItem.appendChild(btnEditar);

     
        listaDiv.appendChild(alunoItem);
    });
}

// Função para excluir um aluno do array
function excluirAluno(index) {
    // Remove o aluno do array pelo índice
    alunosCadastrados.splice(index, 1);


    exibirListaAlunos();

    
    if (alunosCadastrados.length > 0) {
        exibirResultado();
    } else {
        // Caso a lista esteja vazia, limpa o conteúdo de resultado
        document.getElementById("resultado").innerHTML = "";
    }
}

// Função para editar um aluno do array
function editarAluno(index) {
   
    alunoEditandoIndex = index;

    // Preenche os campos de cadastro com as informações do aluno a ser editado
    const aluno = alunosCadastrados[index];
    document.getElementById("nomeAluno").value = aluno.nome;
    document.getElementById("turmaAluno").value = aluno.turma;
    document.getElementById("idadeAluno").value = aluno.idade;
}
