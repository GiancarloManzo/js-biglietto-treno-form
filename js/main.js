const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset");
const errorDiv = document.getElementById("error");
const ticket = documkent.getElementById("ticket");
const FinalPrice = document.getElementById("FinalPrice");

btn.addEventListener("click", () => {
  const km = Number(kmInput.value);
  const age = Number(ageInput.value);
  if (!km || !age) {
    alert("Inserisci km ed età");
    return;
  }
  const pricePerKm = 0.21;
  let price = km * pricePerKm;

  if (age < 18) {
    price = price * 0.8;
  } else if (age > 65) {
    price = price * 0.6;
  }

  Finalprice.innerText = `Prezzo finale: ${price.toFixed(2)}$`;
});
