const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset");
const errorDiv = document.getElementById("error");
const ticket = documkent.getElementById("ticket");
const outAge = document.getElementById("outAge");
const outKm = document.getElementById("outKm");
const outOffer = document.getElementById("outOffer");
const outCar = document.getElementById("outCar");
const outCode = document.getElementById("outCode");
const FinalPrice = document.getElementById("FinalPrice");

btn.addEventListener("click", () => {
  const km = Number(kmInput.value);
  const age = Number(ageInput.value);
  if (isNaN(km) || isNaN(age) || km <= 0 || age <= 0) {
    errorDiv.innerText = "Inserisci km ed età validi.";
    ticket.classList.add("d-none");
    return;
  }
  const pricePerKm = 0.21;
  let price = km * pricePerKm;
  let offer = "Biglietto Standard";

  if (age < 18) {
    price = price * 0.8;
    offer = "Sconto Minorenni";
  } else if (age > 65) {
    price = price * 0.6;
    offer = "Sconto Over 65";
  }

  Finalprice.innerText = `Prezzo finale: ${price.toFixed(2)}$`;
});
