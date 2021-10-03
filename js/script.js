var rgba = document.getElementById("rgba");
var hex = document.getElementById("hex");
var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");
var a = document.getElementById("a");

function numberToHex(number) {
  return (
    (Number(number).toString(16) < 2 ? "0" : "") + Number(number).toString(16)
  );
}

function refreshColor() {
  hex.value =
    "#" +
    numberToHex(r.value) +
    numberToHex(g.value) +
    numberToHex(b.value) +
    numberToHex(a.value);

  hex.style.background = hex.value;
  rgba.style.background = hex.style.background;
  rgba.value = rgba.style.background;

  a.style.background = "linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(" + r.value + ", " + g.value + ", " + b.value + "))";
}

function copyPrompt() {
  prompt(
    "Copy this " +
      (this.value.toString().includes("rgb") ? "rgba" : "hex") +
      " Color Code !",
    this.value
  );
}

r.addEventListener("input", refreshColor);
g.addEventListener("input", refreshColor);
b.addEventListener("input", refreshColor);
a.addEventListener("input", refreshColor);

rgba.addEventListener("click", copyPrompt);
hex.addEventListener("click", copyPrompt);
