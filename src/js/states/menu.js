class Menu_state {

    create() {
        this.game.add.sprite(0, 0, 'menuBg');

        let item;
        for (var i = 0; i < 12; i++) {
            this.item = this.game.add.sprite(120 + 50 * i, -100, 'logo', i);
            this.item.anchor.setTo(0.5,0.5);
            this.game.add.tween(this.item).to({y: 150}, 2400, Phaser.Easing.Bounce.Out, true, 300 + 400 * i, 0);
            this.game.add.tween(this.item).to({angle: 360}, 2400, Phaser.Easing.Cubic.In, true, 300 + 400 * i, 0);
        }

        const newGameButton = this.game.add.button(this.game.width/2, this.game.height/2 + 100, 'newGame', this.start, this, 0, 1);
        newGameButton.anchor.setTo(0.5, 0.5);
        newGameButton.inputEnabled = true;
        newGameButton.events.onInputDown.add(this.start, this);

        const levelsButton = this.game.add.button(this.game.width/2, this.game.height/2 + 200, 'levels', this.levels, this, 0, 1);
        levelsButton.anchor.setTo(0.5, 0.5);
        levelsButton.inputEnabled = true;
        levelsButton.events.onInputDown.add(this.levels, this);
    }

    start() {
        this.game.state.start('level_1');
    }

    levels() {
        this.game.state.start('levels');
    }
    
};

module.exports = Menu_state;