const MinimumDistance = 20;

class Board {

    constructor(game, boardElements) {
        this.game = game;
        this.boardElements = boardElements;
        this.piecesAlreadyOnBoard = [];
    }

    getBoardElements() {
        return this.boardElements;
    }

    calculateDistanceBetween(boardElement, piece) {
        let boardWorld = boardElement.getSprite().world,
            piecePositionX = piece.world.x,
            piecePositionY = piece.world.y;
        let distance = this.game.physics.arcade.distanceToXY(boardWorld, piecePositionX, piecePositionY);
        return distance;
    }

    isEmptyBoardElement(boardElement, pieceToPlace) {
        let result = this.piecesAlreadyOnBoard.find((pieceOnBoard) => { 
                let distance = this.calculateDistanceBetween(boardElement, pieceOnBoard);
                return distance < MinimumDistance && pieceToPlace != pieceOnBoard;
            }
        )
        
        return (this.piecesAlreadyOnBoard.length == 0 || (result === undefined));
    }

    tryPutPiecesOnPositions(spritesToCheck) {
        let boardElementsToPlacePieces = spritesToCheck.map((spriteToCheck) => {
            let boardElementToPlacePiece = this.boardElements.find((boardElement) => {
                let distance = this.calculateDistanceBetween(boardElement, spriteToCheck);
                return distance < MinimumDistance && this.isEmptyBoardElement(boardElement, spriteToCheck);
            });
            return boardElementToPlacePiece;
        }).filter((x) => { return x !== undefined} );

        let shouldPutPieceOnBoard = (boardElementsToPlacePieces.length == spritesToCheck.length);
        if (shouldPutPieceOnBoard) {
            // put pieces on board
            spritesToCheck.forEach(spriteToCheck => {
                let index = this.piecesAlreadyOnBoard.indexOf(spriteToCheck);
                if (index > -1) {
                    // do nothing, there is a sprite there
                } else {
                    this.piecesAlreadyOnBoard = this.piecesAlreadyOnBoard.concat(spriteToCheck);
                }
            })
        } else {
            // remove pieces from board
            spritesToCheck.forEach((spriteToCheck) => {
                let index = this.piecesAlreadyOnBoard.indexOf(spriteToCheck);
                if (index > -1) {
                    this.piecesAlreadyOnBoard.splice(index, 1);
                }
            })
        }

        return shouldPutPieceOnBoard;
    }

    isBoardFull() {
        return this.boardElements.length == this.piecesAlreadyOnBoard.length;
    }

};

module.exports = Board;