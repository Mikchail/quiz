const cardElement5 = document.querySelector("[data-card='5']");
cardElement5.addEventListener("change", function (e) {
  let target = e.target.closest("[name]");
  console.log();

  if (target) {
    if (target.name === "confirm") {
      data.question5[target.name] = target.checked;
    } else {
      data.question5[target.name] = target.value;
    }
  }
  showCard(data.currentCardNumber);
});

function showCard5() {
  if (
    data.question5.name != "" &&
    data.question5.name.length > 5 &&
    data.question5.email != "" &&
    data.question5.email.length > 5 &&
    data.question5.confirm
  ) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}
