const data = {
  currentCardNumber: 5,
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

document.querySelector("[data-card='2']").addEventListener("click", (e) => {
  let target = e.target.closest("li");
  if (!target) {
    return;
  }
  const inputElement = target.querySelector("input");
  data.question4 = inputElement.value;
  showCard(data.currentCardNumber);
});

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

document.querySelector("[data-card='4']").addEventListener("click", (e) => {
  let target = e.target.closest("li");
  if (!target) {
    return;
  }
  const inputElement = target.querySelector("input");
  data.question4 = inputElement.value;
  showCard(data.currentCardNumber);
});

const cardElement5 = document.querySelector("[data-card='5']")
cardElement5.addEventListener('change',function(e){
  let target = e.target.closest('[name]');
  console.log( );
  
  if(target){
    if(target.name === 'confirm'){
      data.question5[target.name] = target.checked
    }  else {
      data.question5[target.name] = target.value
    }
  }
  showCard(data.currentCardNumber);
  
})


function showCard(n) {
  if (n === 1 || n === 6) {
    hideFooter();
    hideHeader();
  } else {
    showFooter();
    showHeader();
  }
  data.currentCardNumber = n;
  document
    .querySelectorAll("[data-card]")
    .forEach((x) => (x.style.display = "none"));
  const cardElement = document.querySelector(`[data-card='${n}']`);
  cardElement.style.display = "";

  const nextButton = document.querySelector("[data-next]");
  nextButton.disabled = true;

  if (n === 2) {
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
  else if (n === 3) {
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
  else if (n === 4) {
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

  else if (n === 5) {
    console.log()
    if (data.question5.name != '' && data.question5.name.length > 5 &&
       data.question5.email != '' && data.question5.email.length > 5 &&
       data.question5.confirm )
    {
      nextButton.disabled = false;
    } else {
      nextButton.disabled = true;
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

function toggleItem(array, item) {
  if (array.includes(item)) {
    const index = array.indexOf(item);
    array.splice(index, 1);
  } else {
    array.push(item);
  }
}
