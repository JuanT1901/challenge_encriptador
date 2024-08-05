function copy() {

  function copyText() {
    let textToCopy = document.getElementById("solution").textContent;
    const notification = document.getElementById('copyNotification');
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        notification.classList.remove('hidden');
        notification.classList.add('show');

        setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => {
              notification.classList.add('hidden');
          }, 500); // Espera a que la transición de opacidad termine
        }, 2000);
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
