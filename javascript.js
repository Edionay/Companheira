/**
 * Created by edion on 28/05/2017.
 */


function botaoExcluirClicado(idDaLinha) {
    const tabelaDeTarefas = document.getElementById("tabela-de-tarefas");
    const linhaASerApagada = document.getElementById(idDaLinha);
    if (window.confirm("Deseja apagar a linha selecionada?")) {
        tabelaDeTarefas.deleteRow(linhaASerApagada.rowIndex);
    }
}

function incluirDiscente() {
    // Get a reference to the table
    let tabelaDeDiscentes = document.getElementById("tabela-de-discentes");
    let nome = document.getElementById("nome_do_discente");
    let matricula = document.getElementById("matricula");
    let curso = document.getElementById("curso");
    let email = document.getElementById("email");
    let telefone1 = document.getElementById("telefone_1");
    let telefone2 = document.getElementById("telefone_2");

    // Insert a row in the table at row index 0
    let novoDiscente = tabelaDeDiscentes.insertRow(1);

    // Insert a cell in the row at index 0
    let campo1 = novoDiscente.insertCell(0);
    let campo2 = novoDiscente.insertCell(0);
    let campo3 = novoDiscente.insertCell(0);
    let campo4 = novoDiscente.insertCell(0);
    let campo5 = novoDiscente.insertCell(0);
    let campo6 = novoDiscente.insertCell(0);


    // Append a text node to the cell
    campo1.appendChild(document.createTextNode(nome.value));
    campo2.appendChild(document.createTextNode(matricula.value));
    campo3.appendChild(document.createTextNode(curso.value));
    campo4.appendChild(document.createTextNode(email.value));
    campo5.appendChild(document.createTextNode(telefone1.value));
    campo6.appendChild(document.createTextNode(telefone2.value));



}

