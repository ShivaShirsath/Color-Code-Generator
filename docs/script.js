alert()
var rgba = document.getElementById("rgba");
var hex = document.getElementById("hex");
var r = document.getElementById("r");
var g = document.getElementById("g");
var b = document.getElementById("b");
var a = document.getElementById("a");
var getByPrompt = null;

function numberToHex(number) {
  return (
    (Number(number).toString(16) < 10 ? "0" : "") + Number(number).toString(16)
  );
}

function extractRGBA(css) {
  return css.match(/[0-9.]+/gi);
}

function refreshColor() {
  if (getByPrompt != null) {
    hex.style.background = getByPrompt;
    rgba.style.background = hex.style.background;
    rgba.value = rgba.style.background;

    var xRGBA = extractRGBA(rgba.value);

    r.value = xRGBA[0];
    g.value = xRGBA[1];
    b.value = xRGBA[2];
    a.value = xRGBA[3] == null ? 255 : xRGBA[3] * 255;

    getByPrompt = null;
  }
  hex.value =
    "#" +
    numberToHex(r.value) +
    numberToHex(g.value) +
    numberToHex(b.value) +
    (numberToHex(a.value) == "ff" ? "" : numberToHex(a.value));

  hex.style.background = hex.value;
  rgba.style.background = hex.style.background;
  rgba.value = rgba.style.background;

  a.style.background =
    "linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(" +
    r.value +
    ", " +
    g.value +
    ", " +
    b.value +
    "))";
}

function copyPrompt() {
  getByPrompt = prompt(
    "Copy this " +
      (this.value.toString().includes("rgb") ? "rgba" : "hex") +
      " Color Code !",
    this.value
  );
  refreshColor();
}

r.addEventListener("input", refreshColor);
g.addEventListener("input", refreshColor);
b.addEventListener("input", refreshColor);
a.addEventListener("input", refreshColor);
refreshColor();
rgba.addEventListener("click", copyPrompt);
hex.addEventListener("click", copyPrompt);