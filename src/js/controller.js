export default class Controller {
  constructor(model, view) {
      this.model = model;
      this.view = view;
      this.view.updateBoard(this.model.board);
      this.view.updateScores(this.model.score);
  }

  handleButtonClick(index) {
      this.model.makeMove(index);
      this.view.updateBoard(this.model.board);
      this.view.updateScores(this.model.score);

      if (this.model.winner) {
          const message = this.model.winner === 'T' ? "It's a tie!" : `${this.model.winner} wins!`;
          this.view.showModal(message);
      }
  }

  handleNewGameButtonClick() {
      this.model.resetGame();
      this.view.updateBoard(this.model.board);
      this.view.hideModal();
  }

  handleResetScoreButtonClick() {
      this.model.resetScore();
      this.view.updateScores(this.model.score);
      this.view.hideModal();
  }
}