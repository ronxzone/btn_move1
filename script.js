const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const YesBtn = document.querySelector(".yes-btn");
const NoBtn = document.querySelector(".no-btn");

const wrapperRect = wrapper.getBoundingClientRect();
const NoBtnRect = NoBtn.getBoundingClientRect();

YesBtn.addEventListener("click", () => {
  question.innerHTML = "yayy, i love you too ❤";
  const start = () => {
    setTimeout(function () {
      confetti.start();
    }, 1000);
  };
  const stop = () => {
    setTimeout(function () {
      confetti.stop();
    }, 5000);
  };
  start();
  stop();
});

NoBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (wrapperRect.width - NoBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - NoBtnRect.height)) + 1;

  NoBtn.style.left = i + "px";
  NoBtn.style.top = j + "px";
});
