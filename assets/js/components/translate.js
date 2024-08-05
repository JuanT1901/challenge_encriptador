function translate() {
  let text = document.querySelector(".main__input").value.split("");
  let button = document.getElementById("encrypt");
  let copyButton = document.getElementById("copyButton")

  let cases = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  text.forEach((letter, index) => {
    if (Object.keys(cases).includes(letter)) {
      letter = cases[letter];
      text.splice(index, 1, letter);
    }
  });

  let encryptedText = text.join("");
  let solution = document.getElementById("solution");
  let title = document.querySelector(".solution__title");

  if (text.length !== 0) {
    title.style.display = "none";
    solution.innerHTML = encryptedText;
    solution.style.marginBottom = "10px";
    copyButton.style.display = "block";

  } else {
    title.style.display = "block";
    solution.style.marginBottom = "20px";
    solution.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
  }

  button.addEventListener("click", function () {
    translate(text);
  });
}

export default translate;
