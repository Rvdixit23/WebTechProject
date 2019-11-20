body.onload=helloer;
function helloer()
{
	var hello=document.getElementById('hello');
	var a=document.createElementById('a');
	cook=document.cookie.split('=')
	a.innerHTML='Hi, '+cook[1];
	hello.appendChild(a);
}