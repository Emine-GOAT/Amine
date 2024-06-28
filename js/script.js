var plus = document.querySelectorAll(".fa-plus-circle");
console.log(plus);

plus.forEach((button, index) => {
  button.addEventListener("click", function () {
    var count = document.querySelectorAll(".quantity")[index];
    count.textContent = parseInt(count.textContent) + 1;
    updaterptice();
  });
});

var minus = document.querySelectorAll(".fa-minus-circle");
console.log(minus);

minus.forEach((button, index) => {
  button.addEventListener("click", function () {
    var count = document.querySelectorAll(".quantity")[index];
    count.textContent = parseInt(count.textContent) - 1;
    updaterptice();
  });
});

var heart = document.querySelectorAll(".fa-heart");
console.log(heart);
heart.forEach((button, index) => {
  button.addEventListener("click", function () {
    button.style.color = "red";
  });
});
function updaterptice() {
  const prices = document.querySelectorAll(".unit-price");
  var quantities = document.querySelectorAll(".quantity");
  var total = 0;
  prices.forEach((price, index) => {
    const pricevalue = parseFloat(price.textContent.replace("$", ""));
    const quantityvalue = parseInt(quantities[index].textContent);
    total += pricevalue * quantityvalue;
  });
  document.querySelector(".total").textContent = total + "$";
}
