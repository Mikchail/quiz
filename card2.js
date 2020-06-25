document.querySelector("[data-card='2']").addEventListener("click", (e) => {
  let target = e.target.closest("li");
  if (!target) {
    return;
  }
  const inputElement = target.querySelector("input");
  data.question2 = inputElement.value;
  showCard(data.currentCardNumber);
});


function showCard2() {
    const cardElement = document.querySelector(`[data-card='2']`);
    cardElement.querySelectorAll("input").forEach((inElem) => {
      inElem.checked = false
      if (inElem.value === data.question2) {
        inElem.checked = true
      }
    });
    if (data.question2) {
      nextButton.disabled = false;
    }
}