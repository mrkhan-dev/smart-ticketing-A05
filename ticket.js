const busSeat = document.getElementsByClassName("kbd");
for (const seat of busSeat) {
  seat.addEventListener("click", function (event) {
    const userPressed = event.target.innerText;
    const currentSeat = getTextElementValueById("current-seat");
    const selectedSeat = getTextElementValueById("selected-seat");
    const totalBdt = getTextElementValueById("total-price");
    // create p tag
    const div = document.getElementById("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = userPressed;
    p2.innerText = "Economy";
    p3.innerText = "500";

    if (userPressed) {
      const remainingSeat = currentSeat - 1;
      const addSeat = selectedSeat + 1;
      const totalPayment = totalBdt + 500;
      const grandTotal = totalPayment;
      setTextElementValueById("grand-total", grandTotal);
      setTextElementValueById("total-price", totalPayment);
      setTextElementValueById("current-seat", remainingSeat);
      setTextElementValueById("selected-seat", addSeat);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);

      setBackgroundColor(userPressed);
      setBackgroundColor("selected-seat");
      if (selectedSeat === 4) {
        alert("you can select 4 seat at a time");
        setTextElementValueById("selected-seat", 4);
        setTextElementValueById("current-seat", 36);
        setTextElementValueById("total-price", 2000);
        setTextElementValueById("grand-total", 2000);
        removeBackgroundColor(userPressed);
        p1.innerText = "";
        p2.innerText = "";
        p3.innerText = "";
      }
    }
  });
}
document.getElementById("coupon-btn").addEventListener("click", function () {
  const discount = getTextElementValueById("grand-total");

  const couponInput = getInputElementById("coupon-input");
  console.log(couponInput);
  if (couponInput === "NEW15" || couponInput === "COUPLE 20") {
    const couponDiscount = (15 / 100) * discount;
    setTextElementValueById("grand-total", discount - couponDiscount);
    hideElementById("coupon-section");
  }
  if (couponInput === "COUPLE 20") {
    const coupleDiscount = (20 / 100) * discount;
    setTextElementValueById("grand-total", discount - coupleDiscount);
  }
});

// modal
document.getElementById("next").addEventListener("click", function () {
  const numberField = getInputElementById("phone");
  for (const num of numberField) {
    if (num.length >= 0) {
      blurElementById("ph-paribahan");
      blurElementById("footer");
      hideElementById("seats");
      showElementById("modal");
    }
  }
  document.getElementById("continue").addEventListener("click", function () {
    console.log("clicked");
    window.location.reload();
    hideElementById("modal");
  });
});
