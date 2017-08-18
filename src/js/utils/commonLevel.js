class CommonLevel {
    
    static displayLevel(game, description) {
        const currentLevel = game.add.text(20, 20, description, { font: "36px Arial Black", fill: "#000000" });
        currentLevel.stroke = "#FFB845";
        currentLevel.strokeThickness = 16;
        currentLevel.setShadow(2, 2, "#333333", 2, true, true);
    }

    static displayMenuButton(game, context, onClick) {
        const menuButton = game.add.button(100, 540, 'menuButton', onClick, context, 1, 0);
        menuButton.anchor.setTo(0.5, 0.5);
    }

    static displaySteps(game, steps) {
        const textOfSteps = game.add.text(620, 20, "Steps: " + steps, { font: "21px Arial Black", fill: "#000000" });
        textOfSteps.stroke = "#000000";
        textOfSteps.strokeThickness = 0;
        textOfSteps.setShadow(2, 2, "#333333", 2, true, true);
        return textOfSteps;
    }
}

module.exports = CommonLevel;