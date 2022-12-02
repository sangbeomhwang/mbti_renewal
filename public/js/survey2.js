const survey2 = []
const answers = []

const count = document.querySelectorAll("#statement > li")
// checked 되는 모든 버튼 엘리먼트 Array => answers
for(let i=0; i<count.length; i++){
  answers.push(document.querySelectorAll(`#q${i+1} > #radioSelect > #options > div> input`))
}

for ( let j =0; j<answers.length; j++){
  for(let i=0; i<answers[j].length; i++){
    if(answers[j][i].checked){
      survey2[j]=Number(answers[j][i].value)  
      break  
    }
    if(i===answers[j].length-1) survey2.push(0)
    
  }
}

const questions = document.querySelectorAll("#statement > li")


function checkedHandler(e){
  target = e.target.id
  index_l = target.indexOf('l')
  index_bar = target.indexOf('-')
  index_survey = target.slice(index_l+1,index_bar)
  survey2[index_survey-1] = Number(e.target.value)
  if(questions.length > index_survey){
    questions[index_survey].className = 'checked'
  }
}
const nextBtn = document.querySelector(".nextBtn");


function saveHandler(e){
  for ( let j =0; j<answers.length; j++){
    for(let i=0; i<answers[j].length; i++){
      if(answers[j][i].checked){
        survey2[j]=Number(answers[j][i].value)  
        break  
      }
      
    }
  }

  if (survey2.indexOf(0)!== -1){
    e.preventDefault();
    // document.querySelector("#next_question > a").href = location.href;
    const uncheckedElement = document.querySelector(`#q${survey2.indexOf(0)+1}`)
    uncheckedElement.scrollIntoView();
  }else{
    e.preventDefault()
    survey2[survey2.length] = survey2.reduce((a, b)=> a + b, 0)
    localStorage.setItem("survey2",JSON.stringify(survey2))
    location.href="/mbti/survey3.html#nextButton"
  }
}
nextBtn.addEventListener('click',saveHandler)

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
