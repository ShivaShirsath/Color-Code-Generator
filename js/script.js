function refreshColor() {
	var red = document.getElementById('red').value
	var green = document.getElementById('green').value
	var blue = document.getElementById('blue').value
	var alfa = document.getElementById('alfa').value / 100
	var color = 'rgba(' + red + ',' + green + ',' + blue + ',' + alfa + ')'
	document.body.style.background = color
	document.getElementById('box').value = color
	document.getElementById('alfa').style.background = 'linear-gradient(90deg,rgba(0,0,0,0),' + 'rgba(' + red + ',' + green + ',' + blue + ')'
}
document.getElementById('red').addEventListener('input', refreshColor)
document.getElementById('green').addEventListener('input', refreshColor)
document.getElementById('blue').addEventListener('input', refreshColor)
document.getElementById('alfa').addEventListener('input', refreshColor)
