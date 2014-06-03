(function() {
  var score = 0;

  var quiz_ques = document.getElementById('question');
  var newanswer = document.getElementById('answer');

  quiz_ques.innerHTML = 'Would you like to start the quiz?';

  var questionaire = [
    {
      quiz_ques: "What is the capital of Hawaii?",
      newanswer: "honolulu"
    },
    {
      quiz_ques: "what is the state bird?",
      newanswer: "nene"
    },
    {
      quiz_ques: "What is the Hawaiian name for Diamond Head?",
      newanswer: "leahi"
    },
    {
      quiz_ques: "What is the traditional dance of Hawaii?",
      newanswer:"hula"
    },
    {
      quiz_ques: "In what year did Hawaii become a state?",
      newanswer: "1959"
    }
  ];

  var submitBtn = document.getElementById('submit');

  submitBtn.onclick = function() {
    //console.log(answer.value);

    for (var i = 0; i < questionaire.length; i++) {
      var newanswer = prompt(questionaire[i].quiz_ques) 

      if (newanswer === questionaire[i].newanswer) {
        score++;
      }    
    }

  alert("Congratulations, your score is " + score + " out of 5.");
  
  }
  
})();