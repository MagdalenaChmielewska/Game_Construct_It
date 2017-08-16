class SimplePiece {

    constructor(game, spriteName, position) {
        this.sprite = game.add.sprite(0, 0, spriteName);
        this.sprite.position.setTo(position.x, position.y);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.originalPosition = this.sprite.position.clone();
    }

    getSprite() {
        return this.sprite;
    }

    addChildren(children) { 
        children.forEach(
            child => this.sprite.addChild(child.getSprite())
        );
    }

    getLength() {
        return this.sprite.width;
    }

    resetPosition() {
        this.sprite.position.setTo(this.originalPosition.x, this.originalPosition.y);
    }
    
};

module.exports = SimplePiece;