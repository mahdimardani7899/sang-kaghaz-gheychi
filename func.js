// app.js

// Complete logic of game inside this function
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	const result = document.querySelector('.result');

	// Function to
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorsBtn = document.querySelector('.scissors');
		const playerOptions = [rockBtn, paperBtn, scissorsBtn];
		const computerOptions = [
			'<img src="rock.png" alt="rock">',
			'<img src="paper.png" alt="paper">',
			'<img src="scissors.png" alt="scissors">',
		];
		const choice = document.querySelector('.choice');
		const options = document.querySelector('.options');
		const move = document.querySelector('.move');
		
		choice.style.display = 'none';

		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click', function () {

				const choiceNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[choiceNumber];
				choice.style.display = 'flex';

				const cChoice = document.querySelector('.c-choice');
				cChoice.innerHTML = computerOptions[choiceNumber];

				move.style.display = 'none';
				options.style.display = 'none';
				

				// Function to check who wins
				winner(this.innerHTML, computerChoice);
				setTimeout(() => {
					if (playerScore != 3 && computerScore != 3) {
						move.style.display = 'flex';
						choice.style.display = 'none';
						options.style.display = 'flex';
						result.style.display = 'none';
					}
				}, "2500");
				result.style.display = 'block';

				// Calling gameOver function
				if (playerScore == 3 || computerScore == 3) {
					gameOver(playerScore, computerScore);
				}
			})
		})

	}

	// Function to decide winner
	const winner = (player, computer) => {
		
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		const pChoice = document.querySelector('.p-choice');
		player = player.toLowerCase();
		computer = computer.toLowerCase();

		if (player === computer) {
			pChoice.innerHTML = player;
			result.innerHTML = 'مساوی';
		}
		else if (player == '<img src="rock.png" alt="rock">') {
			pChoice.innerHTML = player;
			if (computer == '<img src="paper.png" alt="paper">') {
				result.innerHTML = 'کامپیوتر برنده شد';
				computerScore++;
				computerScoreBoard.innerHTML = computerScore;

			} else {
				pChoice.innerHTML = player;
				result.innerHTML = 'شما برنده شدی';
				playerScore++;
				playerScoreBoard.innerHTML = playerScore;
			}
		}
		else if (player == '<img src="scissors.png" alt="scissors">') {
			pChoice.innerHTML = player;
			if (computer == '<img src="rock.png" alt="rock">') {
				pChoice.innerHTML = player;
				result.innerHTML = 'کامپیوتر برنده شد';
				computerScore++;
				computerScoreBoard.innerHTML = computerScore;
			} else {
				pChoice.innerHTML = player;
				result.innerHTML = 'شما برنده شدی';
				playerScore++;
				playerScoreBoard.innerHTML = playerScore;
			}
		}
		else if (player == '<img src="paper.png" alt="paper">') {
			pChoice.innerHTML = player;
			if (computer == '<img src="scissors.png" alt="scissors">') {
				pChoice.innerHTML = player;
				result.innerHTML = 'کامپیوتر برنده شد';
				computerScore++;
				computerScoreBoard.innerHTML = computerScore;
			} else {
				pChoice.innerHTML = player;
				result.innerHTML = 'شما برنده شدی';
				playerScore++;
				playerScoreBoard.innerHTML = playerScore;
			}
		}


	}


	// Function to run when game is over
	const gameOver = (playerScore, computerScore) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const finalResult = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');
		const options = document.querySelector('.options');
		const choice = document.querySelector('.choice');
		chooseMove.style.display = 'none';


		if (playerScore == 3) {
			options.style.display = 'none';
			finalResult.style.fontSize = '2rem';
			finalResult.innerText = 'تبریک شما برنده بازی شدید'
			finalResult.style.color = '#308D46';
			choice.style.display = 'none';
		}
		else if (computerScore == 3) {
			options.style.display = 'none';
			finalResult.style.fontSize = '2rem';
			finalResult.innerText = 'شما بازی را باختید';
			finalResult.style.color = 'red';
			choice.style.display = 'none';
		}

		reloadBtn.innerText = 'دوباره';
		reloadBtn.style.display = 'flex';
		reloadBtn.addEventListener('click', () => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();

}

// Calling the game function
game();
