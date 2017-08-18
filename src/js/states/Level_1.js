const PieceSimple = require('../puzzles/PieceSimple.js'),
      PieceL = require('../puzzles/PieceL.js'),
      PieceI = require('../puzzles/PieceI.js'),
      enableDragging = require('../utils/dragging.js'),
      StepsCounter = require('../utils/StepsCounter.js'),
      CommonLevel = require('../utils/commonLevel.js'),
      BoardBuilder = require('../board/boardBuilder.js');

const LevelNumber = 1; 

class Level_1 {
    create() {
        StepsCounter.reset();

        this.game.add.sprite(0, 0, 'levelBg');
        
        CommonLevel.displayLevel(this.game, "Level 1");
        this.stepsCounter = CommonLevel.displaySteps(this.game, StepsCounter.getCounter());       
        CommonLevel.displayMenuButton(this.game, this, this.menu);

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

        let piece1 = new PieceL(this.game, "blockBlue", {x: 160, y: 140});
        enableDragging(this.game, LevelNumber, piece1, board);

        let piece2 = new PieceSimple(this.game, "blockRed", {x: 360, y: 140});
        enableDragging(this.game, LevelNumber, piece2, board);

        let piece3 = new PieceSimple(this.game, "blockGreen", {x: 500, y: 140});
        enableDragging(this.game, LevelNumber, piece3, board);

        let piece4 = new PieceI(this.game, "blockOrange", {x: 660, y: 140});
        enableDragging(this.game, LevelNumber, piece4, board);

        let pieces = [piece1, piece2, piece3, piece4];
        this.game.physics.enable(board.getBoardElements().concat(pieces), Phaser.Physics.ARCADE);
    }

    menu() {
        this.game.state.start('menu');
    }

    update() {
        this.stepsCounter.destroy();
        this.stepsCounter = CommonLevel.displaySteps(this.game, StepsCounter.getCounter());
    }

};

module.exports = Level_1;