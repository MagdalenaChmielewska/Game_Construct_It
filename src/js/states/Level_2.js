const PieceSimple = require('../puzzles/PieceSimple.js'),
      PieceLittleL = require('../puzzles/PieceLittleL.js'),
      PieceI = require('../puzzles/PieceI.js'),
      PieceC = require('../puzzles/PieceC.js'),
      enableDragging = require('../utils/dragging.js'),
      StepsCounter = require('../utils/StepsCounter.js'),
      CommonLevel = require('../utils/commonLevel.js'),
      BoardBuilder = require('../board/boardBuilder.js');

const LevelNumber = 2; 

class Level_2 {

    create() {
        StepsCounter.reset();

        this.game.add.sprite(0, 0, 'levelBg');

        CommonLevel.displayLevel(this.game, "Level 2");
        this.stepsCounter = CommonLevel.displaySteps(this.game, StepsCounter.getCounter());
        CommonLevel.displayMenuButton(this.game, this, this.menu);

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

        let piece1 = new PieceC(this.game, "blockYellow", {x: 160, y: 140});
        enableDragging(this.game, LevelNumber, piece1, board);

        let piece2 = new PieceLittleL(this.game, "blockRed", {x: 320, y: 160});
        enableDragging(this.game, LevelNumber, piece2, board);        

        let piece3 = new PieceSimple(this.game, "blockGreen", {x: 500, y: 220});
        enableDragging(this.game, LevelNumber, piece3, board);

        let piece4 = new PieceSimple(this.game, "blockBlue", {x: 500, y: 140});
        enableDragging(this.game, LevelNumber, piece4, board);

        let piece5 = new PieceI(this.game, "blockWhite", {x: 660, y: 140});
        enableDragging(this.game, LevelNumber, piece5, board);

        let pieces = [piece1, piece2, piece3, piece4, piece5];
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

module.exports = Level_2;