// Switching tabs
$(document).ready(function(){
    $('#assessmentTabs a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  });

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

  function getCorrectAnswer(assessmentNumber) {
    switch (assessmentNumber) {
      case 1:
        return 233168;
      case 2:
        return 4613732;
      case 3:
        return 6857;
      default:
        return null;
    }
  }
