function memoryGame() {
  return {
    cards: [],
    charactersCount: 5,
    revealTime: 1, //seconds
    won: false,
    actualCard: 'Ready?',
    answer: '',
    characters: [],
    compareAnswer: false,


    init() {
      //const letters = ['red', 'blue', 'yellow', 'orange', 'stone', 'white', 'green', 'purple'];
      //const emmojis = ['red', 'blue', 'yellow', 'orange', 'stone', 'white', 'green', 'purple'];
      this.cards = [];
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      this.characters = [...numbers];

      while (this.cards.length < this.charactersCount) {
        let index = Math.floor(Math.random() * this.characters.length - 1) + 0;


        if (!this.cards.length) {
          this.cards.push(this.characters[index]);
          continue;
        }

        if (this.cards[this.cards.length - 1] !== this.characters[index] && this.characters[index]) {
          this.cards.push(this.characters[index]);
        }

      }
      console.log(this.cards);
    },

    checkAnswer() {
      this.compareAnswer = true;
      if (this.answer == this.cards.join('')) {
        this.won = 'YOU WON!!!';
      } else {
        this.won = 'Not correct. Try again.';

        setTimeout(() => {
          this.won = false;
        }, 1000)
      }
    },

    revealCards() {
      let index = 0;
      const intervalId = setInterval(() => {
        this.actualCard = this.cards[index];
        console.log(this.actualCard);
        index++;
        if (index > this.cards.length) {
          clearInterval(intervalId);
          this.actualCard = '.';
        }
      }, this.revealTime * 1000);


    },

    restart() {
      this.cards = [];
      this.actualCard = 'Ready?'
      this.answer = '';
      this.won = false;
      this.compareAnswer = false;
      this.init();
    }
  }
}



