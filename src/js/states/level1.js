const SimplePiece = require('../puzzles/simplePiece.js'),
      LPiece = require('../puzzles/pieceL.js'),
      IPiece = require('../puzzles/pieceI.js'),
      enableDragging = require('../puzzles/dragging.js'),
      BoardBuilder = require('../puzzles/boardBuilder.js');

class Level_1 {

    create() {
        this.game.add.sprite(0, 0, 'levelBg');

        const currentLevel = this.game.add.text(20, 20, "Level 1", { font: "36px Arial Black", fill: "#000000" });
        currentLevel.stroke = "#FFB845";
        currentLevel.strokeThickness = 16;
        currentLevel.setShadow(2, 2, "#333333", 2, true, true);

        const menuButton = this.game.add.button(100, 540, 'menuButton', this.menu, this, 1, 0);
        menuButton.anchor.setTo(0.5, 0.5);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        let boardBuilder = new BoardBuilder(this.game, "blockGrey", {x: 440, y: 400});
        let board = boardBuilder
            .addLeftPiece()
            .addLeftPiece()
            .addDownPiece()
            .addRightPiece()
            .addRightPiece()
            .addDownPiece()
            .addLeftPiece()
            .addLeftPiece()
            .build();

        let piece1 = new LPiece(this.game, "blockBlue", {x: 160, y: 140});
        enableDragging(this.game, 1, piece1, board);

        let piece2 = new SimplePiece(this.game, "blockRed", {x: 360, y: 140});
        enableDragging(this.game, 1, piece2, board);

        let piece3 = new SimplePiece(this.game, "blockGreen", {x: 500, y: 140});
        enableDragging(this.game, 1, piece3, board);

        let piece4 = new IPiece(this.game, "blockOrange", {x: 660, y: 140});
        enableDragging(this.game, 1, piece4, board);

        this.game.physics.enable(board.getBoardElements().concat([piece1, piece2, piece3, piece4]), Phaser.Physics.ARCADE);
    }

    menu() {
        this.game.state.start('menu');
    }

};

module.exports = Level_1;