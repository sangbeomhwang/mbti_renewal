const survey5 = []
const answers = []


const count = document.querySelectorAll("#statement > li")
// checked 되는 모든 버튼 엘리먼트 Array => answers
for(let i=0; i<count.length; i++){
  answers.push(document.querySelectorAll(`#q${i+1} > #radioSelect > #options > div> input`))
}

for ( let j =0; j<answers.length; j++){
  for(let i=0; i<answers[j].length; i++){
    if(answers[j][i].checked){
      survey5[j]=Number(answers[j][i].value)  
      break  
    }
    if(i===answers[j].length-1) survey5.push(0)
    
  }
}

const questions = document.querySelectorAll("#statement > li")


function checkedHandler(e){
  target = e.target.id
  index_l = target.indexOf('l')
  index_bar = target.indexOf('-')
  index_survey = target.slice(index_l+1,index_bar)
  survey5[index_survey-1] = Number(e.target.value)

  if(questions.length > index_survey){
    questions[index_survey].className = 'checked'
  }
}


const submitBtn = document.querySelector(".submitBtn");

function submitHandler(e){
  for ( let j =0; j<answers.length; j++){
    for(let i=0; i<answers[j].length; i++){
      if(answers[j][i].checked){
        survey5[j]=Number(answers[j][i].value)  
        break  
      }      
    }
  }

  if (survey5.indexOf(0)!== -1){
    e.preventDefault();
    const uncheckedElement = document.querySelector(`#q${survey5.indexOf(0)+1}`)
    uncheckedElement.scrollIntoView();
  }else{
    e.preventDefault()
    survey5[survey5.length] = survey5.reduce((a, b)=> a + b, 0)

    let totalSurvey = survey5[survey5.length-1]
    for(let i = 0; i< 4; i++){
      sum = JSON.parse(localStorage.getItem(`survey${i+1}`))
      totalSurvey += sum[sum.length-1]
    }
    alert(`totalSurvey = ${totalSurvey}`)


    const mbti = [
      "esfp"
      ,"estp"
      ,"isfp"
      ,"istp"
      ,"esfj"
      ,"estj"
      ,"isfj"
      ,"istj"
      ,"enfp"
      ,"enfj"
      ,"infp"
      ,"infj"
      ,"entp"
      ,"entj"
      ,"intp"
      ,"intj"
    ];

    location.href = `https://www.16personalities.com/ko/%EC%84%B1%EA%B2%A9%EC%9C%A0%ED%98%95-${mbti[parseInt(totalSurvey-64)>0?parseInt((totalSurvey-64)/20):0]}`
  }


}

submitBtn.addEventListener('click',submitHandler)

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

