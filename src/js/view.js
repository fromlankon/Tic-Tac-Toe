export default class View {
    constructor(controller) {
        this.controller = controller;
        this.buttons = document.querySelectorAll('.container button');
        this.scoreElements = {
            X: document.querySelector('.score-item.first p'),
            O: document.querySelector('.score-item.second p'),
        };
        this.messageModal = document.querySelector('.modal');
        this.overlay = document.querySelector('.overlay');
        this.newGameButton = document.querySelector('.new');
        this.resetScoreButton = document.querySelector('.reset');

        this.buttons.forEach((button, index) => {
            button.addEventListener('click', () => this.controller.handleButtonClick(index));
        });

        this.newGameButton.addEventListener('click', () => this.controller.handleNewGameButtonClick());
        this.resetScoreButton.addEventListener('click', () => this.controller.handleResetScoreButtonClick());
    }

    updateBoard(board) {
        this.buttons.forEach((button, index) => {
            const cellValue = board[index] || '';
            button.textContent = cellValue;
    
            button.classList.remove('btn_x', 'btn_o');
            if (cellValue === 'X') {
                button.classList.add('btn_x');
            } else if (cellValue === 'O') {
                button.classList.add('btn_o');
            }
        });
    }

    updateScores(scores) {
        this.scoreElements.X.textContent = scores.X;
        this.scoreElements.O.textContent = scores.O;
    }

    showModal(message) {
        const messageElement = this.messageModal.querySelector('.message');
        messageElement.textContent = message;
        this.messageModal.classList.remove('hidden');
        this.overlay.classList.remove('hidden');
    }

    hideModal() {
        this.messageModal.classList.add('hidden');
        this.overlay.classList.add('hidden');
    }
}
