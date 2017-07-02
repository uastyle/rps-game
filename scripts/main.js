 var you_win = 0,
     comp_win = 0;

 function startGame(user) {
     var userChoice = user;
     var computerChoice = Math.random();
     if (computerChoice < 0.34) {
         computerChoice = "rock";
     } else if (computerChoice <= 0.67) {
         computerChoice = "paper";
     } else {
         computerChoice = "scissors";
     }
     console.log("Computer: " + computerChoice);
     var compare = function(choice1, choice2) {
         if (choice1 === choice2) {
             return "Draw!";
         } else if (choice1 === "rock") {
             if (choice2 === "scissors") {
                 you_win = you_win + 1;
                 return "You win!";
             } else {
                 comp_win = comp_win + 1;
                 return "Computer win!";
             }
         } else if (choice1 === "paper") {
             if (choice2 === "rock") {
                 you_win = you_win + 1;
                 return "You win!";
             } else {
                 comp_win = comp_win + 1;
                 return "Computer win!";
             }
         } else if (choice1 === "scissors") {
             if (choice2 === "paper") {
                 you_win = you_win + 1;
                 return "You win!";
             } else {
                 comp_win = comp_win + 1;
                 return "Computer win!";
             }
         }
     };
     var result = compare(userChoice, computerChoice);
     document.getElementById("result").innerHTML = result;
     document.getElementById("you_win").innerHTML = you_win;
     document.getElementById("comp_win").innerHTML = comp_win;
     console.log(you_win);
 }

 function newGame() {
     document.getElementById("result").innerHTML = 'Who will win?';
     document.getElementById("you_win").innerHTML = '0';
     document.getElementById("comp_win").innerHTML = '0';
 }