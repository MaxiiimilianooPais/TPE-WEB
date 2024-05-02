"use s"
// Generar un código de captcha aleatorio
function generarCaptcha() {
  let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let longitud = 6;
  let captcha = '';
  for (var i = 0; i < longitud; i++) {
    captcha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return captcha;
}

// Mostrar el captcha generado
function mostrarCaptcha() {
  let captchaText = generarCaptcha();
  let captchaElement = document.querySelector('.captcha');
  captchaElement.textContent = captchaText;
}

// Validar el captcha ingresado
function validarCaptcha() {
  let captchaGenerado = document.querySelector('.captcha').textContent;
  let captchaIngresado = document.querySelector('.input-area').value.trim();

  if (captchaIngresado == captchaGenerado) {
    document.querySelector('.status-captcha').innerHTML = 'Captcha válido';
  } else {
    document.querySelector('.status-captcha').innerHTML = 'Captcha inválido. Inténtelo de nuevo.';
  }
}

// Recargar el captcha
function recargarCaptcha() {
  mostrarCaptcha();
  document.querySelector('.status-captcha').innerHTML = ' ';
  document.querySelector('.input-area').value = '';
}

// Eventos
document.querySelector('.reload-btn').addEventListener('click', recargarCaptcha);
document.querySelector('.check-btn').addEventListener('click', validarCaptcha);

// Mostrar el captcha al cargar la página
mostrarCaptcha();

