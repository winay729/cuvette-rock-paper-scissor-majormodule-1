
var computer_score=localStorage.getItem("computerScore");
var user_score=localStorage.getItem("userScore");

function closeRules(){
    var box= document.getElementById("rulesbox");
    box.style.display="none";
}

function openRules(){
    var box= document.getElementById("rulesbox");
    box.style.display="inline-block";
}

function userclicked(choice){
    // console.log(choice);
    var choices=["rock", "paper", "scissor"];
    var userchoice=choice;
    var computerchoice=choices[Math.floor(Math.random()*3)];
    // console.log(computerchoice);
    var user_computer_clicks=document.getElementById("user-computer-clicks");
    var decision_content=document.getElementById("decision-content");
    var header_stripe=document.getElementById("heading-stripe");
    var computer_picked=document.getElementById("computer-picked");
    var user_picked=document.getElementById("user-picked");
    
    //ties 
    if(userchoice==computerchoice){
        // console.log("tie");
        user_computer_clicks.style.display="inline-block";
        decision_content.innerHTML="ITS A TIE";
        header_stripe.style.display="inline-block";
        var user_container=document.getElementById("user-picked-container");
        var computer_container=document.getElementById("computer-picked-container");
        computer_container.style.animation="ripple 2s infinite ease";
        user_container.style.animation="ripple 2s infinite ease";
        computer_picked.src="assets/images/"+userchoice +".png";
        user_picked.src="assets/images/"+userchoice +".png";
        
    }
    //losses
    else if(userchoice=="rock" && computerchoice=="paper"){
        computer_picked.src="assets/images/paper.png";
        user_picked.src="assets/images/rock.png";
        youLost();
    }
     else if(userchoice=="paper" && computerchoice=="scissor") {
        computer_picked.src="assets/images/scissor.png";
        user_picked.src="assets/images/paper.png";
        youLost();
     } 
     else if(userchoice=="scissor" && computerchoice=="rock"){
        computer_picked.src="assets/images/rock.png";
        user_picked.src="assets/images/scissor.png";
        youLost();
    }
    //win
    else{
        // console.log("win");
        computer_picked.src="assets/images/"+computerchoice+".png";
        user_picked.src="assets/images/"+userchoice+".png";
        youWin();
    }
}

function tie_lose_playAgain(){
    var user_computer_clicks=document.getElementById("user-computer-clicks");
    var computer_picked=document.getElementById("computer-picked");
    var user_picked=document.getElementById("user-picked");
    user_computer_clicks.style.display="none";
    computer_picked.style.animation="none";
    user_picked.style.animation="none";
}

function youLost(){
    var user_computer_clicks=document.getElementById("user-computer-clicks");
    var decision_content=document.getElementById("decision-content");
    var header_stripe=document.getElementById("heading-stripe");
    // console.log("lose");
    var computer_container=document.getElementById("computer-picked-container");
    var user_container=document.getElementById("user-picked-container");
    computer_container.style.animation="ripple 2s infinite ease";
    user_container.style.animation="none";
    user_computer_clicks.style.display="inline-block";
    decision_content.innerHTML="YOU LOSE";
    header_stripe.style.display="inline-block";
    computer_score=localStorage.getItem("computerScore");
    computer_score++;
    localStorage.setItem("computerScore", computer_score);
    // console.log("computer: ",localStorage.getItem("computerScore"));
    // console.log("user: ",localStorage.getItem("userScore"));
    var comp_score=document.getElementById("computer-score-label");
    comp_score.innerHTML=localStorage.getItem("computerScore");
    
}

function youWin(){
    var user_computer_clicks=document.getElementById("user-computer-clicks");
    var decision_content=document.getElementById("decision-content");
    var header_stripe=document.getElementById("heading-stripe");
    // console.log("win");
    var playAgain= document.getElementById("playAgain-btn");
    var user_container=document.getElementById("user-picked-container");
    var computer_container=document.getElementById("computer-picked-container");
    user_container.style.animation="ripple 2s infinite ease";
    computer_container.style.animation="none";
    user_computer_clicks.style.display="inline-block";
    playAgain.style.display="none";
    decision_content.innerHTML="<a href='youwin.html'>YOU WIN</a>";
    header_stripe.style.display="inline-block";
    user_score=localStorage.getItem("userScore");
    user_score++;
    localStorage.setItem("userScore", user_score);
    // console.log("computer: ",localStorage.getItem("computerScore"));
    // console.log("user: ",localStorage.getItem("userScore"));
    var usr_score=document.getElementById("user-score-label");
    usr_score.innerHTML=localStorage.getItem("userScore");
}

function reset(){
    //clear items in local storage
    localStorage.setItem("userScore", 0);
    localStorage.setItem("computerScore", 0);
    //reset scores
    var usr_score=document.getElementById("user-score-label");
    var comp_score=document.getElementById("computer-score-label");
    usr_score.innerHTML=localStorage.getItem("userScore");
    comp_score.innerHTML=localStorage.getItem("computerScore");
}


  
  


  
