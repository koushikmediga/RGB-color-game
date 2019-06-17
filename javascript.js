
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedcolor=colors[3];
var colorDisplay=document.getElementById("colordisplay");


colorDisplay.textContent=pickedcolor;

for (var i=0; i<squares.length;i++)
{
	squares[i].style.backgroundColor= colors[i];

	//add click listeners to squares
    squares[i].addEventListener("click",function(){
      var clickedcolor=this.style.backgroundColor;
      if(clickedcolor===pickedcolor){
      	alert("correct");
      }
      	else{
      		alert("wrong");
      	}
    });

}