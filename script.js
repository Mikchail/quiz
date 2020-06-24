const data = {
  currentCardNumber: 1,
  question2: null,
  question3: [],
  question4: null,
  question5: {
    name: "",
    email: "",
    confirm: false,
  },
};

showCard(data.currentCardNumber);

document.querySelector("[data-back]").addEventListener("click", (e) => {
  data.currentCardNumber -= 1;
  showCard(data.currentCardNumber);
});
const nextButton = document.querySelector("[data-next]");
nextButton.addEventListener("click", (e) => {
  data.currentCardNumber += 1;
  showCard(data.currentCardNumber);
});
document.querySelector("[data-start]").addEventListener("click", (e) => {
  data.currentCardNumber = 2;
  showCard(data.currentCardNumber);
});
document.querySelector("[data-card='4']").addEventListener("click", (e) => {
    let target = e.target.closest("li");
    if (!target) {
      return;
    }
    const inputElement = target.querySelector('input')
    data.question4 = inputElement.value
    showCard(data.currentCardNumber);
  });
  
document.querySelector("[data-card='2']").addEventListener("click", (e) => {
  let target = e.target.closest("li");
  if (!target) {
    return;
  }
  const inputElement = target.querySelector('input')
  data.question2 = inputElement.value
  showCard(data.currentCardNumber);
});

function showCard(n) {
  if (n === 1 || n === 6) {
    hideFooter();
    hideHeader();
  } else {
    showFooter();
    showHeader();
  }
  data.currentCardNumber = n
  document
    .querySelectorAll("[data-card]")
    .forEach((x) => (x.style.display = "none"));
    const cardElement =  document.querySelector(`[data-card='${n}']`)
    cardElement.style.display = "";

    const nextButton = document.querySelector("[data-next]");
    nextButton.disabled = true


    if(n === 2){
        cardElement.querySelectorAll('input').forEach(inElem => {
            inElem.removeAttribute('checked')
            if(inElem.value === data.question2){
                inElem.setAttribute('checked',true)
            }
        })
        if(data.question2){
            nextButton.disabled = false
        }
    }


    if(n === 4){
        cardElement.querySelectorAll('input').forEach(inElem => {
            inElem.removeAttribute('checked')
            if(inElem.value === data.question4){
                inElem.setAttribute('checked',true)
            }
        })
        if(data.question4){
            nextButton.disabled = false
        }
    }
}

function showFooter() {
  document.querySelector("[data-footer]").style.display = "";
}

function hideFooter() {
  document.querySelector("[data-footer]").style.display = "none";
}
function showHeader() {
  document.querySelector("[data-header]").style.display = "";
}
function hideHeader() {
  document.querySelector("[data-header]").style.display = "none";
}
