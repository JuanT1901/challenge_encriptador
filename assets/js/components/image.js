function image () {
  let imagen = document.querySelector(".withoutText");

  if (innerWidth < 1008) {
    imagen.style.display = "none"
  }
} 

export default image;