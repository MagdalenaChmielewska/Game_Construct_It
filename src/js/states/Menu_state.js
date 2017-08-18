class Menu_state {

    create() {
        this.game.add.sprite(0, 0, 'menuBg');

        this.displayLogo();
        this.displayButton(100, 'newGame', this.startGame);
        this.displayButton(200, 'levels', this.levels);
    }

    startGame() {
        this.game.state.start('level_1');
    }

    levels() {
        this.game.state.start('levels');
    }

    displayLogo() {
        let item;
        for (var i = 0; i < 12; i++) {
            this.item = this.game.add.sprite(120 + 50 * i, -100, 'logo', i);
            this.item.anchor.setTo(0.5,0.5);
            this.game.add.tween(this.item).to({y: 150}, 2400, Phaser.Easing.Bounce.Out, true, 300 + 400 * i, 0);
            this.game.add.tween(this.item).to({angle: 360}, 2400, Phaser.Easing.Cubic.In, true, 300 + 400 * i, 0);
        }
    }

    displayButton(positionY, picture, onClick) {
        const newButton = this.game.add.button(this.game.width/2, this.game.height/2 + positionY, picture, onClick, this, 0, 1);
        newButton.anchor.setTo(0.5, 0.5);
    }
    
};

module.exports = Menu_state;