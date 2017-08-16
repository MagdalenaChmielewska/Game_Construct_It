const SimplePiece = require('./simplePiece.js');

class LittleIPiece {    

    constructor(game, spriteName, position) {
        this.piece = new SimplePiece(game, spriteName, {x: position.x, y: position.y});
        let pieceLength = this.piece.getLength();

        let piece2 = new SimplePiece(game, spriteName, {x: 0, y: pieceLength});

        this.piece.addChildren([piece2]);
    }

    getSprite() {
        return this.piece.sprite;
    }

    resetPosition() {
        this.piece.resetPosition();
    }
};

module.exports = LittleIPiece;