
/* Alterar a visibilidade configurações de lembretes, ou seja, tornar visível quando clicado sobre a opção lembrete, botão adicionar ou cancelar e 
tornar não visível quando clicado novamente sobre eles */
function alteraVisibilidadeAdicionarUmLembrete() {

    let adicionarTarefaOpcoesLembreteDescricaoImg = document.querySelector(".adicionar-tarefa__opcoes__descricao-img");
    adicionarTarefaOpcoesLembreteDescricaoImg.addEventListener("click", () => {

        let adicionarTarefaOpcoesLembreteContener = document.querySelector(".adicionar-tarefa__opcoes__lembrete__contener");
        adicionarTarefaOpcoesLembreteContener.style.display = "block";

        let adicionarTarefaOpcoesLembreteConfiguracoes = document.querySelector(".adicionar-tarefa__opcoes__lembrete__configuracoes");
        adicionarTarefaOpcoesLembreteConfiguracoes.style.display = "block";
    });

    let opcoesLembreteConfiguracoesContenerAdicionar = document.querySelector(".adicionar-tarefa__opcoes__lembrete__adicionar");
    opcoesLembreteConfiguracoesContenerAdicionar.addEventListener("click", () => {

        let adicionarTarefaOpcoesLembreteOpacity = document.querySelector(".adicionar-tarefa__opcoes__lembrete__contener");
        adicionarTarefaOpcoesLembreteOpacity.style.display = "none";

        let adicionarTarefaOpcoesLembreteConfiguracoes = document.querySelector(".adicionar-tarefa__opcoes__lembrete__configuracoes");
        adicionarTarefaOpcoesLembreteConfiguracoes.style.display = "none";

        criacaoEGerenciamentoLembretes();
    });

    let opcoesLembreteConfiguracoesContenerCancelar = document.querySelector(".adicionar-tarefa__opcoes__lembrete__cancelar");
    opcoesLembreteConfiguracoesContenerCancelar.addEventListener("click", () => {

        let adicionarTarefaOpcoesLembreteOpacity = document.querySelector(".adicionar-tarefa__opcoes__lembrete__contener");
        adicionarTarefaOpcoesLembreteOpacity.style.display = "none";

        let adicionarTarefaOpcoesLembreteConfiguracoes = document.querySelector(".adicionar-tarefa__opcoes__lembrete__configuracoes");
        adicionarTarefaOpcoesLembreteConfiguracoes.style.display = "none";
    });
}
alteraVisibilidadeAdicionarUmLembrete();


/*  Alterar a hora, ou seja, quando clicado sobre o ícone seta para acima, ocorre um aumento de 1 hora a mais */
function alterarQuandoClicadoSetaAcimaValorInputHoras() {

    let opcoesLembreteSetaAcimaHoras = document.querySelector(".adicionar-tarefa__opcoes__lembrete__seta-acima-horas");
    opcoesLembreteSetaAcimaHoras.addEventListener("click", () => {

        let opcoesLembreteInputHora = document.querySelector(".adicionar-tarefa__opcoes__lembrete__input-hora");
        let valorInputHora = opcoesLembreteInputHora.value;

        let alteracaoParaNumero = parseInt(valorInputHora);
        let alterarValorInputHora = alteracaoParaNumero + 1;

        if(alterarValorInputHora > "23" ) {
            
            opcoesLembreteInputHora.value = "0";
        }
        else {
            opcoesLembreteInputHora.value = alterarValorInputHora;
        }
    });
}
alterarQuandoClicadoSetaAcimaValorInputHoras();


/*  Alterar a hora, ou seja, quando clicado sobre o ícone seta para baixo, ocorre uma diminuição de 1 hora a menos */
function alterarQuandoClicadoSetaAbaixaValorInputHoras() {

    let opcoesLembreteSetaAbaixaHoras = document.querySelector(".adicionar-tarefa__opcoes__lembrete__seta-abaixa-horas");
    opcoesLembreteSetaAbaixaHoras.addEventListener("click", () => {

        let opcoesLembreteInputHora = document.querySelector(".adicionar-tarefa__opcoes__lembrete__input-hora");
        let valorInputHora = opcoesLembreteInputHora.value;

        let alteracaoParaNumero = parseInt(valorInputHora);
        let alterarValorInputHora = alteracaoParaNumero - 1;


        if(alterarValorInputHora < "0") {
            
            opcoesLembreteInputHora.value = "23";
        }
        else {
            opcoesLembreteInputHora.value = alterarValorInputHora;
        }
    });
}
alterarQuandoClicadoSetaAbaixaValorInputHoras();


/* Alterar os minutos, ou seja, quando clicado sobre o ícone seta para acima, ocorre um aumento de 1 minutos a mais */
function alterarQuandoClicadoSetaAcimaValorInputMinutos() {

    let opcoesLembreteSetaAcimaMinutos = document.querySelector(".adicionar-tarefa__opcoes__lembrete__seta-acima-minutos");
    opcoesLembreteSetaAcimaMinutos.addEventListener("click", () => {

        let opcoesLembreteInputMinuto = document.querySelector(".adicionar-tarefa__opcoes__lembrete__input-minuto");
        let valorInputMinuto = opcoesLembreteInputMinuto.value;

        let alteracaoParaNumero = parseInt(valorInputMinuto);
        let alterarValorInputMinuto = alteracaoParaNumero + 1;
     
        if(alterarValorInputMinuto < "0") {
            
            opcoesLembreteInputMinuto.value = "59";
        }
        else {
            opcoesLembreteInputMinuto.value = alterarValorInputMinuto;
        }

        if(alterarValorInputMinuto > "59" ) {
            
            opcoesLembreteInputMinuto.value = "0";
        }
        else {
            opcoesLembreteInputMinuto.value = alterarValorInputMinuto;
        }
    });
}
alterarQuandoClicadoSetaAcimaValorInputMinutos();


/* Alterar os minutos, ou seja, quando clicado sobre o ícone seta para baixo, ocorre uma diminuição de 1 minutos a menos */
function alterarQuandoClicadoSetaAbaixaValorInputMinutos() {

    let opcoesLembreteSetaAbaixaMinutos = document.querySelector(".adicionar-tarefa__opcoes__lembrete__seta-abaixa-minutos");
    opcoesLembreteSetaAbaixaMinutos.addEventListener("click", () => {

        let opcoesLembreteInputMinuto = document.querySelector(".adicionar-tarefa__opcoes__lembrete__input-minuto");
        let valorInputMinuto = opcoesLembreteInputMinuto.value;

        let alteracaoParaNumero = parseInt(valorInputMinuto);
        let alterarValorInputMinuto = alteracaoParaNumero - 1;

        if(alterarValorInputMinuto > "59" ) {
            
            opcoesLembreteInputMinuto.value = "0";
        }
        else {
            opcoesLembreteInputMinuto.value = alterarValorInputMinuto;
        }

        if(alterarValorInputMinuto < "0" ) {
            
            opcoesLembreteInputMinuto.value = "59";
        }
        else {
            opcoesLembreteInputMinuto.value = alterarValorInputMinuto;
        }
    });
}
alterarQuandoClicadoSetaAbaixaValorInputMinutos();

