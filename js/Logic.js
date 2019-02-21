/*
In order to do the following code I followed a tutorial from w3 schools about Todo Lists,
Style code is from w3Schools, Checkboxes and the list of nodes were followed in the tutorial
Functions clear, mark all and delete all prove what I learned from the tutorials
and my knowledge in javascript
*/
window.onload=function(){

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else 
  {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function ClearElement() {

	for (i = 0; i < myNodelist.length; i++)
	{

  if (myNodelist[i].tagName === 'LI') 
    myNodelist[i].classList.remove('checked');

	}

}

function MarkElement() {

	for (i = 0; i < myNodelist.length; i++)
	{

  if (myNodelist[i].tagName === 'LI') 
    myNodelist[i].classList.remove('checked');
	myNodelist[i].classList.add('checked');

	}

}


function DelElement() {

	for (i = 0; i < myNodelist.length; i++)
	{

  if (myNodelist[i].tagName === 'LI') 
    myNodelist[i].style.display = "none";// Not really deleating the task, but as long as it doesnt affect the user ;)

	}

}

document.getElementById("submitInput").addEventListener("click", function(event) {
   event.preventDefault();
});
document.getElementById("submitInput").addEventListener("click", newElement);



document.getElementById("submitClear").addEventListener("click", function(event) {
   event.preventDefault();
});
document.getElementById("submitClear").addEventListener("click", ClearElement);



document.getElementById("submitMark").addEventListener("click", function(event) {
   event.preventDefault();
});
document.getElementById("submitMark").addEventListener("click", MarkElement);



document.getElementById("submitDelete").addEventListener("click", function(event) {
   event.preventDefault();
});
document.getElementById("submitDelete").addEventListener("click", DelElement);


console.log("Load JS correctly");
}