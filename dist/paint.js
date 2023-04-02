const form = document.getElementById('#formulario');

formulario.addEventListener("submit", validFormulario)


function validFormulario(e){
const usuario = document.querySelector(`#Usuario`).value;
const nombre = document.querySelector(`#nombre`).value;
const apellido = document.querySelector(`#apellido`).value;
const correo = document.querySelector(`#correo`).value;
const telefono = document.querySelector(`#telefono`).value;
const mensaje = document.querySelector(`#fm_contact`).value;

const respuesta = document.getElementById(`respuesta`);
respuesta.textContent = `Hola ${usuario}, tu nombre es ${nombre}, tu apellido es ${apellido},
tu correo es ${correo}, tu telefono es ${telefono} y tu mensaje es ${mensaje}`
}