// // var n = prompt("tayp a number :")
// // alert("1"+n)

// var input = document.createElement("input");
// var p = document.createElement("p");
// var result = document.createElement("button");
// p.innerHTML = "write your number";
// var p2 = document.createElement("p");
// result.innerHTML = "submit"
// document.body.appendChild(p);
// document.body.appendChild(input);
// document.body.appendChild(result);
// document.body.appendChild(p2);
// n = input.value;
// sum = 0;
// result.onclick = function(){
//   for(i = 0 ;i<= n; i++){
//   if(n%3 == 0 || n%5 == 0){
// sum += i
// p2.innerHTML = +an + sum;
//   }
// }
// }

 var nb = document.createElement("input")
 document.body.appendChild(nb)
 var sum = 0

 nb.onblur = function() {
  for (let i = 0; i <= nb.value; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  alert(sum)
 }