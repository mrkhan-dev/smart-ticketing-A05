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
    if (userPressed) {
      const remainingSeat = currentSeat - 1;
      const addSeat = selectedSeat + 1;
      setTextElementValueById("current-seat", remainingSeat);
      setTextElementValueById("selected-seat", addSeat);
      setBackgroundColor(userPressed);
      setBackgroundColor("selected-seat");
      if (selectedSeat === 4) {
        alert("you can select 4 seat at a time");
        setTextElementValueById("selected-seat", 4);
        setTextElementValueById("current-seat", 36);
        removeBackgroundColor(userPressed);
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
