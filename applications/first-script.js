var a = document.getElementById("a");
var b = document.getElementById("b");
var calculate = document.getElementById("calculate");
function add(a, b) {
    return a + b;
}
calculate.addEventListener("click", function () {
    var result = add(Number(a.value), Number(b.value));
    console.log(result);
});
