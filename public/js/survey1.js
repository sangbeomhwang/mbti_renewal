const survey1 = []
const answers = []

const count = document.querySelectorAll("#statement > li")
// checked 되는 모든 버튼 엘리먼트 Array => answers
for(let i=0; i<count.length; i++){
  answers.push(document.querySelectorAll(`#q${i+1} > #radioSelect > #options > div> input`))
}


for ( let j =0; j<answers.length; j++){
  for(let i=0; i<answers[j].length; i++){
    if(answers[j][i].checked){
      survey1[j]=Number(answers[j][i].value)  
      break  
    }
    if(i===answers[j].length-1) survey1.push(0)
    
  }
}

const questions = document.querySelectorAll("#statement > li")


function checkedHandler(e){
  target = e.target.id
  index_l = target.indexOf('l')
  index_bar = target.indexOf('-')
  index_survey = target.slice(index_l+1,index_bar)
  survey1[index_survey-1] = Number(e.target.value)
  if(questions.length > index_survey){
    questions[index_survey].className = 'checked'
  }
}
const nextBtn = document.querySelector(".nextBtn");


function saveHandler(e){
  for ( let j =0; j<answers.length; j++){
    for(let i=0; i<answers[j].length; i++){
      if(answers[j][i].checked){
        survey1[j]=Number(answers[j][i].value)  
        break  
      }
      
    }
  }

  if (survey1.indexOf(0)!== -1){
    e.preventDefault();
    // document.querySelector("#next_question > a").href = location.href;
    const uncheckedElement = document.querySelector(`#q${survey1.indexOf(0)+1}`)
    uncheckedElement.scrollIntoView();
  }else{
    e.preventDefault()
    survey1[survey1.length] = survey1.reduce((a, b)=> a + b, 0)
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
