const data = {
  currentCardNumber: 1,
  progress: 0,
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

function updateProgress() {
  const progressElement = document.querySelector("[data-progress-bar]");
  let progress = 0;
  if (data.question2) {
    progress++;
  }
  if (data.question3.length) {
    progress++;
  }
  if (data.question4) {
    progress++;
  }
  if (data.question5.name) {
    progress++;
  }
  if (data.question5.email) {
    progress++;
  }
  if (data.question5.confirm) {
    progress++;
  }
  if (progress === 6) {
    progressElement.classList.add("bg-success");
  }
  progress = (progress / 6) * 100;
  progressElement.style.width = `${progress}%`;
}

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

function showCard(n) {
  updateProgress();

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
    showCard2();
  } else if (n === 3) {
    showCard3();
  } else if (n === 4) {
    showCard4();
  } else if (n === 5) {
    showCard5();
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
