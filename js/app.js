console.log("Sanity Check!")


// let setHeroHealth = 6
// let cpuHealth = 10
// let round = 1

// Start Menu

// Make background

// Make Start Menu Music
const bkgMusic = {
    startMusic: new Audio('music/skyrimmenu.mp3'),
}
// const lvlUp = {
//     beginBtn: new Audio('music/lvlUpSound.mp3')
// }
// // Make Start Button
document.querySelector(".intro button").addEventListener("mouseenter", () => {
    bkgMusic.startMusic.play()
 })
// // Music starts when button is clicked 
// document.querySelector(".intro button").addEventListener("click", () => {
//     bkgMusic.startMusic.pause()
//     lvlUp.beginBtn.play()
// })

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// Begin Game
const game = () => {
    let pHealth = 10;
    let cHealth = 10;
  
  // Start the game
    const startGame = () => {
      const playBtn = document.querySelector('.intro button');
      const introScreen = document.querySelector('.intro');
      const match = document.querySelector('.match');
      const lvlUp = {
         beginBtn: new Audio('music/lvlUpSound.mp3')
      }
       playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add("fadeIn");
            lvlUp.beginBtn.play();
            bkgMusic.beginBtn.pause();
      }); 
    };
      //re add ")" 43

  // Play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-action')
    const cpuHand = document.querySelector('.cpu-action')

    // cpuOptions
    const cpuOptions = ['sword', 'magika', 'archery'];
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Computer choice
            const cpuNum = Math.floor(Math.random() * 3);
            const cpuChoice = cpuOptions[cpuNum];
            console.log(cpuChoice)
            // Call compare moves
            compMoves(this.textContent, cpuChoice);

            // Do animations
            playerHand.src = `images/knightattackstrip${this.textContent}.png`
            cpuHand.src = `images/knightattackstrip${this.textContent}.png`
        });
    });
  };

  const updateHealth = () => {
      const playerHealth = document.querySelector('.player-health');
      const cpuHealth = document.querySelector('.cpu-health');
      pHealth.textContent = pHealth;
      cpuHealth.textContent = cpuHealth;
  }

  const compMoves = (userChoice,  cpuChoice) => {
      const winner = document.querySelector('.winner')
    if (userChoice === cpuChoice){
        winner.textContent = 'It is a tie';
        return;
    }
    if(userChoice === 'sword'){
        if(cpuChoice === 'magika'){
            winner.textContent = 'Nice moves';
            cpuHealth--
            updateHealth()
            return;
        } else {
            winner.textContent = 'Computer wins';
            pHealth--
            updateHealth();
            return;
        }
    }
    if(userChoice === 'archery'){
        if(cpuChoice === 'magika'){
            winner.textContent = 'Computer wins';
            pHealth--
            updateHealth();
            return;
        } else {
            winner.textContent = 'Nice moves';
            cpuHealth--
            updateHealth();
            return;
        }
    }
    if(userChoice === 'magika'){
        if(cpuChoice === 'archery'){
            winner.textContent = 'Nice moves';
            cpuHealth--
            updateHealth();
            return;
        } else {
            winner.textContent = 'Computer wins';
            pHealth--
            updateHealth();
            return;
        }
    }
}
  // Call all inner functions
  startGame();
  
};    

  // Start game function
  game(); 