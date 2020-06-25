
document.querySelector("[data-card='3']").addEventListener("click", (e) => {
    let target = e.target.closest(".card-slectable");
    if (!target) {
      return;
    }
    const inputElement = target.querySelector("input");
    const value = inputElement.value;
    toggleItem(data.question3, value);
  
    showCard(data.currentCardNumber);
  });
  



function showCard3(){
    const cardElement = document.querySelector(`[data-card='3']`);
    cardElement.querySelectorAll("input").forEach((inElem) => {
        inElem.checked = false
        if (data.question3.includes(inElem.value)) {
          inElem.checked = true
        }
      });
      if (data.question3.length) {
        nextButton.disabled = false;
      }
}