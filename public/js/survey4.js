const survey4 = []
const answers = []

// checked 되는 모든 버튼 엘리먼트 Array => answers
for(let i=0; i<12; i++){
  answers.push(document.querySelectorAll(`#q${i+1} > #radioSelect > #options > div> input`))
}

const questions = document.querySelectorAll("#statement > li")


function checkedHandler(e){
  target = e.target.id
  index_l = target.indexOf('l')
  index_bar = target.indexOf('-')
  index_survey = target.slice(index_l+1,index_bar)
  survey4[index_survey-1] = Number(e.target.value)

  if(questions.length > index_survey){
    questions[index_survey].className = 'checked'
  }
}
const nextBtn = document.querySelector(".nextBtn");


function saveHandler(e){
  for ( let j =0; j<answers.length; j++){
    for(let i=0; i<answers[j].length; i++){
      if(answers[j][i].checked){
        survey4[j]=Number(answers[j][i].value)  
        console.log(survey4)
        break  
      }
      if(i===answers[j].length-1) survey4.push(0)
      
    }
  }

  if (survey4.indexOf(0)!== -1){
    e.preventDefault();
    document.querySelector("#next_question > a").href = location.href;
    const uncheckedElement = document.querySelector(`#q${survey4.indexOf(0)+1}`)
    uncheckedElement.scrollIntoView();
  }else{
    e.preventDefault()
    survey4[survey4.length] = survey4.reduce((accumulator, current)=> accumulator + current, 0);
    localStorage.setItem("survey4",JSON.stringify(survey4))
    location.href="/mbti/survey5.html#nextButton"
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
