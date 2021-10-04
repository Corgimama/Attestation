var colorCircles = [];
colorCircles[0] = document.getElementById("red");
colorCircles[1] = document.getElementById("blue");
colorCircles[2] = document.getElementById("green");
colorCircles[3] = document.getElementById("yellow");
colorCircles[4] = document.getElementById("cyan");
colorCircles[5] = document.getElementById("magenta");
colorCircles[6] = document.getElementById("orange");
colorCircles[7] = document.getElementById("gray");
colorCircles[8] = document.getElementById("lime");
colorCircles[9] = document.getElementById("olive");

var brashCircles = [];
brashCircles[0] = document.getElementById("big");
brashCircles[1] = document.getElementById("little");
console.log(brashCircles)

var targetColor="red";
colorCircles[0].style.height = "80px";
colorCircles[0].style.width = "80px";

var targetBrash="big";
brashCircles[0].style.height = "80px";
brashCircles[0].style.width = "80px";

var list=document.getElementById("list");
list.addEventListener("click", pickColor);

var brashes=document.getElementById("brashes");
brashes.addEventListener("click", pickBrash);

var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");
canvas.addEventListener("mousemove", drawOnCanvas);

function pickColor(e){
	if (e.target.tagName=="LI")
	{
		switch(e.target.id)
		{
			case "red":     targetColor="red"; break;
			case "blue":	targetColor="blue"; break;
			case "green":	targetColor="green"; break;
			case "yellow":	targetColor="yellow"; break;
			case "cyan":	targetColor="cyan"; break;
			case "magenta":	targetColor="magenta"; break;
			case "orange":	targetColor="orange"; break;
			case "gray":	targetColor="gray"; break;
			case "lime":	targetColor="lime"; break;
			case "olive":	targetColor="olive"; break;
		}
		for (var i =0; i<=9; i++) {
			colorCircles[i].style.height="50px";
			colorCircles[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
	}
}

function pickBrash(e){
	if (e.target.tagName=="LI")
	{
		switch(e.target.id)
		{
			case "big":     targetBrash="big"; break;
			case "little":	targetBrash="little"; break;
		}
		for (var i =0; i<=1; i++) {
			brashCircles[i].style.height="50px";
			brashCircles[i].style.width="50px";
		}
		e.target.style.height = "80px";
		e.target.style.width = "80px";
		console.log(targetBrash)
	}
}

function drawOnCanvas(e){
	if (e.which==1){
		canvasContext.fillStyle=targetColor;
		canvasContext.beginPath();
		if(targetBrash == 'big') {
			canvasContext.arc(e.offsetX, e.offsetY, 20, 0, Math.PI*2);
			console.log("big")
		}
		else
		{
			canvasContext.arc(e.offsetX, e.offsetY, 10, 0, Math.PI*2);
			console.log("little")
		}
		canvasContext.fill();
	}
}