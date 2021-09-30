var c = document.getElementById('c') ;
var r = document.getElementById('r') ;
var g = document.getElementById('g') ;
var b = document.getElementById('b') ;
var a = document.getElementById('a') ;
function refreshColor() {
	var color = r.value + ', ' +
		g.value + ', ' +
		b.value ;		
	c.style.background =  'rgba(' +
		color +  ', ' +
		a.value / 100 + 
	' )' ;
	c.value = c.style.background ;
	a.style.background = 'linear-gradient(to right,' + ' rgba(0, 0, 0 )' + ',' + 'rgba(' + color + ' )' ;
}
r.addEventListener('input', refreshColor) ;
g.addEventListener('input', refreshColor) ;
b.addEventListener('input', refreshColor) ;
a.addEventListener('input', refreshColor) ;
