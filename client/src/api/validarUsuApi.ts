export async function validarUsu(nombre: string): Promise<{ valido: boolean }> {
  const res = await fetch(`http://localhost:3000/validar/${nombre}`);
  if (!res.ok) throw new Error("Error en validación");
  return res.json();
}

export async function obtenerSaludo(
  nombre: string
): Promise<{ message: string }> {
  const res = await fetch(`http://localhost:3000/saludo/${nombre}`);
  if (!res.ok) throw new Error("Error en saludo");
  return res.json();
}
