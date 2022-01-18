
class Deck{
    constructor(){
        this.cards = [];
        this.makeDeck();
        this.shuffleDeck();
        
    }

    makeDeck(){
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const ranks = [ ' 2' ,' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', ' 10', ' Jack', ' Queen', ' King', ' Ace'];
        const values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for(let j = 0; j < suits.length; j++){
            for(let k = 0; k < ranks.length; k++){
                this.cards.push([values[k] ,`${ranks[k]} of ${suits[j]}`]);
            }
        }
    }
    shuffleDeck(){
        
        for (let i = this.cards.length - 1 ; i > 0; i--){
            let j = Math.floor(Math.random() * i);
            let temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }   
    }
    
}


class WAR {
    constructor(){
        
        this.deck = new Deck().cards;
        this.player1Deck = [];
        this.player2Deck = [];
        this.player1Card = [];
        this.player2Card = [];
        this.dealCards();
        this.playerPoints = 0;
        this.player2Points = 0;
        this.menu();
    }

    menu(){
        
        let selection = this.warGameMenu();
            switch (selection) {
                case '1':
                    this.drawCard();
                default:
                    selection = this.restartGame();
                    
            }  
        }
    
    warGameMenu(){
        
        return prompt(`
        0) Restart
        1) Draw card 
        Player 1: ${this.playerPoints} -------War------- Player 2: ${this.player2Points}
        Player 1 Deck : ${this.player1Deck.length} | Player 2 Deck : ${this.player2Deck.length}
        Player 1 card: ${this.player1Card[1]}
        Player 2 card: ${this.player2Card[1]} 
        
        `)
    }
    
    dealCards(){
            this.player1Deck = this.deck.splice(0, 26);
            this.player2Deck = this.deck.splice(0, 26);
    }

    restartGame(){
        new WAR().menu();
        
    }
    
    drawCard(){
        this.player1Card = this.player1Deck.shift();
        this.player2Card = this.player2Deck.shift();
        this.winner();
        this.menu();

    }

    winner(){
        if(this.player1Card[0] < this.player2Card[0]){
            this.player2Deck.push(this.player1Card, this.player2Card)
            this.player2Points++
           }
        else if(this.player1Card[0] > this.player2Card[0]){ 
           this.player1Deck.push(this.player1Card, this.player2Card)
           this.playerPoints++
        }
        else {
            this.player1Deck.push(this.player1Card)
            this.player2Deck.push(this.player2Card)
            
}
       
        if(this.playerPoints == 26){
            return alert('Player 1 wins!')
            
        }if(this.player2Points == 26){
            return alert('Player 2 Wins!')
        }
    }

}

new WAR();


