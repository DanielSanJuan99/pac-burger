/**FORMULARIO */

document.addEventListener("DOMContentLoaded", () => {

    const formularioRegistro = document.getElementById("formRegistro");

    formularioRegistro.addEventListener("submit", (event) => {
        event.preventDefault()

        if (validarFormulario()) {
            const datos = new FormData(formularioRegistro);
            const usuario = {
                nombre: datos.get("registro-nombre"),
                email: datos.get("registro-email"),
                password: datos.get("registro-password")
            }

            // Aquí podrías enviar los datos al servidor o procesarlos como necesites
            console.log("Usuario registrado:", usuario)
            alert("Registro exitoso")
            formularioRegistro.reset()
        }
    })

})

function validarFormulario() {
    let esValido = true

    esValido &= validarCampoVacio("registro-nombre")
    esValido &= validarEmail("registro-email")
    esValido &= validarPassword("registro-email, validar-password")

    return esValido
}

function validarCampoVacio(campoId) {
    const campo = document.getElementById(campoId)

    if (campo.value.trim() === "") {
        campo.classList.add("is-invalid")
        return false
    } else {
        campo.classList.remove("is-invalid")
        campo.classList.add("is-valid")
        return true
    }
}

function validarEmail(campoId) {
    const campo = document.getElementById(campoId)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(campo.value.trim())) {
        campo.classList.add("is-invalid")
        return false
    } else {
        campo.classList.remove("is-invalid")
        campo.classList.add("is-valid")
        return true
    }
}

function validarPassword(campoId, confirmarId) {
    const campo = document.getElementById(campoId)
    const password = campo.value.trim()
    const confirm = document.getElementById(confirmarId)

    let valido = true

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        campo.classList.add("is-invalid")
        valido = false
    } else {
        campo.classList.remove("is-invalid")
        campo.classList.add("is-valid")
        valido = true
    }

    if (password.value !== confirm.value || confirm.value === "") {
        confirm.classList.add("is-invalid")
        valido = false
    } else {
        confirm.classList.remove("is-invalid")
        confirm.classList.add("is-valid")
    }

    return valido

}