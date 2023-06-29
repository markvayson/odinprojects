document.addEventListener("DOMContentLoaded", function() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    let choicesIndex = 0;
    let myRound = 0;
    let compRound = 0;
    let myChoice = '';
    let compChoice = '';
    //GET 
    const app = document.getElementById('app');
    const title = document.getElementById('title');
    const disPlay = document.getElementById('disPlay');
    const verSus = document.getElementById('verSus');
    const play = document.getElementById('play');


    //CREATE 
    const myDisplay = document.createElement('div');
    const compDisplay = document.createElement('div');
    const pTitle = document.createElement('p');
    const rockBtn = document.createElement('button');
    const paperBtn = document.createElement('button');
    const scissorBtn = document.createElement('button');
    const scores = document.createElement('p');
    const menu = document.createElement('p');
    const tryAgainBtn = document.createElement('button');
    const inputName = document.createElement('input');

    //TEXT CONTENT
    rockBtn.textContent = 'Rock';
    paperBtn.textContent = 'Paper';
    scissorBtn.textContent = 'Scissor';
    menu.textContent = 'Play?';
    
    //ATTRIBUTES
    pTitle.classList.add('text-5xl','w-1','inline','m-0');
    
    disPlay.classList.add('grid','grid-cols-5','w-full','h-full','row-span-2','inline', 'm-0','pr-5');
    
    title.classList.add('h-14');

    myDisplay.classList.add('col-span-2','order-1');
    myDisplay.id = 'myDisplay';

    compDisplay.id = 'compDisplay';
    compDisplay.classList.add('col-span-2','order-3');

    verSus.classList.add('grid','place-items-center','place-self-center');
    scores.classList.add('place-self-center');

    inputName.classList.add('placeholder:text-center','text-3xl','p-0','border-0','outline-0','rounded-full', 'box-border');
    inputName.type = 'text';
    inputName.placeholder = 'Name';

    menu.classList.add('text-5xl');
    //APPEND
    app.appendChild(title);
    title.appendChild(pTitle);

    app.appendChild(disPlay);
    disPlay.appendChild(myDisplay);
    disPlay.appendChild(compDisplay);

    verSus.appendChild(inputName);
    verSus.appendChild(menu);

    app.appendChild(play);

    //EVENT LISTENERS
    rockBtn.addEventListener('click', handleBtnClick);    
    paperBtn.addEventListener('click', handleBtnClick);
    scissorBtn.addEventListener('click', handleBtnClick);
    menu.addEventListener('click', isName);
    tryAgainBtn.addEventListener('click', newRound);
    function handleBtnClick(event) {
        let computerSelection = getComputerChoice();
        let playerSelection = event.target.innerHTML
        playRound(playerSelection,computerSelection);
    }

    function isName() {
        if(inputName.value) {
            playRound();
        } else {
            verSus.removeChild(menu);
        }
    }

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomChoice = choices[randomIndex];
        return randomChoice;
    }


    function newRound() {
        myRound = 0;
        compRound = 0;
        verSus.removeChild(tryAgainBtn);
        letsPlay();
    }

    function letsPlay() {
        menu.textContent = '';
        menu.classList.add('order-2');
        scores.textContent = `${myRound} vs ${compRound}`
        console.log(myRound);
        verSus.appendChild(scores);
        play.appendChild(rockBtn);
        play.appendChild(paperBtn);
        play.appendChild(scissorBtn);
        if(myRound >= 5 || compRound >= 5){
            while(play.firstChild) {
                play.removeChild(play.firstChild);
                tryAgainBtn.textContent = 'Try Again?';
                verSus.appendChild(tryAgainBtn);
                if(myRound === 5){
                    scores.textContent = `You got ${myRound} wins! Good Job!`;
                } else {
                    scores.textContent = `Computer got ${compRound} wins!`;
                }
            }
        }

    }



    function playRound(me, comp) {
        myChoice = me;
        compChoice = comp;
        winSentence = `i got ${myRound} wins because i win`;
        loseSentence = `comp got ${myRound} wins because i lose`;
        console.log(`my pick: ${myChoice}, comp picks ${comp}.`)
        if(myChoice === comp) return console.log('draw');
        switch(myChoice){
            case 'Rock':
                if(compChoice === 'Scissor') {
                    myRound++;
                } else {
                    compRound++;
                }
                letsPlay();
                break;
            case 'Paper':
                if(compChoice === 'Rock') {
                    myRound++;
                } else {
                    compRound++;
                }
                letsPlay();
                break;
            case 'Scissor':
                if(compChoice === 'Paper') {
                    myRound++;
                } else {
                    compRound++;
                }
                letsPlay();
                break;

        }
    }



    function playIntro() {
        let i = 0;
        let choice = choices[choicesIndex];
        pTitle.textContent = '';
        const introInterval = setInterval(function() {
            pTitle.textContent += choice[i];
            i++;
            if(i >= choice.length) {
                clearInterval(introInterval);
                setTimeout(function() {

                
                const min = setInterval(function() {
                    i--;
                    pTitle.textContent = choice.slice(0,i);
                    if( i === 0 ){
                        clearInterval(min);
                        setTimeout(function(){
                            pTitle.textContent = '';
                            choicesIndex++;
                            if( choicesIndex >= choices.length){
                                choicesIndex = 0;
                            }
                            choice = choices[choicesIndex];
                            i = 0;
                            playIntro();
                        }, 500)
                    }    
                },60)
            }, 1000)
            }
        }, 100)
    }
    playIntro();
});