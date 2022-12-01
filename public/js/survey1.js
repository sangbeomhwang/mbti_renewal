const survey1 = [0,0,0,0,0,0,0,0,0,0,0,0]
const answers = []

// checked 되는 모든 버튼 엘리먼트 Array => answers
for(let i=0; i<12; i++){
  answers.push(document.querySelectorAll(`#q${i+1} > #radioSelect > #options > div> input`))
}

console.log(answers)

function checkedHandler(e){
  target = e.target.id
  console.log(target)
  index_l = target.indexOf('l')
  index_bar = target.indexOf('-')
  index_survey = target.slice(index_l+1,index_bar)
  console.log(e.target.value)
  survey1[index_survey-1] = Number(e.target.value)
  console.log(survey1)
}
const nextBtn = document.querySelector(".nextBtn");


function saveHandler(e){
  if (survey1.indexOf(0)!== -1){
    e.preventDefault();
    document.querySelector("#next_question > a").href = location.href;
    const uncheckedElement = document.querySelector(`#q${survey1.indexOf(0)+1}`)
    uncheckedElement.scrollIntoView();
  }else{
    e.preventDefault()
    survey1[survey1.length] = survey1.reduce((accumulator, current)=> accumulator + current, 0);
    localStorage.setItem("survey1",JSON.stringify(survey1))
    location.href="/mbti/survey2.html#nextButton"
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
