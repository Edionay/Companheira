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
    let nome = document.getElementById("nome_do_discente").innerText;
    let matricula = document.getElementById("matricula");
    let curso = document.getElementById("curso");
    let email = document.getElementById("email");
    let telefone1 = document.getElementById("telefone_1");
    let telefone2 = document.getElementById("telefone_2");

    // Insert a row in the table at row index 0
    let novoDiscente = tabelaDeDiscentes.insertRow(1);

    // Insert a cell in the row at index 0
    let campo1 = novoDiscente.insertCell(0);


    // Append a text node to the cell
    let teste = document.createTextNode(nome);
    campo1.appendChild(teste);


}

