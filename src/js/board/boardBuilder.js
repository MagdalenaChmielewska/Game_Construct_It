const Board = require('./board.js'),
      SimplePiece = require('../puzzles/simplePiece.js');

class BoardBuilder {

    constructor(game, spriteName, position) {
        this.game = game;
        this.spiritName = spriteName;

        this.lastPiece = new SimplePiece(game, spriteName, {x: position.x, y: position.y});
        this.board = new Board(this.game, [this.lastPiece]);
    }

    addLeftPiece() {
        let positionOfLastPiece = this.lastPiece.getSprite().position,
            lengthOfLastPiece = this.lastPiece.getLength();

        return this.addPiece({x: positionOfLastPiece.x - lengthOfLastPiece, y: positionOfLastPiece.y});
    }

    addRightPiece() {
        let positionOfLastPiece = this.lastPiece.getSprite().position,
            lengthOfLastPiece = this.lastPiece.getLength();

        return this.addPiece({x: positionOfLastPiece.x + lengthOfLastPiece, y: positionOfLastPiece.y});
    }

    addDownPiece() {
        let positionOfLastPiece = this.lastPiece.getSprite().position,
            lengthOfLastPiece = this.lastPiece.getLength();

        return this.addPiece({x: positionOfLastPiece.x, y: positionOfLastPiece.y + lengthOfLastPiece});
    }

    addDownLeftPiece() {
        let positionOfLastPiece = this.lastPiece.getSprite().position,
            lengthOfLastPiece = this.lastPiece.getLength();

        return this.addPiece({x: positionOfLastPiece.x - lengthOfLastPiece, y: positionOfLastPiece.y + lengthOfLastPiece});
    }

    addDownRightPiece() {
        let positionOfLastPiece = this.lastPiece.getSprite().position,
            lengthOfLastPiece = this.lastPiece.getLength();

        return this.addPiece({x: positionOfLastPiece.x + lengthOfLastPiece, y: positionOfLastPiece.y + lengthOfLastPiece});
    }
    
    addUpperPiece() {
        let positionOfLastPiece = this.lastPiece.getSprite().position,
            lengthOfLastPiece = this.lastPiece.getLength();

        return this.addPiece({x: positionOfLastPiece.x, y: positionOfLastPiece.y - lengthOfLastPiece});
    }

    addPiece(newPosition) {
        this.lastPiece = new SimplePiece(this.game, this.spiritName, {x: newPosition.x, y: newPosition.y})

        let boardElements = this.board.getBoardElements();
        this.board = new Board(this.game, boardElements.concat(this.lastPiece));

        return this;
    }

    build() {
        return this.board;
    }
    
};

module.exports = BoardBuilder;