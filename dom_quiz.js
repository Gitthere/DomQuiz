(function() {
  var newscore = 0;
  var count = 0;
  var question = document.getElementById('question');
  var answer = document.getElementById('answer');

  var questionaire = [
    "What is the capital of Hawaii?",
    "What is the state bird?",
    "What is the Hawaiian name for Diamond Head?",
    "What is the traditional dance of Hawaii?",
    "In what year did Hawaii become a state?"
    ];

  var correctAnswer = [
    "honolulu",
    "nene",
    "leahi",
    "hula",
    "1959"
    ];

  
  //Set start text
  question.innerHTML = questionaire[count];

  question.innerHTML = "Would you like to start the quiz?";


  var submitBtn = document.getElementById('submit');

  submitBtn.onclick = function() {
    //console.log(answer.value);

    answer.value = '';

    //set questions
    question.innerHTML = questionaire[count];
    //count += 1;

    //check answer and increment score
    if (answer.value === correctAnswer[count]) {
      alert("That's correct.");
      newscore = newscore+1;
      } else {
      alert("Sorry, that's wrong.");
    }

    //increment count variable
    count++;

    if (count > questionaire.length) {
      alert("Thank you for taking the quiz.")
      alert("Congratulations, your score is " + newscore + " out of 5.");  
    }
    
    //score tabulation
  
  }

})();