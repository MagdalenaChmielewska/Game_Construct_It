const SimplePiece = require('../puzzles/simplePiece.js'),
      lPiece = require('../puzzles/pieceLittlel.js'),
      IPiece = require('../puzzles/pieceI.js'),
      CPiece = require('../puzzles/pieceC.js'),
      enableDragging = require('../utils/dragging.js'),
      BoardBuilder = require('../board/boardBuilder.js');

class Level_2 {

    create() {
        this.game.add.sprite(0, 0, 'levelBg');

        const currentLevel = this.game.add.text(20, 20, "Level 2", { font: "36px Arial Black", fill: "#000000" });
        currentLevel.stroke = "#FFB845";
        currentLevel.strokeThickness = 16;
        currentLevel.setShadow(2, 2, "#333333", 2, true, true);

        const menuButton = this.game.add.button(100, 540, 'menuButton', this.menu, this, 1, 0);
        menuButton.anchor.setTo(0.5, 0.5);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        let boardBuilder = new BoardBuilder(this.game, "blockGrey", {x: 360, y: 400});
        let board = boardBuilder
            .addLeftPiece()
            .addDownPiece()
            .addDownPiece()            
            .addRightPiece()
            .addDownPiece()
            .addRightPiece()
            .addRightPiece()
            .addUpperPiece()
            .addRightPiece()
            .addUpperPiece()
            .addUpperPiece()
            .addLeftPiece()
            .build();

        let piece1 = new CPiece(this.game, "blockYellow", {x: 160, y: 140});
        enableDragging(this.game, 2, piece1, board);

        let piece2 = new lPiece(this.game, "blockRed", {x: 320, y: 160});
        enableDragging(this.game, 2, piece2, board);        

        let piece3 = new SimplePiece(this.game, "blockGreen", {x: 500, y: 220});
        enableDragging(this.game, 2, piece3, board);

        let piece4 = new SimplePiece(this.game, "blockBlue", {x: 500, y: 140});
        enableDragging(this.game, 2, piece4, board);

        let piece5 = new IPiece(this.game, "blockWhite", {x: 660, y: 140});
        enableDragging(this.game, 2, piece5, board);

        this.game.physics.enable(board.getBoardElements().concat([piece1, piece2, piece3, piece4, piece5]), Phaser.Physics.ARCADE);
    }

    menu() {
        this.game.state.start('menu');
    }

};

module.exports = Level_2;