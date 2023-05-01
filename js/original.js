function memoryGame() {
    return {
      cards: [],
      flippedCards: [],
      showRestart: false,
  
      init() {
        const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        this.cards = cardValues.map((value) => {
          return { value, opened: false, matched: false };
        }).sort(() => Math.random() - 0.5);
      },
  
      selectCard(index) {
        if (this.flippedCards.length < 2) {
          this.cards[index].opened = true;
          this.flippedCards.push(index);
          if (this.flippedCards.length === 2) {
            setTimeout(() => {
              const [card1, card2] = this.flippedCards;
              if (this.cards[card1].value === this.cards[card2].value) {
                this.cards[card1].matched = true;
                this.cards[card2].matched = true;
              } else {
                this.cards[card1].opened = false;
                this.cards[card2].opened = false;
              }
              this.flippedCards = [];
              this.checkForWin();
            }, 1000);
          }
        }
      },
  
      checkForWin() {
        if (this.cards.filter(card => !card.matched).length === 0) {
          this.showRestart = true;
        }
      },
  
      restart() {
        this.cards = [];
        this.flippedCards = [];
        this.showRestart = false;
        this.init();
      }
    }
  }
  
  
  
  