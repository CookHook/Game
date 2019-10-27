var mode = 6
var colors = generateRandomColors(mode);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    mode = 3;
    squares[3].classList.add("hidden");
    squares[4].classList.add("hidden");
    squares[5].classList.add("hidden");
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
    for(var i = 0; i < 3; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "RGBA(123, 3, 3, 1)";
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    mode = 6;
    squares[3].classList.remove("hidden");
    squares[4].classList.remove("hidden");
    squares[5].classList.remove("hidden");
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "RGBA(123, 3, 3, 1)"

})

reset.addEventListener("click", function(){
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "NEW COLORS";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "RGBA(123, 3, 3, 1)"
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
           changeColors(clickedColor);
           messageDisplay.textContent = "Correct!"
           h1.style.backgroundColor = clickedColor;
           reset.textContent = "PLAY AGAIN?";
       }
       else {
           this.style.backgroundColor = "#232323"
           messageDisplay.textContent = "Try Again!"
       }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function pickColorEasy(){
    var random = Math.floor(Math.random() * 3);
    return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}