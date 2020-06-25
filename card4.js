document.querySelector("[data-card='4']").addEventListener("click", (e) => {
    let target = e.target.closest("li");
    if (!target) {
      return;
    }
    const inputElement = target.querySelector("input");
    data.question4 = inputElement.value;
    showCard(data.currentCardNumber);
  });


  function showCard4(){
    const cardElement = document.querySelector(`[data-card='4']`);
    cardElement.querySelectorAll("input").forEach((inElem) => {
        inElem.checked = false
        if (inElem.value === data.question4) {
          inElem.checked = true
        }
      });
      if (data.question4) {
        nextButton.disabled = false;
      }
  }