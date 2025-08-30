//15.
async function promesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promesa resuelta");
    }, 2000);
  });
}

async function main() {
  const mensaje = await promesa();
  console.log(mensaje);
}
main();