const PieceSimple = require('./PieceSimple.js');

class PieceLittleL {    

    constructor(game, spriteName, position) {
        this.piece = new PieceSimple(game, spriteName, {x: position.x, y: position.y});
        let pieceLength = this.piece.getLength();

        let piece2 = new PieceSimple(game, spriteName, {x: 0, y: pieceLength}),
            piece3 = new PieceSimple(game, spriteName, {x: pieceLength , y: pieceLength});

        this.piece.addChildren([piece2, piece3]);
    }

    getSprite() {
        return this.piece.sprite;
    }

    resetPosition() {
        this.piece.resetPosition();
    }
};

module.exports = PieceLittleL;