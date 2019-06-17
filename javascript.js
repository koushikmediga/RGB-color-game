var numofsquares = 6;
var colors = generateRandomColors(numofsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor= pickcolor();
var colorDisplay=document.getElementById("colordisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

easybtn.addEventListener("click",function(){
   hardbtn.classList.remove("selected");
   easybtn.classList.add("selected");
   numofsquares=3;
   colors=generateRandomColors(numofsquares);
   pickedcolor=pickcolor();
   colorDisplay.textContent=pickedcolor;
   for(var i=0;i<squares.length;i++){
   	if(colors[i]){
   		squares[i].style.backgroundColor=colors[i];
   	}
   	else {
   		squares[i].style.display="none";
   	}
   }

});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
    numofsquares = 6;
	colors=generateRandomColors(numofsquares);
   pickedcolor=pickcolor();
   colorDisplay.textContent=pickedcolor;
   for(var i=0;i<squares.length;i++){
   	
   		squares[i].style.backgroundColor=colors[i];
   	
   		squares[i].style.display="block";
   }
   
});

resetButton.addEventListener("click",function(){
	//generate al new colors
	colors=generateRandomColors(numofsquares);
	//pick a new random color from array
	pickedcolor=pickcolor();
	//change colordisplay to match picked color
	colorDisplay.textContent=pickedcolor;
	this.textContent="New Colors";
	messageDisplay.textContent="";
	//change colors of squares
	for (var i=0; i<squares.length;i++)
       {
	squares[i].style.backgroundColor= colors[i];
       }
    //reset heading color for a new game
    h1.style.backgroundColor="steelblue";

});

colorDisplay.textContent=pickedcolor;

for (var i=0; i<squares.length;i++)
{
	squares[i].style.backgroundColor= colors[i];

	//add click listeners to squares
    squares[i].addEventListener("click",function(){
      var clickedcolor=this.style.backgroundColor;
      if(clickedcolor===pickedcolor){
      	messageDisplay.textContent="correct!";
      	resetButton.textContent="Play Again?";
      	changecolors(clickedcolor);
      	h1.style.backgroundColor=clickedcolor;
      }
      	else{
      		this.style.backgroundColor= "#232323";
      		messageDisplay.textContent="try again";
      	}
    });

}

function changecolors(color){
	for(var i=0; i<colors.length;i++){
		squares[i].style.backgroundColor=color;
	}
}


//random function for color picking

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	 var arr=[];
	 //add num random colors to array
	 for(var i=0; i<num;i++)
	 {
	 	//get random color from the function called and push it into the array
          arr.push(randomColor());
	 }
	 return arr;
}

//function generating random colors

function randomColor(){

	 var r = Math.floor(Math.random() * 256);

	 var g = Math.floor(Math.random() * 256);

	 var b = Math.floor(Math.random() * 256);

	 return "rgb(" + r + ", " + g + ", " + b + ")";

}