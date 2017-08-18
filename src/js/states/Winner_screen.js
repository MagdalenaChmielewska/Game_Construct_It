const StepsCounter = require("../utils/StepsCounter.js");

let nextLevel, score;

class Winner_screen {

    constructor(game, level) {   
        this.game = game;
        let levelDescription;

        const popup = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'winScreen');

        popup.anchor.set(0.5);
        popup.scale.set(0);
        this.game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

        let steps = StepsCounter.getCounter();
        if (level === 1) {
            nextLevel = 'level_2';
            this.displayButton(120, 'nextLevelButton', popup);
            levelDescription = "LEVEL 1";
            score = this.countPoints(steps);
        } else if (level === 2) {
            nextLevel = 'level_3';
            this.displayButton(120, 'nextLevelButton', popup);
            levelDescription = "LEVEL 2";
            score = score + this.countPoints(steps);
        }
        else {
            nextLevel = 'level_1';
            this.displayButton(0, 'newGame', popup);
            levelDescription = "THE GAME";
            score = score + this.countPoints(steps);
        }

        this.displayText({x: -150, y: -70}, "Your score: " + score, "21px Arial Black", "#000000", "#000000", 0, popup);
        this.displayText({x: 0, y: 0}, levelDescription + " IS COMPLETED", "40px Arial Black", "#000000", "#FFB845", 16, popup);
    }

    goToNextLevel() {
        this.game.state.start(nextLevel);
    }

    displayButton(positionX, picture, itemToConect) {
        const newButton = this.game.add.button(positionX, 100, picture, this.goToNextLevel, this, 0, 1);
        newButton.anchor.setTo(0.5);
        newButton.inputEnabled = true;
        newButton.input.priorityID = 1;
        itemToConect.addChild(newButton);
    }

    displayText(position, description, font, fill, stroke, strokeThickness, itemToConect) {
        const newText = this.game.add.text(position.x, position.y, description, { font: font, fill: fill});
        newText.anchor.set(0.5);
        newText.stroke = stroke;
        newText.strokeThickness = strokeThickness;
        newText.setShadow(2, 2, "#333333", 2, true, true);
        itemToConect.addChild(newText);
    }

    countPoints(steps) {
        if (steps < 10) {
            return score = 100;
        } else if (steps >= 10 && steps < 15) {
            return score = 50;
        } else {
            return score = 10;
        }
    }

};

module.exports = Winner_screen;