document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav a");
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
        let top = section.offsetTop - 50;
        let height = section.clientHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            document.querySelector(`nav a[href="#${section.id}"]`).classList.add("active");
        }
    });
});
function abrirDetalles() {
    document.getElementById("modal").style.display = "flex";
}

function cerrarDetalles() {
    document.getElementById("modal").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    // Modal Avioncito
    const modalAvion = document.getElementById("modal");
    const btnAvion = document.getElementById("verMas");
    const cerrarAvion = document.getElementsByClassName("cerrar")[0];

    btnAvion.onclick = function() {
        modalAvion.style.display = "block";
    }

    cerrarAvion.onclick = function() {
        modalAvion.style.display = "none";
    }

});
    
function abrirDetallesCalculadora() {
    document.getElementById("modalCalculadora").style.display = "block";
}

function cerrarDetallesCalculadora() {
    document.getElementById("modalCalculadora").style.display = "none";
}

// Para cerrar el modal si se hace clic afuera de la ventana
window.onclick = function(event) {
    const modalCalculadora = document.getElementById("modalCalculadora");
    if (event.target === modalCalculadora) {
        modalCalculadora.style.display = "none";
    }
};

// Función para abrir el modal
function abrirDetallesProyecto() {
    document.getElementById("modalProyecto").style.display = "block";
}

// Función para cerrar el modal
function cerrarDetallesProyecto() {
    document.getElementById("modalProyecto").style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function (event) {
    let modal = document.getElementById("modalProyecto");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
