function copy() {

  function copyText() {
    let textToCopy = document.getElementById("solution").textContent;
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("No se pudo copiar el texto: ", err);
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById("copyButton");
    button.addEventListener("click", copyText);
  });
}

export default copy;
