function displayMenssage(msgText, msgType) {
  let html = document.querySelector("html");

  /* Seleccione el elemnto html y guarda una refencia de el en una variable llamada html */

  let panel = document.createElement("div");
  /* crea un elemento div y guarda una refencia de el en una variable llamada panel*/
  panel.setAttribute("class", "msgbox");

  /* para configurar un atributo a class en nuestra panel con un valor de msgBox.
  en el css veras que estamos utilixando un selector de clase .msgBox para darle estilo al contenedor del mensaje*/

  html.appendChild(panel);

  /* llamamos a una funcion del DOM en la variable html, que anida un elemento dentro del otro como hijo de el. 
  hemos especificado el panel (div) como el hijo que queremos añadir dntro del elemneto html.
  debemos hacer esto ya que el elemento que creamos no aparecera en la pagina por si solo, tenemos que especifircarlo donde ponerlo.*/

  let msg = document.createElement("p");
  /* crea un elemnto p */

  msg.textContent = msgText;
  /* para insertar un mensaje dentro del parrafo*/

  panel.appendChild(msg);
  /* aconvierte a msg (p) en hijo de panel (div)*/

  let closeBtn = document.createElement("button");
  /*crea un boton*/

  closeBtn.textContent = "cerrar";
  /*reprensa el contenido de un elemento: para insertar una x dentro del boton */

  panel.appendChild(closeBtn);
  /* conviert a closeBtn en hijo de la variable panel(div)*/

  closeBtn.onclick = function () {
    /* cuando haga click en el boton se ejecuta el codigo de la funcion */

    panel.parentNode.removeChild(panel)
    /* especfica que queremos eliminar un elemnto secundario del elemnto html en este caso el panel (div)*/

    if (msgType === "warning") {
      msg.style.backgroundImage = "url(icons/warning.png)";
      panel.style.backgroundColor = "red";
    } else if (msgType === "chat") {
      msg.style.backgroundImage = "url(icons/chat.png)";
      panel.style.backgroundColor = "aqua";
    } else {
      msg.styale.paddingLeft = "20";
    }
  }
}
let btn = document.querySelector("button")

//btn.onclick = displayMenssage
/*en lugar de llamar a una funcion anonima que contiene algun codigo, estamos llamando directamente a nuestra funcion al hacer click en el boton */
btn.onclick = function () {
  displayMenssage("your inbox is almost full - delet some mails", "warning")
}