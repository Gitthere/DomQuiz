(function() {
  var PLAYER_IS_PLAYING = false;
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

  question.innerHTML = "Would you like to start the quiz?";

  var submitBtn = document.getElementById('submit');
  
  function ButtonSubmitTitleScreen () {

    if (answer.value[0].toLowerCase() == "y") {

    answer.value = "";

    question.innerHTML = questionaire[count];

    PLAYER_IS_PLAYING = true;

    } else {

      //DONT WANT TO PLAY
      alert("See ya.");
    }
  }  

  function ButtonSubmitGameScreen () {

    if (answer.value.toLowerCase() === correctAnswer[count]) {
     //console.log(answer.value, questionaire[count], correctAnswer[count]
     alert("That's correct.");
     newscore = newscore+1;
     count++;
    } else {
       alert("Sorry, that's wrong.");
       //increment count variable
       count++;
    }

    question.innerHTML = questionaire[count];
    
    answer.value = '';
        
    if (count >= questionaire.length) {
          question.innerHTML = "The quiz is complete."
          alert("Thank you for taking the quiz.")
          //score tabulation
          alert("Congratulations, your score is " + newscore + " out of 5.");  
    } 
  }

  submitBtn.onclick = function () {
    //BEGIN GAME
    if (!PLAYER_IS_PLAYING) {
      ButtonSubmitTitleScreen();
    } else {
      //GAME MODE
      ButtonSubmitGameScreen();
    }
  }


  //OLD CODE BELOW - NEW AND IMPROVED ABOVE
  //Eliminated use of double submitBtn.onclick function
  //should have only one.  NEW code created two "states" for game:
  //One is game mode, the other is not game mode.


  //Set start text
  // question.innerHTML = "Would you like to start the quiz?";

  // var submitBtn = document.getElementById('submit');

  // submitBtn.onclick = function() {
  //   if (answer.value === "no") {
  //     alert("See ya.");
  //   } else if (answer.value[0].toLowerCase() === "y"){
  //     //start the game
  //     al
      
  //   }
  //       answer.value = '';

  //       //set questions
  //       question.innerHTML = questionaire[count];

  //       submitBtn.onclick = function() {
  //       //check answer and increment score
  //         if (answer.value.toLowerCase() === correctAnswer[count]) {
  //           //console.log(answer.value, questionaire[count], correctAnswer[count]
  //           alert("That's correct.");
  //           newscore = newscore+1;
  //           count++;
  //           } else {
  //           alert("Sorry, that's wrong.");
  //         //increment count variable
  //           count++;
  //         }

  //       question.innerHTML = questionaire[count];
  //       answer.value = '';
        
  //       if (count >= questionaire.length) {
  //         question.innerHTML = "The quiz is complete."
  //         alert("Thank you for taking the quiz.")
  //         //score tabulation
  //         alert("Congratulations, your score is " + newscore + " out of 5.");  
        
})();