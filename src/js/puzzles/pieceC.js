const SimplePiece = require('./simplePiece.js');

class CPiece {    

    constructor(game, spriteName, position) {
        this.piece = new SimplePiece(game, spriteName, {x: position.x, y: position.y});
        let pieceLength = this.piece.getLength();

        let piece2 = new SimplePiece(game, spriteName, {x: pieceLength, y: 0}),
            piece3 = new SimplePiece(game, spriteName, {x: pieceLength, y: pieceLength}),
            piece4 = new SimplePiece(game, spriteName, {x: pieceLength, y: 2 * pieceLength}),
            piece5 = new SimplePiece(game, spriteName, {x: 0, y: 2 * pieceLength});

        this.piece.addChildren([piece2, piece3, piece4, piece5]);
    }

    getSprite() {
        return this.piece.sprite;
    }

    resetPosition() {
        this.piece.resetPosition();
    }
};

module.exports = CPiece;