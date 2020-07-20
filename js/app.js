const game = () => {
    let pHealth = 10;
    let cHealth = 10;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const lvlUp = {
            beginBtn: new Audio('music/lvlUpSound.mp3')
         }
         const bkgMusic = {
           startMusic: new Audio('music/skyrimmenu.mp3')
           }
           document.querySelector(".intro button").addEventListener("mouseenter", () => {
               bkgMusic.startMusic.play()
            })

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
            lvlUp.beginBtn.play();
            bkgMusic.startMusic.pause();
        });
    };
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerChar = document.querySelector('.player-char');
        const computerChar = document.querySelector('.computer-char');
        const hands = document.querySelectorAll('.characters img');
        const fight = {
            fightMusic: new Audio('music/uiupdate.mp3')
        }

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        const computerOptions = ['sword', 'magika', 'archery'];
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                // How my computer will choose
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                fight.fightMusic.play();
                console.log(this);
                console.log(computerChoice);
                
                // Call compareAttacks
                compareAttacks(this.textContent, computerChoice);

                playerChar.style.animation = "shakePlayer 1s ease";
                computerChar.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateHealth = () => {
        const playerHealth = document.querySelector('.player-health p');
        const computerHealth = document.querySelector('.computer-health p');
        playerHealth.textContent = pHealth;
        computerHealth.textContent = cHealth;
    }

    const compareAttacks = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice){
            winner.textContent = 'Parry!';
            return;
        }
        if (playerChoice === 'sword'){
            if (computerChoice === 'archery'){
                winner.textContent = 'Good attack!';
                cHealth--;
                updateHealth();
                return;
            } else {
                winner.textContent = 'You took damage!';
                pHealth--;
                updateHealth();
                return;
            }
        }
        if (playerChoice === 'magika'){
            if (computerChoice === 'archery'){
                winner.textContent = 'You took damage!';
                pHealth--;
                updateHealth();
                return;
            } else {
                winner.textContent = 'Good attack!';
                cHealth--;
                updateHealth();
                return;
            }
        }
        if (playerChoice === 'archery'){
            if (computerChoice === 'sword'){
                winner.textContent = 'You took damage!';
                pHealth--;
                updateHealth();
                return;
            } else {
                winner.textContent = 'Good attack!';
                cHealth--;
                updateHealth();
                return;
            }
        }
    }
    // const resetBtn = {
    //     new Audio('music/death.mp3')
    //   }
      
    //   resetBtn.querySelector('reset button').addEventListener('click', () => {
    //     location.reload();
    //   })


    startGame();
    playMatch();
};
game();