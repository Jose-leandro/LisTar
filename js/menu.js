function visibilidadeDoMenu() {
    let menuItemImg = document.querySelector(".menu__item__menu");

    menuItemImg.addEventListener("click", () => {

        let menuOpcao = document.querySelector(".menu__opcao");
        let menuOpcaoVisibility = document.querySelector(".menu__opcao--visibility");

        menuOpcao.style.visibility = "visible";
        menuOpcao.classList.add("menu__opcao--visibility")


        if (menuOpcaoVisibility.classList.contains("menu__opcao--visibility")) {
           
            menuOpcaoVisibility.classList.add("menu__opcao")
            menuOpcao.classList.remove("menu__opcao--visibility")
            menuOpcao.style.visibility = "hidden";
        }
    })
}
visibilidadeDoMenu();
