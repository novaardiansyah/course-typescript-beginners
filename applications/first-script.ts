const a = document.getElementById("a")! as HTMLInputElement;
const b = document.getElementById("b")! as HTMLInputElement;
const calculate = document.getElementById("calculate");

function add(a: number, b: number) {
  return a + b;
}

calculate.addEventListener("click", () => {
  const result = add(Number(a.value), Number(b.value));
  console.log(result);
});