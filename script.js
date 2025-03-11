document.addEventListener("DOMContentLoaded", function () {
    function abrirModal(idModal) {
        let modal = document.getElementById(idModal);
        if (modal) {
            modal.style.display = "block";
        }
    }

    function cerrarModal(idModal) {
        let modal = document.getElementById(idModal);
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Agregar eventos a los botones para abrir modales
    document.getElementById("video").addEventListener("click", function () {
        abrirModal("modal");
    });

    document.getElementById("videoCalculadora").addEventListener("click", function () {
        abrirModal("modalCalculadora");
    });

    document.getElementById("videoProyecto").addEventListener("click", function () {
        abrirModal("modalProyecto");
    });

    // Agregar eventos a los botones de cierre
    document.querySelectorAll(".close").forEach(function (btnCerrar) {
        btnCerrar.addEventListener("click", function () {
            let modal = this.closest(".modal");
            if (modal) {
                modal.style.display = "none";
            }
        });
    });

    // Cerrar el modal si el usuario hace clic fuera de él
    window.addEventListener("click", function (event) {
        document.querySelectorAll(".modal").forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
function toggleMusica() {
    let audio = document.getElementById("musicaFondo");
    let btn = document.getElementById("btnMusica");

    if (audio.paused) {
        audio.volume = 0.08; 
        audio.play();
        btn.innerHTML = "🔇 Silenciar Música";
    } else {
        audio.pause();
        btn.innerHTML = "🔊 Activar Música";
    }
}

