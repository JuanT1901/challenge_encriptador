function encrypt() {
  let text = document.querySelector(".main__input").value.split("");
  let button = document.getElementById("encrypt");
  let copyButton = document.getElementById("copyButton");
  let imagen = document.querySelector(".withoutText");

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

  console.log(window.innerHeight)

  if (text.length !== 0) {
    title.style.display = "none";
    solution.style.marginBottom = "10px";
    copyButton.style.display = "block";
    if (innerWidth > 639) {
      solution.style.fontSize = '250px';
    }
    if (innerWidth > 1007) {
      solution.style.fontSize = '20px';
    }
    imagen.style.display = "none";
    solution.innerHTML = encryptedText;
  } else {
    title.style.display = "block";
    solution.style.marginBottom = "20px";
    solution.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
  }

  button.addEventListener("click", function () {
    encrypt(text);
  });
}

export default encrypt;
