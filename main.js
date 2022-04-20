// variables
let answerDiv = document.querySelectorAll(".answers");
let box = document.querySelectorAll('.box');
let allAnswers = document.querySelectorAll('.answer');
let replay = document.querySelector('.replay');
let showAnswer = document.querySelector('.showAnswer');

// function allow to hide all the dev answers except the one I clicked
function hide(e){
    answerDiv.forEach(item => {
        if(item.dataset.id !== e.currentTarget.nextElementSibling.dataset.id){
            item.style.display='none'   
        }  
    })
   e.currentTarget.nextElementSibling.style.display='block'; 
    
  }
  // get all the select boxes 
  for(var i = 0; i < box.length; i++){
    box[i].addEventListener('click',hide,false)
  }
// correct answer foe each question 
const Answers = [
    {
        correct: "correct"
    },
    {
        correct: "correct"
    },
    {
        correct: "incorrect"
    },
    {
        correct: "correct"
    },
    {
        correct: "correct"
    },
    {
        correct: "incorrect"
    },
    {
        correct: "incorrect"
    },
    {
        correct: "correct"
    }
]


// get all correct and incorrect answers
for(let j =0; j< allAnswers.length ; j++){ 
    allAnswers[j].addEventListener('click',finalAnswer,false)
}
// function to compare the answer of the user and the correct answer
function finalAnswer(e) {
    let currentElement = e.currentTarget.parentElement.parentElement.parentElement;

    if(e.currentTarget.dataset.ans === Answers[currentElement.id -1].correct){

        e.currentTarget.parentElement.previousElementSibling.innerText=e.currentTarget.innerText;  
        disable(e.currentTarget)
        document.getElementById('correct').play();

    }
    else{

        let wrongAnswer = e.currentTarget.parentElement.previousElementSibling;
        wrongAnswer.innerText=e.currentTarget.innerText;
        window.setTimeout(function(){wrongAnswer.innerText="";}, 1000)
        document.getElementById('incorrect').play();  
    }

    answerDiv.forEach(item => {
    item.style.display='none' 
    })

}
// replay icon
replay.addEventListener('click', () => {
        box.forEach(item => {
                item.innerText="";
                enable(item)
        }) 
    })
// show answer icon
showAnswer.addEventListener('click' , function() {
    allAnswers.forEach(item => {

        if(item.dataset.ans === Answers[item.parentElement.parentElement.parentElement.id -1].correct) {

            item.parentElement.previousElementSibling.innerText = item.innerText;
            disable(item)
        }
    })
})


// disable element (prevent from clicking)
function disable (element) {
    element.parentElement.parentElement.parentElement.classList.add('not-active')
}
// enable element, remove not-active class 
function enable (element) {
    element.parentElement.parentElement.classList.remove('not-active')
}
// reload icon , it reload only the active page!!
document.querySelector('.reload').addEventListener('click', function() {
    let currentSlide = document.querySelector('.active');
    let child = currentSlide.querySelectorAll('.box');
    child.forEach(item => {
        item.innerText="";
        enable(item)
    })
    
})
// controlling of number of pages
document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('click', function() {
        let currentSlideNumber = document.querySelector('.active').dataset.num;
        document.querySelector('.pageNumber').innerText = `${currentSlideNumber} of 2`
    })
})

// spinner

window.addEventListener('load', () => {
    // Function to hide the Spinner
  setTimeout(function hideSpinner() {
    document.querySelector('.loading')
            .style.display = 'none';
}, 3000);
  });
 

