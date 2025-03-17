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
class P2Element extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <center>
            <div class="button-container">
                <form id="form" action="https://formsubmit.co/jestcoam@gmail.com" method="POST">  
                    <p class="ppp1">Send a direct message to email</p>
                    <input id="nombre" type="text" name="nombre" placeholder="What is your name?" required>
                    <input id="nombre" type="text" name="para?" placeholder="What is it for?" required>
                    <br>
                    <br>
                    <button class="contacto" id="yesButton" type="submit">Send</button>

                    <input type="hidden" name="_captcha" value="false">

                    <input type="hidden" id="deviceInfo" name="deviceInfo"> <!-- Hidden field for device information -->
                </form>
            </div>
        </center>
        `;

        // Obtener referencias a los botones y formulario
        this.form = this.querySelector('#form');
        this.yesButton = this.querySelector('#yesButton');
        this.noButton = this.querySelector('#noButton');
        this.deviceInfoInput = this.querySelector('#deviceInfo'); // Campo oculto para la información del dispositivo

        // Tamaño inicial del botón "Sí"
        this.yesButtonSize = 16;

        // Añadir la información del dispositivo en el campo oculto
        this.setDeviceInfo();

        // Evento para el botón "No"
        this.noButton.addEventListener('click', () => {
            this.swapButtons();
            this.enlargeYesButton();
        });

        // Evento para el envío del formulario
        this.form.addEventListener('submit', (event) => {
            this.handleFormSubmit(event);
        });
    }

    swapButtons() {
        const parent = this.yesButton.parentNode;
        const yesButtonIndex = Array.from(parent.children).indexOf(this.yesButton);
        const noButtonIndex = Array.from(parent.children).indexOf(this.noButton);

        if (yesButtonIndex < noButtonIndex) {
            parent.insertBefore(this.noButton, this.yesButton);
        } else {
            parent.insertBefore(this.yesButton, this.noButton);
        }
    }

    enlargeYesButton() {
        this.yesButtonSize += 2;
        this.yesButton.style.fontSize = this.yesButtonSize + 'px';
    }

    handleFormSubmit(event) {
        event.preventDefault(); // Evita la recarga de la página
        this.noButton.style.display = 'none'; // Oculta el botón "No"
        this.yesButton.textContent = 'Cargando...'; // Cambia el texto del botón "Sí"
        this.yesButton.style.backgroundColor = 'red'; // Cambia el color del botón
    
        // Obtener los datos del formulario
        const formData = new FormData(this.form);
    
        // Enviar los datos de forma asíncrona con fetch()
        fetch(this.form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                this.yesButton.textContent = 'Enviado ✔'; // Cambiar texto al enviar con éxito
                this.yesButton.style.backgroundColor = 'green'; // Color verde para indicar éxito
                this.form.reset(); // Limpiar el formulario después del envío
            } else {
                throw new Error('Error al enviar');
            }
        })
        .catch(error => {
            this.yesButton.textContent = 'Error ❌'; // Indicar error
            this.yesButton.style.backgroundColor = 'darkred';
        });
    
        return false; // Evita cualquier comportamiento por defecto
    }

    setDeviceInfo() {
        // Obtener información del dispositivo utilizando platform.js
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const device = platform.name || "Desconocido"; // Usar la propiedad 'name' de platform.js

        // Guardar la información en el campo oculto
        this.deviceInfoInput.value = `User Agent: ${userAgent}, Platform: ${platform}, Device: ${device}`;
    }
}

customElements.define("p2-element", P2Element);