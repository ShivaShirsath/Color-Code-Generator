function refreshColor() {
	var r = document.getElementById('r').value ;
	var g = document.getElementById('g').value ;
	var b = document.getElementById('b').value ;
	var a = document.getElementById('a').value / 100 ;
	var c = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')' ;
	document.body.style.background = c ;
	document.getElementById('c').value = c ;
	document.getElementById('a').style.background = 'linear-gradient(90deg,rgba(0,0,0,0),' + 'rgba(' + r + ',' + g + ',' + b + ')' ;
}
document.getElementById('r').addEventListener('input', refreshColor) ;
document.getElementById('g').addEventListener('input', refreshColor) ;
document.getElementById('b').addEventListener('input', refreshColor) ;
document.getElementById('a').addEventListener('input', refreshColor) ;
