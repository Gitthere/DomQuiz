(function() {
  var score=0;
  var newscore=0;

  var quiz_ques = document.getElementById('question');
    quiz_ques.innerHTML = 'What is the capital of Hawaii?';
    return quiz_ques;

    #submit.onclick = function() {
      if (document.getElementById('answer') == "honolulu") {
        var newscore = newscore+1;
        alert("Correct!")
      } else {
        newscore = newscore+0; 
        alert("Sorry, the answer is Honolulu.")
      }
  }
})();