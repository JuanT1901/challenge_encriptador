function initialResize() {
  let textarea = document.querySelector(".main__input");

  textarea.addEventListener("input", function () {
    textarea.style.height = "300px";
    textarea.style.height = textarea.scrollHeight + 2 + "px";
  });
}

export default initialResize;
