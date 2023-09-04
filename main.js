let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let registrar = document.getElementById("modal-button");
let bienvenida = document.getElementById("bienvenida");
let info = document.getElementById("info");
let retirar = document.getElementById("retirar");
let exitos = document.getElementById("exitos");
let premioEnviado = document.getElementById("premioEnviado");
let contraseña = document.getElementById("contraseña");
let noIngreso = document.getElementById("noIngreso");
let soporte = document.getElementById("soporte");
let demorasPago = document.getElementById("demorasPago");
let solicitoUsuario = document.getElementById("solicitoUsuario");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let ordenLlegada = document.getElementById("ordenLlegada");
let demorasCargas = document.getElementById("demorasCargas");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let inputNombre = document.getElementById("name").value;
  let inputCBU = document.getElementById("number").value;
  let inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `⚠️ *NO ENVIAR DINERO SIN CONSULTAR CBU SEGUNDOS ANTES* ⚠️
‼️( *LOS CBU CAMBIAN, PUEDE PERDER SU DINERO, QUEDA AVISADO* )‼️

🍀*DATOS DE LA CUENTA*
Nombre Completo: *${inputNombre}*
CBU: *${inputCBU}*
Alias: *${inputAlias}*

💰 *MÍNIMO DE CARGA $1.000* 💰

🍀*ENVIAR:*
♦️COMPROBANTE
♦️USUARIO de la PLATAFORMA

*INGRESÁ ACÁ PARA JUGAR:* https://casinocityvip.com`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;
  console.log(user);

  const texto = `🍀 *USUARIO REGISTRADO* 🍀
👤 *TU USUARIO:* ${user}
🔐 *CONTRASEÑA:* win123

🔹Agendá nuestro número para enterarte de todas las novedades en nuestros estados de WhatsApp🔹

*CONSULTÁ CBU PARA INGRESAR DINERO*⤵️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});

bienvenida.addEventListener("click", () => {
  const texto = `Te damos la bienvenida a...
🃏 *JOKER CLUB* 🃏
El mejor sitio de entretenimiento: https://casinocityvip.com 🎰

💸 *24HS ABIERTO* 💸
Contamos con muchos juegos para que te diviertas y multipliques tu dinero🍀🤑

💰 *CARGA MÍNIMA $1.000*
💰 *RETIRO MÍNIMO $2.000*

*PARA COMENZAR A JUGAR CON NOSOTROS*⤵️

Envianos tu *NOMBRE* y *APELLIDO* así te generamos un usuario y te *REGALAMOS* un *100%* de *BONIFICACIÓN EN TU PRIMER CARGA* 🥳💯`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retirar.addEventListener("click", () => {
  const texto = `PARA RETIRAR TU DINERO RESPONDÉ ESTE MENSAJE INDICÁNDONOS EN ORDEN:  

♦️ Nombre de usuario 
♦️ Nombre y apellido que figura en tu CBU/CVU 
♦️ Monto que deseas retirar 
♦️ Número de CBU / CVU
♦️ ALIAS 
 
💰MÍNIMO DE RETIRO: $2.000  
⏳Aguardá unos instantes y en breve se te enviara el PREMIO`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

exitos.addEventListener("click", () => {
  const texto = `*RETIRO EXITOSO*👏🏼‼️

Sus fichas *ya fueron retiradas* y su premio fue enviado al sector de pagos 💸🤑

Ya se encuentra en fila para ser abonado 💸🥳
*NO responda este mensaje porque sino pasará a estar último/a en la fila de premios, AGUARDE SU TURNO.* 🙏🏻

*NO SEA INSISTENTE* ⚠️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `🤩 *PREMIO ENVIADO* 🤩
‼️ Felicitaciones ‼️ 🥳🥳
Esperamos que lo disfrutes!! Muchas gracias por jugar con nosotros💖

*Recordá que compartiendo nuestro contacto a familiares o amigos/as, si comienzan a jugar con nosotros, te REGALAMOS UN 15% DE BONIFICACIÓN en tu próxima carga* 🎁🤑

🃏 *JOKER CLUB* 🃏`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

contraseña.addEventListener("click", () => {
  const texto = `🔓 *CONTRASEÑA RESTABLECIDA*
Por favor, recargá la página y si es posible, *copiá y pegá* los datos así se evitan errores de tipeo y, por lo tanto, no se bloquea el usuario😜`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `😓Tu transferencia todavía no impactó, *tené en cuenta que a veces las transferencias se demoran.*⏱️

🏦 Si el dinero no ingresa a nuestra cuenta bancaria, no estamos autorizados a cargar las fichas 🏦

🙏🏼 *Aguardá un momento y cuando llegue tu transferencia tus fichas van a ser cargadas* 🙏🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitoUsuario.addEventListener("click", () => {
  const texto = `🙏🏻 Por favor, *debajo de CADA COMPROBANTE que envíes* necesito que escribas tu *nombre de usuario*. 📝
De lo contrario, no se podrá cargar las fichas!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

cbuEquivocado.addEventListener("click", () => {
  const texto = `🚫Te informamos que enviaste dinero a un CBU con el cual no estamos trabajando actualmente. En el mensaje de carga especificamos previamente que *SIEMPRE* se consulte segundos antes el CBU vigente antes de enviar dinero.🚫

Por favor, aguardá con paciencia a que ingresemos a esa cuenta y verifiquemos que el dinero haya ingresado. Esto PUEDE *DEMORAR UNAS HORAS*.‼️
*DEBES SER RESPONSABLE CON TU DINERO, DEBIDO A QUE SI SE ENVÍA DINERO A UNA CUENTA INACTIVA A LA QUE NO TENEMOS ACCESO, LO PIERDE Y NO PODEMOS HACER NADA AL RESPECTO*😢`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});


btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
