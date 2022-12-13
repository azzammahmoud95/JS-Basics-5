// var n = prompt("tayp a number :")
// alert("1"+n)

var input = document.createElement("input");
var p = document.createElement("p");
var result = document.createElement("button");
p.innerHTML = "what is your name ?";
var p2 = document.createElement("p");
result.innerHTML = "submit"

document.body.appendChild(p);
document.body.appendChild(input);
document.body.appendChild(result);
document.body.appendChild(p2);

result.onclick = function () {
    if(input.value == "Alice" || input.value == "Bob"){
  p2.innerHTML = `Hello ${input.value}`}else{
    p2.innerHTML = "Hello stranger"
  }
};