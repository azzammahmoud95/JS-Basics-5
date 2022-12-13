var nb = document.createElement("input");
document.body.appendChild(nb)
nb.onblur = function () {
  document.write(`${nb.value}: `);
  for (let i = 1; i <= 12; i++) {
   
    const result = i * nb.value;

    document.write(result + " ");
  }
};