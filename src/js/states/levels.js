class Levels_state { 

    create() {
        this.game.add.sprite(0, 0, 'levelsBg');
        const level1Button = this.game.add.button(100, 120, 'levelButton', this.level1, this, 1, 0),
              level2Button = this.game.add.button(100, 200, 'levelButton', this.level2, this, 1, 0),
              level3Button = this.game.add.button(100, 280, 'levelButton', this.level3, this, 1, 0),
              menuButton = this.game.add.button(this.game.width/2, 500, 'menuButton', this.menu, this, 1, 0);
        menuButton.anchor.setTo(0.5, 0.5);

        const starsLevel1 = this.game.add.sprite(200, 10, 'star'),
              starsLevel2 = this.game.add.group(),
              starsLevel3 = this.game.add.group();

        for (let i = 0; i < 2; i++) {
            let star2 = this.game.add.sprite(200 + (50*i), 10, 'star');    
            starsLevel2.addChild(star2);
        }
        starsLevel2.position.set(0, 0);

        for (let i = 0; i < 3; i++) {
            let star3 = this.game.add.sprite(200 + (50*i), 10, 'star');    
            starsLevel3.addChild(star3);
        }
        starsLevel3.position.set(0, 0);

        level1Button.addChild(starsLevel1);
        level2Button.addChild(starsLevel2);
        level3Button.addChild(starsLevel3);
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
    
};

module.exports = Levels_state;