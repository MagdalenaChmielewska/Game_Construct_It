class Levels_state { 

    create() {
        this.game.add.sprite(0, 0, 'levelsBg');

        const level1Button = this.game.add.button(100, 120, 'levelButton', this.level1, this, 1, 0),
              level2Button = this.game.add.button(100, 200, 'levelButton', this.level2, this, 1, 0),
              level3Button = this.game.add.button(100, 280, 'levelButton', this.level3, this, 1, 0),
              menuButton = this.game.add.button(this.game.width/2, 500, 'menuButton', this.menu, this, 1, 0);
        menuButton.anchor.setTo(0.5, 0.5);

        this.displayStars(1, level1Button);
        this.displayStars(2, level2Button);
        this.displayStars(3, level3Button);
    }

    menu() {
        this.game.state.start('menu');
    }

    level1() {
        this.game.state.start('level_1');
    }

    level2() {
        this.game.state.start('level_2');
    }

    level3() {
        this.game.state.start('level_3');
    }

    displayStars(countOfStars, buttonToConect) {
        let stars = this.game.add.group();

        for (let i = 0; i < countOfStars; i++) {
            let star = this.game.add.sprite(200 + (50 * i), 10, 'star');    
            stars.addChild(star);
        }
        stars.position.set(0, 0);
        buttonToConect.addChild(stars);
    }
    
};

module.exports = Levels_state;