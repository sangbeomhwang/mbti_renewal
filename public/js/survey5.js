let item = localStorage.getItem("survey5");
if (item === null) {
  const initialState = [];
  const state = JSON.stringify(initialState);
  localStorage.setItem("survey5", state);
  item = state; // 바로 위의 코드까지만 수행하면 item이 "null"이 되므로 string 데이터로 형변환한 state 변수의 값을 넣어줌!!
}

const survey5 = JSON.parse(item);

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

const submitBtn = document.querySelector(".submitBtn");

const arr1 = [];
const arr2 = [];
const arr3 = [];
const arr4 = [];
const arr5 = [];
const arr6 = [];

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

  const totalChecked =
    Number(arr1) +
    Number(arr2) +
    Number(arr3) +
    Number(arr4) +
    Number(arr5) +
    Number(arr6);

  console.log(totalChecked);

  function divideHandler() {
    survey5.push(totalChecked);

    if (
      questions[0].className === "unchecked" ||
      questions[1].className === "unchecked" ||
      questions[2].className === "unchecked" ||
      questions[3].className === "unchecked" ||
      questions[4].className === "unchecked" ||
      questions[5].className === "unchecked"
    ) {
      const uncheckedElement = document.querySelector(
        "#statement > .unchecked"
      );
      uncheckedElement.scrollIntoView();
    } else {
      let lastSurvey = survey5[survey5.length - 1];

      let item1 = localStorage.getItem("survey1");
      const survey1 = JSON.parse(item1);
      let firstSurvey = survey1[survey1.length - 1];

      let item2 = localStorage.getItem("survey2");
      const survey2 = JSON.parse(item2);
      let secondSurvey = survey2[survey2.length - 1];

      let item3 = localStorage.getItem("survey3");
      const survey3 = JSON.parse(item3);
      let thirdSurvey = survey3[survey3.length - 1];

      let item4 = localStorage.getItem("survey4");
      const survey4 = JSON.parse(item4);
      let forthSurvey = survey4[survey4.length - 1];

      let totalSurvey =
        firstSurvey + secondSurvey + thirdSurvey + forthSurvey + lastSurvey;
      const mbti = [
        "intj",
        "intp",
        "entj",
        "entp",
        "infj",
        "infp",
        "enfj",
        "enfp",
        "istj",
        "isfj",
        "estj",
        "esfj",
        "istp",
        "isfp",
        "estp",
        "esfp",
      ];

      if (totalSurvey > 354) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[0]}`;
      } else if (totalSurvey > 334) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[1]}`;
      } else if (totalSurvey > 314) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[2]}`;
      } else if (totalSurvey > 294) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[3]}`;
      } else if (totalSurvey > 274) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[4]}`;
      } else if (totalSurvey > 254) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[5]}`;
      } else if (totalSurvey > 234) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[6]}`;
      } else if (totalSurvey > 214) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[7]}`;
      } else if (totalSurvey > 194) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[8]}`;
      } else if (totalSurvey > 174) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[9]}`;
      } else if (totalSurvey > 154) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[10]}`;
      } else if (totalSurvey > 134) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[11]}`;
      } else if (totalSurvey > 114) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[12]}`;
      } else if (totalSurvey > 85) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[13]}`;
      } else if (totalSurvey > 64) {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[14]}`;
      } else {
        location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[15]}`;
      }
    }
  }

  submitBtn.addEventListener("click", divideHandler);
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
