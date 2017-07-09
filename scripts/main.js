var you_win=0, comp_win=0;

function startGame(user) {
	var userChoice=user;
	var computerChoice=Math.random();
	if (computerChoice < 0.34) {
		computerChoice="rock";
	} else if (computerChoice <= 0.67) {
		computerChoice="paper";
	} else {
		computerChoice="scissors";
	}
	console.log("Computer: " + computerChoice);

	var compare=function (choice1, choice2) {
		if (choice1===choice2) {
			return "Draw!";
		} else if (choice1==="rock") {
			if (choice2==="scissors") {
				you_win=you_win +1;
				return "You win!";
			} else {
				comp_win=comp_win +1;
				return "Computer win!";
			}
		} else if (choice1==="paper") {
			if (choice2==="rock") {
				you_win=you_win +1;
				return "You win!";
			} else {
				comp_win=comp_win +1;
				return "Computer win!";
			}
		} else if (choice1==="scissors") {
			if (choice2==="paper") {
				you_win=you_win +1;
				return "You win!";
			} else {
				comp_win=comp_win +1;
				return "Computer win!";
			}
		}
	};
	var result=compare(userChoice, computerChoice);
	document.getElementById("result").innerHTML=result;
	document.getElementById("you_win").innerHTML=you_win;
	document.getElementById("comp_win").innerHTML=comp_win;
	console.log(you_win);
}
function newGame() {
	document.getElementById("result").innerHTML='Who will win?';
	document.getElementById("you_win").innerHTML='0';
	document.getElementById("comp_win").innerHTML='0';
}

var uk = {
	title: "Камінь, ножиці, папір – грай з комп'ютером!",
	lang: "English, please",
	h1: "Камінь, но<img class='o' src='images/scissors.png'/>иці, папір",
	rules: "Ножиці ріжуть папір. Папір накриває камінь. Камінь ламає ножиці.",
	action: "Зроби свій вибір!",
	h4: "Хто виграє?",
	h2: "Рахунок:",
	result1: "Ти: <span id='you_win'>0</span>",
	result2: "Комп'ютер: <span id='comp_win'>0</span>",
	rematch: "Реванш!"
}
var en = {
	title: "Rock, Paper, Scissors – play live!",
	lang: "Українською",
	h1: "R<img class='o' src='images/rock.png'/>ck Paper Scissors",
	rules: "Scissors cuts paper. Paper covers rock. Rock crushes scissors.",
	action: "Take your pick!",
	h4: "Who will win?",
	h2: "Score:",
	result1: "You: <span id='you_win'>0</span>",
	result2: "Computer: <span id='comp_win'>0</span>",
	rematch: "Rematch!"
}
var n = 0;
var button = document.querySelector('button');
button.onclick = ()=> {
	if (n == 0) {
		n++
		document.querySelector('title').innerHTML = uk.title;
		document.querySelector('button').innerHTML = uk.lang;
		document.querySelector('h1').innerHTML = uk.h1;
		document.querySelector('p:first-child').innerHTML = uk.rules;
		document.querySelector('p:nth-child(2)').innerHTML = uk.action;
		document.querySelector('h4').innerHTML = uk.h4;
		document.querySelector('h2').innerHTML = uk.h2;
		document.querySelector('p:nth-child(3)').innerHTML = uk.result1;
		document.querySelector('p:nth-child(4)').innerHTML = uk.result2;
		document.getElementById('rematch').innerHTML = uk.rematch;
	} else {
		n--
		document.querySelector('title').innerHTML = en.title;
		document.querySelector('button').innerHTML = en.lang;
		document.querySelector('h1').innerHTML = en.h1;
		document.querySelector('p:first-child').innerHTML = en.rules;
		document.querySelector('p:nth-child(2)').innerHTML = en.action;
		document.querySelector('h4').innerHTML = en.h4;
		document.querySelector('h2').innerHTML = en.h2;
		document.querySelector('p:nth-child(3)').innerHTML = en.result1;
		document.querySelector('p:nth-child(4)').innerHTML = en.result2;
		document.getElementById('rematch').innerHTML = en.rematch;
	}
}