
/* Alterar a visibilidade dos campos opcionais relacionado a adição de tarefas, ou seja, tornar visível quando clicado sobre o ícone de três pontos e 
tornar não visível quando clicado novamente */
function visibilidadeCamposOpcionaiAdicionarTarefas() {
    let adicionarTarefaOpcoesTresPontos = document.querySelector(".adicionar-tarefa__contener__img-pontos");

    adicionarTarefaOpcoesTresPontos.addEventListener("click", () => {

        let adicionarTarefaOpcoesDisplay = document.querySelector(".adicionar-tarefa__opcoes__contener");
        let adicionarTarefaOpcoesFlex = document.querySelector(".adicionar-tarefa__opcoes--flex");

        adicionarTarefaOpcoesDisplay.style.display = "flex";
        adicionarTarefaOpcoesDisplay.classList.add("adicionar-tarefa__opcoes--flex");

        if (adicionarTarefaOpcoesFlex.classList.contains("adicionar-tarefa__opcoes--flex")) {

            adicionarTarefaOpcoesFlex.classList.add("adicionar-tarefa__opcoes__contener");
            adicionarTarefaOpcoesDisplay.classList.remove("adicionar-tarefa__opcoes--flex");
            adicionarTarefaOpcoesDisplay.style.display = "none";
        }
    });
}
visibilidadeCamposOpcionaiAdicionarTarefas();