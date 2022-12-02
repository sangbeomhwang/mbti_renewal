let item = localStorage.getItem("survey2");
if (item === null) {
  const initialState = [];
  const state = JSON.stringify(initialState);
  localStorage.setItem("survey2", state);
  item = state; // 바로 위의 코드까지만 수행하면 item이 "null"이 되므로 string 데이터로 형변환한 state 변수의 값을 넣어줌!!
}

const survey2 = JSON.parse(item);

const answer1 = document.querySelectorAll(
  "#q1 > #radioSelect > #options > div > input"
);
const answer2 = document.querySelectorAll(
  "#q2 > #radioSelect > #options > div > input"
);
const answer3 = document.querySelectorAll(
  "#q3 > #radioSelect > #options > div > input"
);
const answer4 = document.querySelectorAll(
  "#q4 > #radioSelect > #options > div > input"
);
const answer5 = document.querySelectorAll(
  "#q5 > #radioSelect > #options > div > input"
);
const answer6 = document.querySelectorAll(
  "#q6 > #radioSelect > #options > div > input"
);
const answer7 = document.querySelectorAll(
  "#q7 > #radioSelect > #options > div > input"
);
const answer8 = document.querySelectorAll(
  "#q8 > #radioSelect > #options > div > input"
);
const answer9 = document.querySelectorAll(
  "#q9 > #radioSelect > #options > div > input"
);
const answer10 = document.querySelectorAll(
  "#q10 > #radioSelect > #options > div > input"
);
const answer11 = document.querySelectorAll(
  "#q11 > #radioSelect > #options > div > input"
);
const answer12 = document.querySelectorAll(
  "#q12 > #radioSelect > #options > div > input"
);

const nextBtn = document.querySelector(".nextBtn");

const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];
const arr6 = [];
const arr7 = [];
const arr8 = [];
const arr9 = [];
const arr10 = [];
const arr11 = [];
const arr12 = [];

const questions = document.querySelectorAll("#statement > li");

function checkedHandler() {
  answer1.forEach((node1) => {
    if (node1.checked) {
      questions[0].className = "checked";
      arr1.push(node1.value);
      if (arr1.length > 1) {
        arr1.splice(0, 1);
      }
    }
  });

  answer2.forEach((node2) => {
    if (node2.checked) {
      questions[1].className = "checked";
      arr2.push(node2.value);
      if (arr2.length > 1) {
        arr2.splice(0, 1);
      }
    }
  });

  answer3.forEach((node3) => {
    if (node3.checked) {
      questions[2].className = "checked";
      arr3.push(node3.value);
      if (arr3.length > 1) {
        arr3.splice(0, 1);
      }
    }
  });

  answer4.forEach((node4) => {
    if (node4.checked) {
      questions[3].className = "checked";
      arr4.push(node4.value);
      if (arr4.length > 1) {
        arr4.splice(0, 1);
      }
    }
  });

  answer5.forEach((node5) => {
    if (node5.checked) {
      questions[4].className = "checked";
      arr5.push(node5.value);
      if (arr5.length > 1) {
        arr5.splice(0, 1);
      }
    }
  });

  answer6.forEach((node6) => {
    if (node6.checked) {
      questions[5].className = "checked";
      arr6.push(node6.value);
      if (arr6.length > 1) {
        arr6.splice(0, 1);
      }
    }
  });

  answer7.forEach((node7) => {
    if (node7.checked) {
      questions[6].className = "checked";
      arr7.push(node7.value);
      if (arr7.length > 1) {
        arr7.splice(0, 1);
      }
    }
  });

  answer8.forEach((node8) => {
    if (node8.checked) {
      questions[7].className = "checked";
      arr8.push(node8.value);
      if (arr8.length > 1) {
        arr8.splice(0, 1);
      }
    }
  });

  answer9.forEach((node9) => {
    if (node9.checked) {
      questions[8].className = "checked";
      arr9.push(node9.value);
      if (arr9.length > 1) {
        arr9.splice(0, 1);
      }
    }
  });

  answer10.forEach((node10) => {
    if (node10.checked) {
      questions[9].className = "checked";
      arr10.push(node10.value);
      if (arr10.length > 1) {
        arr10.splice(0, 1);
      }
    }
  });

  answer11.forEach((node11) => {
    if (node11.checked) {
      questions[10].className = "checked";
      arr11.push(node11.value);
      if (arr11.length > 1) {
        arr11.splice(0, 1);
      }
    }
  });

  answer12.forEach((node12) => {
    if (node12.checked) {
      questions[11].className = "checked";
      arr12.push(node12.value);
      if (arr12.length > 1) {
        arr12.splice(0, 1);
      }
    }
  });

  const totalChecked =
    Number(arr1) +
    Number(arr2) +
    Number(arr3) +
    Number(arr4) +
    Number(arr5) +
    Number(arr6) +
    Number(arr7) +
    Number(arr8) +
    Number(arr9) +
    Number(arr10) +
    Number(arr11) +
    Number(arr12);

  console.log(totalChecked);

  function saveHandler(e) {
    if (
      questions[0].className === "unchecked" ||
      questions[1].className === "unchecked" ||
      questions[2].className === "unchecked" ||
      questions[3].className === "unchecked" ||
      questions[4].className === "unchecked" ||
      questions[5].className === "unchecked" ||
      questions[6].className === "unchecked" ||
      questions[7].className === "unchecked" ||
      questions[8].className === "unchecked" ||
      questions[9].className === "unchecked" ||
      questions[10].className === "unchecked" ||
      questions[11].className === "unchecked"
    ) {
      e.preventDefault();
      document.querySelector("#next_question > a").href = location.href;
      const uncheckedElement = document.querySelector(
        "#statement > .unchecked"
      );
      uncheckedElement.scrollIntoView();
    } else {
      survey2.push(totalChecked);
      const nowTotal = JSON.stringify(survey2);
      localStorage.setItem("survey2", nowTotal);
      document.querySelector("#next_question > a").href =
        "/mbti/survey3.html#nextButton";
    }
  }

  nextBtn.addEventListener("click", saveHandler);
}

// 선택지 클릭시 아래로 scroll down
const selectBtnAll = document.querySelectorAll(
  "#radioSelect > #options > div > input"
);

for (let i = 0; i < selectBtnAll.length; i++) {
  selectBtnAll[i].addEventListener("click", function () {
    setTimeout(function () {
      window.scrollBy(0, 180);
    }, 500);
  });
}

// slide
window.onload = function () {
  const slideWrap = document.querySelector("#slidePart");
  const slider = slideWrap.querySelector(".slides");
  const slideImgs = slider.querySelectorAll("li");
  const moveButton = slideWrap.querySelector(".controller");

  // image clone
  const clone1 = slideImgs[0].cloneNode(true);
  const cloneLast = slideImgs[slideImgs.length - 1].cloneNode(true);
  slider.insertBefore(cloneLast, slideImgs[0]);
  slider.appendChild(clone1);

  // 주요 변수 초기화
  let currentIdx = 0;
  let translate = 0;
  const speedTime = 100;

  // 셋업
  const sliderCloneImgs = slider.querySelectorAll("li");
  // element.clientWidth는 margin과 border가 제외된 상태에서 padding까지만 적용된 내부의 실제 크기를 가져옴
  // 여기서 border(테두리)는 외부에 속함
  const liWidth = slideImgs[0].clientWidth;
  const sliderWidth = liWidth * sliderCloneImgs.length;
  slider.style.width = `${sliderWidth}px`;
  currentIdx = 1;
  translate = -liWidth;
  slider.style.transform = `translateX(${translate}px)`;

  // slide 실행
  function move(D) {
    currentIdx += -1 * D;
    translate += liWidth * D;
    slider.style.transform = `translateX(${translate}px)`;
    slider.style.transition = `all ${speedTime}ms ease`;
  }

  // click button
  function moveSlide(event) {
    event.preventDefault();
    if (event.target.className === "next") {
      move(-1);
      if (currentIdx === sliderCloneImgs.length - 1)
        setTimeout(() => {
          slider.style.transition = "none";
          currentIdx = 1;
          translate = -liWidth;
          slider.style.transform = `translateX(${translate}px)`;
        }, speedTime);
    } else {
      move(1);
      if (currentIdx === 0) {
        setTimeout(() => {
          slider.style.transition = "none";
          currentIdx = sliderCloneImgs.length - 2;
          translate = -(liWidth * currentIdx);
          slider.style.transform = `translateX(${translate}px)`;
        }, speedTime);
      }
    }
  }
  moveButton.addEventListener("click", moveSlide);

  // 자동 sliding 기능
  function sliding() {
    move(-1);
    if (currentIdx === sliderCloneImgs.length - 1)
      setTimeout(() => {
        slider.style.transition = "none";
        currentIdx = 1;
        translate = -liWidth;
        slider.style.transform = `translateX(${translate}px)`;
      }, speedTime);
  }

  function showSliding() {
    setInterval(sliding, 3000);
  }

  showSliding();
};

// bottom image animation(scroll) 효과
const bottomImgs = document.querySelectorAll("#bottom_imgs > li");

function imageShow() {
  for (let i = 0; i < bottomImgs.length; i++) {
    if (window.scrollY > 3100) {
      setTimeout(function () {
        bottomImgs[i].style.opacity = "1";
        bottomImgs[i].style.transition = "all 0.3s";
      }, 400 * (i + (i + 1)));
    } else if (window.scrollY < 2500) {
      bottomImgs[i].style.opacity = "0";
      bottomImgs[i].style.transition = "all 0.3s";
    }
  }
}

document.addEventListener("scroll", imageShow);
