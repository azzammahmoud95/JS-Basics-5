
let nb = document.createElement("input");
let submit = document.createElement("button");
let sum = document.createElement("div");
let product = document.createElement("div");
sum.innerHTML = "+";
product.innerHTML = "*"
document.body.appendChild(nb)
document.body.appendChild(submit);
document.body.appendChild(sum);
document.body.appendChild(product);
sum.style.display = "none";
product.style.display = "none";
submit.onclick = (e) => {
  sum.style.display = "block";
  product.style.display = "block";
  sum.onclick = () => {
    let result = 0;
    for (let i = 1; i <= nb.value; i++) {
      result += i;
    }
    alert(result);
  };
  product.onclick = () => {
    let result = 1;
    for (let i = 1; i <= nb.value; i++) {
      result *= i;
    }
    alert(result);
  };
};
