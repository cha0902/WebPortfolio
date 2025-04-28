let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	header.classList.toggle('active');
}

window.onscroll = () => {
	menu.classList.remove('fa-times');
	header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
	cursor1.style.top = e.pageY + 'px';
	cursor1.style.left = e.pageX + 'px';
	cursor2.style.top = e.pageY + 'px';
	cursor2.style.left = e.pageX + 'px';
}

let links = document.querySelectorAll('a').forEach(links =>{
	links.onmouseenter = () =>{
		cursor1.classList.add('active');
		cursor2.classList.add('active');
	}
	links.onmouseleave = () =>{
		cursor1.classList.remove('active');
		cursor2.classList.remove('active');
	}
});

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");

var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");

var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];


btn1.onclick = function() {
	modal1.style.display = "block";
  }
btn2.onclick = function() {
	modal2.style.display = "block";
  }
  btn3.onclick = function() {
	modal3.style.display = "block";
  }
  btn4.onclick = function() {
	modal4.style.display = "block";
  }
btn5.onclick = function() {
  modal5.style.display = "block";
}

span1.onclick = function() {
	modal1.style.display = "none";
  }
  span2.onclick = function() {
	modal2.style.display = "none";
  }
  span3.onclick = function() {
	modal3.style.display = "none";
  }
  span4.onclick = function() {
	modal4.style.display = "none";
  }
span5.onclick = function() {
  modal5.style.display = "none";
}


window.onclick = function(event) {
	if (event.target == modal1) {
	  modal1.style.display = "none";
	}
  }
  window.onclick = function(event) {
	if (event.target == modal2) {
	  modal2.style.display = "none";
	}
  }
  window.onclick = function(event) {
	if (event.target == modal3) {
	  modal3.style.display = "none";
	}
  }
  window.onclick = function(event) {
	if (event.target == modal4) {
	  modal4.style.display = "none";
	}
  }
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

