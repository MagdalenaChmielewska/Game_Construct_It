const Board = require('./board.js'),
      SimplePiece = require('./simplePiece.js'),
      Win = require('../states/win.js');

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
                new Win(game, level);
            }
            console.log("Wynik: " + result);
        }, 
        sprite
    );
}

function stopDrag(currentPiece, board) {
    let currentPieceSprite = currentPiece.getSprite(),
        currentPieceSpriteChildren = currentPieceSprite.children,
        currentPieceSprites = currentPieceSpriteChildren.concat(currentPieceSprite);

    let arePiecesInValidPositions = board.tryPutPiecesOnPositions(currentPieceSprites);

    if (!arePiecesInValidPositions) {
        currentPiece.resetPosition();
    }
}

module.exports = enableDragging;