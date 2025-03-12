document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none"; // 🔹 Asegura que estén ocultos al iniciar
    });

    document.querySelectorAll(".abrir-modal").forEach(boton => {
        boton.addEventListener("click", function () {
            let modalId = this.getAttribute("data-modal");
            let modal = document.getElementById(modalId);
            if (modal) modal.style.display = "flex";
        });
    });

    document.querySelectorAll(".close").forEach(boton => {
        boton.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        document.querySelectorAll(".modal").forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
