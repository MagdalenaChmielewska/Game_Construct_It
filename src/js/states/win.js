let currentLevel, nextLevel, textOfWinY;

class Win {
    constructor(game, level) {   
        this.game = game;

        const popup = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'win'),
              nextLevelButton = this.game.add.button(120, 100, 'nextLevelButton', this.goToNextLevel, this, 1, 0);
        
        if (level === 1) {
            currentLevel = "LEVEL 1";
            nextLevel = 'level_2';
            textOfWinY = 0;
        } else if (level === 2) {
            currentLevel = "LEVEL 2";
            nextLevel = 'level_3';
            textOfWinY = 0;
        }
        else {
            currentLevel = "THE GAME";
            textOfWinY = 40;
            nextLevelButton.scale.set(0);
        }

        popup.anchor.set(0.5);
        popup.scale.set(0);
        this.game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

        const textOfWin = this.game.add.text(0, textOfWinY, currentLevel + " IS COMPLETED", { font: "40px Arial Black", fill: "#000000" });
        textOfWin.anchor.set(0.5);
        textOfWin.stroke = "#FFB845";
        textOfWin.strokeThickness = 16;
        textOfWin.setShadow(2, 2, "#333333", 2, true, true);

        nextLevelButton.anchor.setTo(0.5, 0.5);
        nextLevelButton.inputEnabled = true;
        nextLevelButton.input.priorityID = 1;
        popup.addChild(nextLevelButton);
        popup.addChild(textOfWin);

    }

    goToNextLevel() {
        this.game.state.start(nextLevel);
    }

};

module.exports = Win;