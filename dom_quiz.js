(function() {
  var score = 0;
  var newscore = 0;
  var count = 0;
  var question = document.getElementById('question');
  var answer = document.getElementById('answer');

  /*question.innerHTML = "Would you like to start the quiz?";

    if (answer == "no") {
      alert("Thanks for playing.");
    }*/

  var questionaire = ["What is the capital of Hawaii?", "What is the state bird?",
      "What is the Hawaiian name for Diamond Head?", "What is the traditional dance of Hawaii?",
      "In what year did Hawaii become a state?"];

  var correctAnswer = ["honolulu", "nene", "leahi", "hula", "1959"];

  var submitBtn = document.getElementById('submit');

  submitBtn.onclick = function() {
    //console.log(answer.value);

    question.innerHTML = questionaire[count];
    count += 1;
    if (count >= questionaire.length) {
      question.innerHTML = "You have completed the quiz.";
    }

    answer.innerHTML = correctAnswer[count];
    count += 1;
    
    if ((document.getElementById('answer')questionaire[count]) == (document.getElementById('correctAnswer')correctAnswer[count]) {
        var newscore = newscore+1;
        alert("Correct!");
      } else {
        newscore = newscore+0; 
        alert("Sorry, not even close.");
    }
    alert("Congratulations, your score is " + score + " out of 5.");
  
  }

})();