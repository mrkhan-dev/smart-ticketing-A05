// document.getElementById("all-seat").addEventListener("click", function () {
//   const userPressed = event.target.innerText;
//   const allSeat = document.getElementById("current-seat");
//   const countSelectedSeat = document.getElementById("selected-seat");
//   const newSeat = allSeat.innerText;
//   const seatCount = countSelectedSeat.innerText;
//   const convertSeatToNumber = parseInt(newSeat);
//   const seatCountToNumber = parseInt(seatCount);
//   if (userPressed) {
//     const remainingSeat = convertSeatToNumber - 1;
//     const addSeat = seatCountToNumber + 1;
//     setTextElementById("current-seat", remainingSeat);
//     setTextElementById("selected-seat", addSeat);
//     setBackgroundColor(userPressed);
//     setBackgroundColor("selected-seat");
//   }
// });

const busSeat = document.getElementsByClassName("button");
for (const seat of busSeat) {
  seat.addEventListener("click", function (event) {
    const userPressed = event.target.innerText;
    const currentSeat = getTextElementValueById("current-seat");
    const selectedSeat = getTextElementValueById("selected-seat");
    const totalBdt = getTextElementValueById("total-price");
    // const couponDiscount = getTextElementValueById("grand-total");

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

// modal
document.getElementById("next").addEventListener("click", function () {
  blurElementById("ph-paribahan");
  hideElementById("seats");
  showElementById("modal");
});
