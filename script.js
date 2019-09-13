let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice()
{
	const choices = ['r', 'p', 's'];
	return (choices[Math.floor(Math.random()*3)]);
}

function convert(letter)
{
	if(letter == 'r')
		return "Rock";
	if(letter == 'p')
		return "Paper";
	if(letter == 's')
		return "Scissor";
}

function win(user, computer)
{
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smalluser = "user".fontsize(3).sub().fontcolor("red");
	const smallcomp = "comp".fontsize(3).sub().fontcolor("red");
	result_div.innerHTML = convert(user)+smalluser+" beats "+convert(computer)+smallcomp+" .You Win :)";
	document.getElementById(user).classList.add('green-glow');
	setTimeout(function(){document.getElementById(user).classList.remove('green-glow');}, 300);
	console.log("Win");
}

function draw(user, computer)
{
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smalluser = "user".fontsize(3).sub().fontcolor("red");
	const smallcomp = "comp".fontsize(3).sub().fontcolor("red");
	result_div.innerHTML = convert(user)+smalluser+" clashed with "+convert(computer)+smallcomp+" .Its Draw!";
	document.getElementById(user).classList.add('grey-glow');
	setTimeout(function(){document.getElementById(user).classList.remove('grey-glow');}, 300);
	console.log("draw");
}

function loose(user, computer)
{
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	userScore_span.innerHTML = userScore;
	const smalluser = "user".fontsize(3).sub().fontcolor("red");
	const smallcomp = "comp".fontsize(3).sub().fontcolor("red");
	result_div.innerHTML = convert(computer)+smallcomp+" beats "+convert(user)+smalluser+" .You Loose :(";
	document.getElementById(user).classList.add('red-glow');
	setTimeout(function(){document.getElementById(user).classList.remove('red-glow');}, 300);
	console.log("Loose");
}
function game(userChoice)
{
	computerChoice = getComputerChoice();
	switch(userChoice+computerChoice)
	{
		case "pr":
		case "rs":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
		case "rp":
		case "sr":
		case "ps":
			loose(userChoice, computerChoice);
			break;
	}
	if(userScore >= 10)
	{
		window.location.replace("win.html","_top");
		console.log("google")
	}
	if(computerScore >= 10)
	{
		window.location.replace("loose.html","_top");
		console.log("google")
	}
}

game();

function main()
{
	rock_div.addEventListener('click', function(){
		game("r");
	});
	paper_div.addEventListener('click', function(){
		game("p");
	});
	scissor_div.addEventListener('click', function(){
		game("s");
	});
}

main();