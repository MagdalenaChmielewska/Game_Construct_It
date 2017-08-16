class Board {

    constructor(game, boardElements) {
        this.game = game;
        this.boardElements = boardElements;
        this.piecesAlreadyOnBoard = [];
    }

    getBoardElements() {
        return this.boardElements;
    }

    isPlaceEmpty(boardElement) {
        let result = this.piecesAlreadyOnBoard.find((pieceOnBoard) => { 
                let dist = this.game.physics.arcade.distanceToXY(boardElement.getSprite().world, pieceOnBoard.world.x, pieceOnBoard.world.y);
                return dist < 20;
            }
        )

        return (this.piecesAlreadyOnBoard.length == 0 || (result === undefined));
    }

    tryPutPiecesOnPositions(spritesToCheck) {
        let boardElementsToPlacePieces = spritesToCheck.map((spriteToCheck) => {
            let boardElementToPlacePiece = this.boardElements.find((boardElement) => {
                let dist = this.game.physics.arcade.distanceToXY(boardElement.getSprite().world, spriteToCheck.world.x, spriteToCheck.world.y);
                return dist < 20 && this.isPlaceEmpty(boardElement);
            });
            return boardElementToPlacePiece;
        }).filter((x) => { return x !== undefined} );

        let result = (boardElementsToPlacePieces.length == spritesToCheck.length);
        if (result) {
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
        return result;
    }

    isBoardFull() {
        return this.boardElements.length == this.piecesAlreadyOnBoard.length;
    }

};

module.exports = Board;