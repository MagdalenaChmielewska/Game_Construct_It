class Load_state {  
    
    preload() { 
        this.game.load.spritesheet('newGame', 'images/button_new_game.png', 192, 71);
        this.game.load.spritesheet('levels', 'images/button_levels.png', 192, 71);
        this.game.load.spritesheet('levelButton', 'images/levels.png', 155, 45);
        this.game.load.spritesheet('nextLevelButton', 'images/next_levels.png', 310, 45);
        this.game.load.spritesheet('menuButton', 'images/menu.png', 155, 45);
        this.game.load.spritesheet('logo', 'images/logo.png', 50, 60);        
        this.game.load.image('star', 'images/star.png');        
        this.game.load.image('blockGrey', 'images/blockSafe.png');
        this.game.load.image('blockRed', 'images/blockRed.png');
        this.game.load.image('blockBlue', 'images/blockBlue.png');
        this.game.load.image('blockGreen', 'images/blockGreen.png');
        this.game.load.image('blockOrange', 'images/blockOrange.png');
        this.game.load.image('blockYellow', 'images/blockYellow.png');
        this.game.load.image('blockWhite', 'images/blockWhite.png');
        this.game.load.image('menuBg', 'images/sky2.png');  
        this.game.load.image('levelsBg', 'images/sky3.png');  
        this.game.load.image('levelBg', 'images/sky.png');  
        this.game.load.image('win', 'images/score.png'); 
    }

    create() {
        this.game.state.start('menu');
    }

};

module.exports = Load_state;