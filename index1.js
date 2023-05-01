
document.addEventListener("DOMContentLoaded", function() {
    var user_score=document.getElementById("user-score-label");
    var computer_score=document.getElementById("computer-score-label");
    user_score.innerHTML=localStorage.getItem("userScore");
    computer_score.innerHTML=localStorage.getItem("computerScore");
    
  });