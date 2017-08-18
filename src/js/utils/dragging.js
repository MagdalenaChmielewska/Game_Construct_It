const Board = require('../board/board.js'),
      StepsCounter = require("../utils/StepsCounter.js"),
      Winner_screen = require('../states/Winner_screen.js');

function enableDragging(game, level, piece, board) {
    let sprite = piece.getSprite();
    sprite.inputEnabled = true;
    sprite.input.enableDrag();
    sprite.input.enableSnap(40, 40, false, true);
    sprite.input.useHandCursor = true;
    sprite.events.onDragStop.add(
        () => {
            stopDrag(piece, board);
            let result = board.isBoardFull();
            if (result) {
                board.piecesAlreadyOnBoard.forEach((singlePiece) => {
                    singlePiece.inputEnabled = false;
                });
                new Winner_screen(game, level);
            }
        }, 
        sprite
    );
}

function stopDrag(currentPiece, board) {
    let currentPieceSprite = currentPiece.getSprite(),
        currentPieceSpriteChildren = currentPieceSprite.children,
        currentPieceSprites = currentPieceSpriteChildren.concat(currentPieceSprite);

    let arePiecesInValidPositions = board.tryPutPiecesOnPositions(currentPieceSprites);

    StepsCounter.increment();

    if (!arePiecesInValidPositions) {
        currentPiece.resetPosition();
    }
}

module.exports = enableDragging;