
/* Ocultar opções de priorização da tarefa, ou seja, tornar não visível o menu para seleção da priorização da tarefa */
function oclutarOpcoesPrioridade() {

    let adicionaTarefaOpcoesContenerPriorizacao = document.querySelector(".adicionar-tarefa__opcoes__contener__priorizacao");
    adicionaTarefaOpcoesContenerPriorizacao.style.visibility = "hidden";

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
    adicionarTarefaOpcoesDisplay.style.width = "73%";

    let adicionarTarefaOpcoesVencimento = document.querySelector(".adicionar-tarefa__opcoes__vencimento");
    adicionarTarefaOpcoesVencimento.style.marginRight = "";

    try {

        adicionarTarefaOpcoesPrioridade.classList.remove("adicionar-tarefa__opcoes__visivelImportantissima");
        adicionarTarefaOpcoesPrioridade.classList.remove("adicionar-tarefa__opcoes__visivelImportante")
    } catch (error) {
        console.log("erro ao remover a class - adicionar-tarefa__opcoes__prioridade__visivelImportantissima Ou adicionar-tarefa__opcoes__prioridade__visivelImportante");
    }
}


/* Ocultar priorização que não estão relacionados a não importante, ou seja, tornar não visível as priorizações importantíssima e importante */
function oclutarOpcoesNaoImportante() {

    let adicionarTarefaOpcoesImportantissimo = document.querySelector(".adicionar-tarefa__opcoes__importantissimo");
    adicionarTarefaOpcoesImportantissimo.style.display = "none"

    let adicionarTarefaOpcoesImportante = document.querySelector(".adicionar-tarefa__opcoes__importante");
    adicionarTarefaOpcoesImportante.style.display = "none";

    let adicionarTarefaOpcoesNaoImportante = document.querySelector(".adicionar-tarefa__opcoes__nao-importante");
    adicionarTarefaOpcoesNaoImportante.style.display = "flex";
}

/* Visível menu de opções de priorização da tarefa, ou seja, tornar visível o menu para a seleção da priorização */
function visibilidadeOpcaoNaoImportante() {

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

    let adicionarTarefaOpcoesDisplay = document.querySelector(".adicionar-tarefa__opcoes__contener");
    adicionarTarefaOpcoesDisplay.style.justifyContent = "space-between";
    adicionarTarefaOpcoesDisplay.style.width = "78%";

    let adicionarTarefaOpcoesVencimento = document.querySelector(".adicionar-tarefa__opcoes__vencimento");
    adicionarTarefaOpcoesVencimento.style.marginRight = "2em";

    let adicionarTarefaOpcoesImportantissimo = document.querySelector(".adicionar-tarefa__opcoes__importantissimo");
    adicionarTarefaOpcoesImportantissimo.style.display = "flex"

    let adicionarTarefaOpcoesImportante = document.querySelector(".adicionar-tarefa__opcoes__importante");
    adicionarTarefaOpcoesImportante.style.display = "flex";

    let adicionarTarefaOpcoesNaoImportante = document.querySelector(".adicionar-tarefa__opcoes__nao-importante");
    adicionarTarefaOpcoesNaoImportante.style.display = "flex";
}

/* Alterar a visibilidade do menu de priorização e seleção da prioridade da tarefa, 
ou seja, quando for selecionar a opção não importante ocultara o menu e quando clicado novamente tornara visível o menu  */
function alteracaoVisibilidadeOcoesPrioridadeESelecaoTarefaNaoImportante() {

    let adicionarTarefaOpcoesNaoImportante = document.querySelector(".adicionar-tarefa__opcoes__nao-importante");

    adicionarTarefaOpcoesNaoImportante.addEventListener("click", () => {

        let adicionarTarefaOpcoesPrioridade = document.querySelector(".adicionar-tarefa__opcoes__prioridade");
        let adicionarTarefaOpcoesVisivelNaoImportante = document.querySelector(".adicionar-tarefa__opcoes__visivelNaoImportante");

        oclutarOpcoesPrioridade();
        oclutarOpcoesNaoImportante();

        adicionarTarefaOpcoesPrioridade.classList.add("adicionar-tarefa__opcoes__visivelNaoImportante");

        if (adicionarTarefaOpcoesVisivelNaoImportante.classList.contains("adicionar-tarefa__opcoes__visivelNaoImportante")) {

            adicionarTarefaOpcoesVisivelNaoImportante.classList.add("adicionar-tarefa__opcoes__prioridade");
            adicionarTarefaOpcoesPrioridade.classList.remove("adicionar-tarefa__opcoes__visivelNaoImportante");

            visibilidadeOpcaoNaoImportante();
        }
    })
}
alteracaoVisibilidadeOcoesPrioridadeESelecaoTarefaNaoImportante();


/* Tonara visível o ícone de selecionado da priorização, ou seja, quando clicado sobre a opção não importante tornara visível o ícone de selecionado */
function visibilidadeOpcoesNaoImportanteImagem() {
    let adicionarTarefaOpcoesNaoImportante = document.querySelector(".adicionar-tarefa__opcoes__nao-importante");

    adicionarTarefaOpcoesNaoImportante.addEventListener("click", () => {

        let adicionarTarefaOpcoesNaoImportanteImgSelecionado = document.querySelector(".adicionar-tarefa__opcoes__nao-importante__img-selecionado");
        adicionarTarefaOpcoesNaoImportanteImgSelecionado.style.visibility = "visible";

        let adicionarTarefaOpcoesImportantissimoImgSelecionado = document.querySelector(".adicionar-tarefa__opcoes__importantissimo__img-selecionado");
        adicionarTarefaOpcoesImportantissimoImgSelecionado.style.visibility = "hidden";

        let adicionarTarefaOpcoesImportanteImgSelecionado = document.querySelector(".adicionar-tarefa__opcoes__importante__img-selecionado");
        adicionarTarefaOpcoesImportanteImgSelecionado.style.visibility = "hidden";
    });
}
visibilidadeOpcoesNaoImportanteImagem();