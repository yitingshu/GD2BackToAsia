
console.log("123");

window.onload = function(){
	$(".brush ").draggable();
	var canvas = new fabric.Canvas('myCanvas');
            canvas.isDrawingMode = true;
            canvas.freeDrawingBrush.width = 7;
            canvas.freeDrawingBrush.color = "#000000";
}

