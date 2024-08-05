function decrypt() {
  let text = document.querySelector(".main__input");
  let button = document.getElementById("decrypt");
  let copyButton = document.getElementById("copyButton");

  function decryptText(text) {
    text = text
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return text;
  }

  let solution = document.getElementById("solution");
  let title = document.querySelector(".solution__title");

  if (text.length !== 0) {
    title.style.display = "none";
    solution.style.marginBottom = "10px";
    copyButton.style.display = "block";
  } else {
    title.style.display = "block";
    solution.style.marginBottom = "20px";
    solution.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
  }
  
  button.addEventListener("click", function () {
    let encryptedText = text.value;
    let decryptedText = decryptText(encryptedText);
    solution.innerHTML = decryptedText;
  });
}

export default decrypt;
