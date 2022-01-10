/* 
new deck
shuffle deck
deal every other shuffled card to player hand and the other to cpu hand
draw card from each hand
if player card > cpu card, played cards go to player hand
if cpu card > player card. played cards go to cpu hand
if cpu hand or player hand = 0
if cpu hand == deck.length

*/

class Deck{
    constructor(){
        this.cards = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        
        for(let j = 0; j < suits.length; j++){
            for(let k = 0; k < values.length; k++){
                this.cards.push(`${values[k]} of ${suits[j]} `)
            }
        }
        for (let i = this.cards.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
}

        




class WAR{
    constructor(){
        this.deck = new Deck();
        this.hand = [];
        this.cpuHand = [];
        this.playedCards = [];

    }

    start(){
        this.shuffleDeck(this.deck);
        let selection = this.warMainMenu();
        while (selection != 0){
            switch (selection) {
                case '1':
                    this.startGame();
            
                default:
                    selection = 0;
            }
            selection = this.warMainMenu()
        }
    }
    startGame(){
        let selection = this.warGameMenu();
            switch (selection) {
                case '1':
                    this.dealCards();
                    break;
                case '2':
                    this.drawCard();
                    break;
                case '3':
                    this.restartGame();
                default:
                    selection = 0
                    
            }  
            selection = this.warGameMenu
        }
    warMainMenu(){
        return prompt(`
        0) Exit
        1) Start game
        `)
    }
    
    warGameMenu(){
        return prompt(`
        0) Exit
        1) Restart
        2) Draw card
        `)
    }

    
    
    dealCards(){
        
    }

    

    restartGame(){
        new WAR()
        
    }
    drawCard(){

    }

    
    
}

let war = new WAR();
war.start();

