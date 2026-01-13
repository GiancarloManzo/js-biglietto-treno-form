const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const km = number(kmInput.value);
  const age = number(ageInput.value);
});

const pricePerKm = 0.21;
let price = km * pricePerKm;

if (age < 18) {
  price = price * 0.8;
} else if (age > 65) {
  price = price * 0.6;
}

console.log("Prezzo finale:", price.toFixed(2), "$");
