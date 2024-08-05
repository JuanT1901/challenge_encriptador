function initialResize() {
  let textarea = document.querySelector(".main__input");

  textarea.addEventListener("input", function () {
    let value = textarea.value;

    textarea.style.height = "300px";
    textarea.style.height = textarea.scrollHeight + 2 + "px";

    value = value.toLowerCase();
    value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    textarea.value = value;
  });
}

export default initialResize;
