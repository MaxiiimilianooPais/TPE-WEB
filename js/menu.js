document.querySelector(".btn_menu").addEventListener("click", abrirMenu);
document.querySelector("#cerrar").addEventListener("click",cerrarMenu)

function abrirMenu() {
    document.querySelector(".navigation").classList.toggle("show");

}

function cerrarMenu(){
    document.querySelector(".navigation").classList.remove("show");
}