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

  // Assessment 1 solution in JavaScript
  function sumMultiplesOf3And5(limit) {
    let results = 0;
    for (let i = 0; i < limit; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        results += i;
      }
    }
    return results;
  }

  // Assessment 2 solution in JavaScript
  function sumEvenFibonacciNumbers(limit) {
    let a = 1, b = 2;
    let total = 0;
    while (a <= limit) {
      if (a % 2 === 0) {
        total += a;
      }
      let temp = b;
      b = a + b;
      a = temp;
    }
    return total;
  }

  // Assessment 3 solution in JavaScript
  function largestPrimeFactor(n) {
    let factor = 2;
    while (n > 1) {
      if (n % factor === 0) {
        n /= factor;
      } else {
        factor++;
      }
    }
    return factor;
  }

  // To get the results, you can call these functions and display the output
  console.log(sumMultiplesOf3And5(1000));  // Output: 233168
  console.log(sumEvenFibonacciNumbers(4000000));  // Output: 4613732
  console.log(largestPrimeFactor(600851475143));  // Output: 6857
