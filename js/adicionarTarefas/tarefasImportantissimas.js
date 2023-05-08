/* Ocultar opções de priorização da tarefa, ou seja, tornar não visível o menu para seleção da priorização da tarefa */
function oclutarOpcoesPrioridade() {

    let adicionaTarefaOpcoesContenerPriorizacao = document.querySelector(".adicionar-tarefa__opcoes__contener__priorizacao");
    adicionaTarefaOpcoesContenerPriorizacao.style. visibility = "hidden";

    let adicionarTarefaOpcoesPrioridade = document.querySelector(".adicionar-tarefa__opcoes__prioridade");
    adicionarTarefaOpcoesPrioridade.style.position = "";
    adicionarTarefaOpcoesPrioridade.style.padding = "";
    adicionarTarefaOpcoesPrioridade.style.top = "";
    adicionarTarefaOpcoesPrioridade.style.height = "";
    adicionarTarefaOpcoesPrioridade.style.background = "";
    adicionarTarefaOpcoesPrioridade.style.left = "";
    adicionarTarefaOpcoesPrioridade.style.justifyContent = "space-evenly";
    adicionarTarefaOpcoesPrioridade.style.width = "";

    let adicionarTarefaOpcoesDisplay = document.querySelector(".adicionar-tarefa__opcoes__contener");
    adicionarTarefaOpcoesDisplay.style.justifyContent = "space-between";
    adicionarTarefaOpcoesDisplay.style.width = "";

    let adicionarTarefaOpcoesVencimento = document.querySelector(".adicionar-tarefa__opcoes__vencimento");
    adicionarTarefaOpcoesVencimento.style.marginRight = "";

    try {

        adicionarTarefaOpcoesPrioridade.classList.remove("adicionar-tarefa__opcoes__visivelImportante");
        adicionarTarefaOpcoesPrioridade.classList.remove("adicionar-tarefa__opcoes__nao-importante")
     } catch (error) {
         console.log("erro ao remover a class - adicionar-tarefa__opcoes__visivelImportante Ou adicionar-tarefaInput__opcoes__prioridade__naoImportante");
     }
}


/* Visível menu de opções de priorização da tarefa, ou seja, tornar visível o menu para a seleção da priorização */
function visibilidadeOpcaoImportantissimo() {

    let adicionaTarefaOpcoesContenerPriorizacao = document.querySelector(".adicionar-tarefa__opcoes__contener__priorizacao");
    adicionaTarefaOpcoesContenerPriorizacao.style.visibility = "visible";

    let larguraDoDispositivo = window.screen.width;

    if(larguraDoDispositivo < 468) {

        let adicionarTarefaOpcoesPrioridade = document.querySelector(".adicionar-tarefa__opcoes__prioridade");
        adicionarTarefaOpcoesPrioridade.style.left = "5%";
        adicionarTarefaOpcoesPrioridade.style.padding = "10px 25px";
        adicionarTarefaOpcoesPrioridade.style.position = "absolute";
        adicionarTarefaOpcoesPrioridade.style.top = "25%";
    }

    let adicionarTarefaOpcoesPrioridade = document.querySelector(".adicionar-tarefa__opcoes__prioridade");
    adicionarTarefaOpcoesPrioridade.style.alignItems = "center";
    adicionarTarefaOpcoesPrioridade.style.background = "#1a19198c";
    adicionarTarefaOpcoesPrioridade.style.height = "220px";
    adicionarTarefaOpcoesPrioridade.style.left = "34%";
    adicionarTarefaOpcoesPrioridade.style.padding = "10px 40px";
    adicionarTarefaOpcoesPrioridade.style.position = "absolute";
    adicionarTarefaOpcoesPrioridade.style.top = "14%";

    let adicionarTarefaInputOpcoesDisplay = document.querySelector(".adicionar-tarefa__opcoes__contener");
    adicionarTarefaInputOpcoesDisplay.style.justifyContent = "space-between";
    adicionarTarefaInputOpcoesDisplay.style.width = "78%";

    let adicionarTarefaInputOpcoesVencimento = document.querySelector(".adicionar-tarefa__opcoes__vencimento");
    adicionarTarefaInputOpcoesVencimento.style.marginRight = "2em";

    let adicionarTarefaInputOpcoesPrioridadeImportantissimo = document.querySelector(".adicionar-tarefa__opcoes__importantissimo");
    adicionarTarefaInputOpcoesPrioridadeImportantissimo.style.display = "flex"

    let adicionarTarefaInputOpcoesPrioridadeImportante = document.querySelector(".adicionar-tarefa__opcoes__importante");
    adicionarTarefaInputOpcoesPrioridadeImportante.style.display = "flex";

    let adicionarTarefaInputOpcoesPrioridadeNaoImportante = document.querySelector(".adicionar-tarefa__opcoes__nao-importante");
    adicionarTarefaInputOpcoesPrioridadeNaoImportante.style.display = "flex";
}



/* Ocultar priorização que não estão relacionados a importantíssima, ou seja, tornar não visível as priorizações importante e não importante */
function oclutarOpcoesPrioridadeImportantissimo() {

    let adicionarTarefaInputOpcoesPrioridadeImportantissimo = document.querySelector(".adicionar-tarefa__opcoes__importantissimo");
    adicionarTarefaInputOpcoesPrioridadeImportantissimo.style.display = "flex"

    let adicionarTarefaInputOpcoesPrioridadeImportante = document.querySelector(".adicionar-tarefa__opcoes__importante");
    adicionarTarefaInputOpcoesPrioridadeImportante.style.display = "none";

    let adicionarTarefaInputOpcoesPrioridadeNaoImportante = document.querySelector(".adicionar-tarefa__opcoes__nao-importante");
    adicionarTarefaInputOpcoesPrioridadeNaoImportante.style.display = "none";
}


/* Alterar a visibilidade do menu de priorização e seleção da prioridade da tarefa, 
ou seja, quando for selecionar a opção importantíssima ocultara o menu e quando clicado novamente tornara visível o menu  */
function alteracaoVisibilidadeOcoesPrioridadeESelecaoTarefaImportantissima() {

    let adicionarTarefaInputOpcoesPrioridadeImportantissimo = document.querySelector(".adicionar-tarefa__opcoes__importantissimo");

    adicionarTarefaInputOpcoesPrioridadeImportantissimo.addEventListener("click", () => {

        let adicionarTarefaOpcoesPrioridade = document.querySelector(".adicionar-tarefa__opcoes__prioridade");
        let adicionarTarefaOpcoesVisivelImportantissima = document.querySelector(".adicionar-tarefa__opcoes__visivelImportantissima");

        visibilidadeOpcaoImportantissimo();

        adicionarTarefaOpcoesPrioridade.classList.add("adicionar-tarefa__opcoes__visivelImportantissima");

        if (adicionarTarefaOpcoesVisivelImportantissima.classList.contains("adicionar-tarefa__opcoes__visivelImportantissima")) {

            adicionarTarefaOpcoesVisivelImportantissima.classList.add("adicionar-tarefa__opcoes__prioridade");
            adicionarTarefaOpcoesPrioridade.classList.remove("adicionar-tarefa__opcoes__visivelImportantissima");

            oclutarOpcoesPrioridade();
            oclutarOpcoesPrioridadeImportantissimo();
        }
    })
}
alteracaoVisibilidadeOcoesPrioridadeESelecaoTarefaImportantissima();

/* Tonara visível o ícone de selecionado da priorização, ou seja, quando clicado sobre a opção importantíssima tornara visível o ícone de selecionado  */
function visibilidadeOpcoesPrioridadeImportantissimoImagem() {
    let adicionarTarefaInputOpcoesPrioridadeImportantissimo = document.querySelector(".adicionar-tarefa__opcoes__importantissimo");

    adicionarTarefaInputOpcoesPrioridadeImportantissimo.addEventListener("click", () => {

        let adicionarTarefaInputOpcoesPrioridadeImportantissimoImgSelecionado = document.querySelector(".adicionar-tarefa__opcoes__importantissimo__img-selecionado");
        adicionarTarefaInputOpcoesPrioridadeImportantissimoImgSelecionado.style.visibility = "visible";

        let adicionarTarefaInputOpcoesPrioridadeImportanteImgSelecionado = document.querySelector(".adicionar-tarefa__opcoes__importante__img-selecionado");
        adicionarTarefaInputOpcoesPrioridadeImportanteImgSelecionado.style.visibility = "hidden";

        let adicionarTarefaInputOpcoesPrioridadeNaoImportanteImgSelecionado = document.querySelector(".adicionar-tarefa__opcoes__nao-importante__img-selecionado");
        adicionarTarefaInputOpcoesPrioridadeNaoImportanteImgSelecionado.style.visibility = "hidden";
    });
}
visibilidadeOpcoesPrioridadeImportantissimoImagem();
