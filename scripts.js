// Switching tabs
$(document).ready(function(){
    $('#assessmentTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  });

  //checking answers

  function checkAnswer(assessmentNumber) {
    var answer;
    var resultId;
    
    switch (assessmentNumber) {
      case 1:
        answer = document.getElementById("answer1").value;
        resultId = "result1";
        break;
      case 2:
        answer = document.getElementById("answer2").value;
        resultId = "result2";
        break;
      case 3:
        answer = document.getElementById("answer3").value;
        resultId = "result3";
        break;
      default:
        return;
    }
    
    if (answer === "") {
      document.getElementById(resultId).innerText = "Please enter an answer.";
    } else if (parseInt(answer) === getCorrectAnswer(assessmentNumber)) {
      document.getElementById(resultId).innerText = "Correct!";
    } else {
      document.getElementById(resultId).innerText = "Incorrect. Try again.";
    }
  }




//solution 1
function calculateSum() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var max = parseInt(document.getElementById("max").value);

  var sum = 0;
  for (var i = 1; i < max; i++) {
      if (i % num1 === 0 || i % num2 === 0) {
          sum += i;
      }
  }

  document.getElementById("result").innerHTML = "The sum of multiples of " + num1 + " and " + num2 + " below " + max + " is: " + sum;
}

  // Assessment 2 solution 
  function checkAnswer2(){
    var limit =parseInt(document.getElementById("answer2").value);
    let a = 1, b = 2; 
    let temp=0;
    let total = 0;
    while (b <= limit) {
      if (b % 2 === 0) {
        total += b;
      }
       temp = a + b;
      a = b;
      b = temp;
    }
    document.getElementById("result2").innerText = "The sum of the even-valued terms " + limit +" : "+ total ;

  }

  // Assessment 3 solution
  function checkAnswer() {
    var limit =parseInt(document.getElementById("answer3").value);
    let factor = 2;


    while ( limit > 1) {
      if (limit % factor === 0) {
        limit /= factor;
      } else {
        factor++;
      }
    }
    document.getElementById("result3").innerText = "The largest prime factor of the number " +" : "+ factor ;
  }

  
