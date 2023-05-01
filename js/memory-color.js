function memoryGame() {
  return {
    cards: [],
    flippedCards: [],
    showRestart: false,
    cardsPairs: 6,
    cardGridClass: '1/4',
    revealTime: 5, //seconds
    won: false,

    init() {

      this.setCardGridClass();

      const colors = ['red', 'blue', 'yellow', 'orange', 'stone', 'white', 'green', 'purple'];

      const selectCard = this.shuffle(colors).slice(0, this.cardsPairs);

      let colorCards = [...selectCard, ...selectCard];

      this.cards = this.shuffle(colorCards).map((color) => ({
        value: color, opened: false, matched: false
      }));

    },


    setCardGridClass() {
      if (this.cardsPairs % 2 == 0) {
        this.cardGridClass = '1/4';
      } else {
        this.cardGridClass = '1/3';
      }
    },

    selectCard(index) {

      if (this.isFlipped(index)) {
        return;
      }


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

    isFlipped(index) {
      return this.flippedCards.includes(index);
    },

    revealCards() {
      for (const card of this.cards) {
        if (!card.matched) {
          card.opened = true;

          setTimeout(() => {
            card.opened = false;
          }, this.revealTime * 1000);
        }
      }
    },

    checkForWin() {
      if (this.cards.filter(card => !card.matched).length === 0) {
        this.showRestart = true;
        this.won = true;
      }
    },

    shuffle(arrayData) {
      return arrayData.sort(() => Math.random() - 0.5)
    },

    restart() {
      this.cards = [];
      this.flippedCards = [];
      this.showRestart = false;
      this.won = false;
      this.init();
    }
  }
}



