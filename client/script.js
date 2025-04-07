const boton = document.getElementById("boton");
const nombre = document.getElementById("nombre");
const saludo_p = document.getElementById("saludo");

boton.addEventListener("click", async () => {
  try {
    const res = await fetch(`http://localhost:3000/saludo/${nombre.value}`);

    const saludo = await res.text();
    saludo_p.textContent = saludo;
  } catch (error) {
    alert("Se produjo un error");
  }
});
