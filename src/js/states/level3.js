const SimplePiece = require('../puzzles/simplePiece.js'),
      LittleLPiece = require('../puzzles/pieceLittlel.js'),
      LeftDownLPiece = require('../puzzles/pieceLeftDownL.js'),
      LeftUpLPiece = require('../puzzles/pieceLeftUpL.js'),
      TetrrisRightPiece = require('../puzzles/pieceTetrrisRight.js'),
      TetrrisLeftPiece = require('../puzzles/pieceTetrrisLeft.js'),
      LittleIPiece = require('../puzzles/pieceLittleI.js'),
      enableDragging = require('../puzzles/dragging.js'),
      BoardBuilder = require('../puzzles/boardBuilder.js');

class Level_3 {

    create() {
        this.game.add.sprite(0, 0, 'levelBg');

        const currentLevel = this.game.add.text(20, 20, "Level 3", { font: "36px Arial Black", fill: "#000000" });
        currentLevel.stroke = "#FFB845";
        currentLevel.strokeThickness = 16;
        currentLevel.setShadow(2, 2, "#333333", 2, true, true);

        const menuButton = this.game.add.button(100, 540, 'menuButton', this.menu, this, 1, 0);
        menuButton.anchor.setTo(0.5, 0.5);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        let boardBuilder = new BoardBuilder(this.game, "blockGrey", {x: 440, y: 320});
        let board = boardBuilder
            .addDownLeftPiece()
            .addRightPiece()
            .addRightPiece()
            .addDownRightPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addDownLeftPiece()
            .addRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addDownLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addLeftPiece()
            .addDownRightPiece()
            .addRightPiece()
            .addRightPiece()
            .addDownLeftPiece()
            .build();

        let piece1 = new LittleLPiece(this.game, "blockRed", {x: 120, y: 160});
        enableDragging(this.game, 3, piece1, board); 

        let piece2 = new LeftDownLPiece(this.game, "blockBlue", {x: 120, y: 280});
        enableDragging(this.game, 3, piece2, board); 

        let piece3 = new LeftUpLPiece(this.game, "blockGreen", {x: 320, y: 160});
        enableDragging(this.game, 3, piece3, board); 

        let piece4 = new TetrrisRightPiece(this.game, "blockOrange", {x: 440, y: 160});
        enableDragging(this.game, 3, piece4, board); 

        let piece5 = new TetrrisRightPiece(this.game, "blockYellow", {x: 560, y: 160});
        enableDragging(this.game, 3, piece5, board); 

        let piece6 = new TetrrisLeftPiece(this.game, "blockWhite", {x: 720, y: 160});
        enableDragging(this.game, 3, piece6, board); 

        let piece7 = new LittleIPiece(this.game, "blockWhite", {x: 240, y: 160});
        enableDragging(this.game, 3, piece7, board);    


        this.game.physics.enable(board.getBoardElements().concat([piece1, piece2, piece3, piece4, piece5, piece6, piece7]), Phaser.Physics.ARCADE);
    }

    menu() {
        this.game.state.start('menu');
    }

};

module.exports = Level_3;