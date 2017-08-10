var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
var tween, popup;

var load_state = {  
    preload: function() { 
        game.load.spritesheet('newGame', 'images/button_new_game.png', 192, 71);
        game.load.spritesheet('levels', 'images/button_levels.png', 192, 71);
        game.load.spritesheet('levelButton', 'images/levels.png', 155, 45);
        game.load.spritesheet('menuButton', 'images/menu.png', 155, 45);
        game.load.spritesheet('logo', 'images/logo.png', 50, 60);        
        game.load.image('star', 'images/star.png');        
        game.load.image('blockGrey', 'images/blockSafe.png');
        game.load.image('blockRed', 'images/blockRed.png');
        game.load.image('blockBlue', 'images/blockBlue.png');
        game.load.image('blockGreen', 'images/blockGreen.png');
        game.load.image('blockOrange', 'images/blockOrange.png');
        game.load.image('blockYellow', 'images/blockYellow.png');
        game.load.image('menuBg', 'images/sky2.png');  
        game.load.image('levelsBg', 'images/sky3.png');  
        game.load.image('levelBg', 'images/sky.png');  

        // game.load.image('bob', 'images/bubble-on.png'); 
    },

    create: function() {
        this.game.state.start('menu');
    }
};

var menu_state = {

    create: function() {
        game.add.sprite(0, 0, 'menuBg');

        var item;
        for (var i = 0; i < 12; i++) {
            item = game.add.sprite(120 + 50 * i, -100, 'logo', i);
            item.anchor.setTo(0.5,0.5);
            game.add.tween(item).to({y: 150}, 2400, Phaser.Easing.Bounce.Out, true, 300 + 400 * i, 0);
            game.add.tween(item).to({angle: 360}, 2400, Phaser.Easing.Cubic.In, true, 300 + 400 * i, 0);
        }

        newGameButton = game.add.button(game.width/2, game.height/2 + 100, 'newGame', this.start, this, 0, 1);
        newGameButton.anchor.setTo(0.5, 0.5);
        newGameButton.inputEnabled = true;
        newGameButton.events.onInputDown.add(this.start, this);

        levelsButton = game.add.button(game.width/2, game.height/2 + 200, 'levels', menu_state.levels, this, 0, 1);
        levelsButton.anchor.setTo(0.5, 0.5);
        levelsButton.inputEnabled = true;
        levelsButton.events.onInputDown.add(menu_state.levels, this);
    },

    start: function() {
        this.game.state.start('level_1');
    },

    levels: function() {
        this.game.state.start('levels');
    }
};

var levels_state = { 

    create: function() {
        game.add.sprite(0, 0, 'levelsBg');
        var level1Button = game.add.button(100, 120, 'levelButton', levels_state.level1, this, 1, 0),
            level2Button = game.add.button(100, 200, 'levelButton', levels_state.level2, this, 1, 0),
            level3Button = game.add.button(100, 280, 'levelButton', levels_state.level3, this, 1, 0),
            menuButton = game.add.button(game.width/2, 500, 'menuButton', levels_state.menu, this, 1, 0);
        menuButton.anchor.setTo(0.5, 0.5);
        var starsLevel1 = game.add.sprite(200, 10, 'star'),
            starsLevel2 = game.add.group(),
            starsLevel3 = game.add.group();
        for (var i = 0; i < 3; i++) {
            var star3 = game.add.sprite(200 + (50*i), 10, 'star');    
            starsLevel3.addChild(star3);
        }
        starsLevel3.position.set(0, 0);
        for (var i = 0; i < 2; i++) {
            var star2 = game.add.sprite(200 + (50*i), 10, 'star');    
            starsLevel2.addChild(star2);
        }
        starsLevel2.position.set(0, 0);

        level1Button.addChild(starsLevel1);
        level2Button.addChild(starsLevel2);
        level3Button.addChild(starsLevel3);
    },

    menu: function() {
        this.game.state.start('menu');
    },

    level1: function() {
        this.game.state.start('level_1');
    },

    level2: function() {
        this.game.state.start('level_2');
    },

    level3: function() {
        this.game.state.start('level_3');
    }
};

var level_1 = {

    create: function() {
        game.add.sprite(0, 0, 'levelBg');
        var menuButton = game.add.button(100, 540, 'menuButton', level_1.menu, this, 1, 0);
        menuButton.anchor.setTo(0.5, 0.5);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);


// // eksperyment
//         popup = game.add.sprite(game.world.centerX, game.world.centerY, 'bob');
//         popup.anchor.set(0.5);
//         var pw = (popup.width / 2) - 30;
//         var ph = (popup.height / 2) - 8;

//         var nextLevel = game.make.sprite(pw, -ph, 'star');
//             nextLevel.inputEnabled = true;
//             nextLevel.input.priorityID = 1;
//             nextLevel.events.onInputDown.add(level_1.menu, this);

//             popup.addChild(nextLevel);
//             popup.scale.set(0);
//             game.input.onDown.add(level_1.win, this);

// // koniec eksperymentu


// Grid level 1
        var gridLevel1 = game.add.group();
        for (var i = 0; i < 9; i++) {
            var blockGrey = game.add.sprite(0, 0, 'blockGrey');
            blockGrey.position.set(blockGrey.width * (i % 3), blockGrey.height * Math.floor(i / 3));
            blockGrey._pieceID = i;
            blockGrey.anchor.setTo(0.5, 0.5);
            gridLevel1.addChild(blockGrey);
        }
        gridLevel1.position.set(380,420);
        game.physics.enable([gridLevel1], Phaser.Physics.ARCADE);

// Red block
        var blockRed = this.game.add.sprite(160, 120, 'blockRed'),
            blockRed2 = this.game.add.sprite(0, 40, 'blockRed'),
            blockRed3 = this.game.add.sprite(40, 40, 'blockRed');
        blockRed.addChild(blockRed2);
        blockRed.addChild(blockRed3);
        this.game.physics.arcade.enable(blockRed);
        blockRed.originalPosition = blockRed.position.clone();
        blockRed.inputEnabled = true;
        blockRed.input.enableDrag();
        blockRed.input.useHandCursor = true;
        blockRed.events.onDragStop.add(function(currentSprite) {
            level_1._stopDrag(currentSprite, gridLevel1);
        }, this);

// Blue block
        var blockBlue = this.game.add.sprite(360, 120, 'blockBlue'),
            blockBlue2 = this.game.add.sprite(40, 0, 'blockBlue'),
            blockBlue3 = this.game.add.sprite(40, 40, 'blockBlue');
        blockBlue.addChild(blockBlue2);
        blockBlue.addChild(blockBlue3);
        this.game.physics.arcade.enable(blockBlue);
        blockBlue.originalPosition = blockBlue.position.clone();        
        blockBlue.inputEnabled = true;
        blockBlue.input.enableDrag();
        blockBlue.input.useHandCursor = true;
        blockBlue.events.onDragStop.add(function(currentSprite) {
            level_1._stopDrag(currentSprite, gridLevel1);
        }, this);
// Green block
        var blockGreen = this.game.add.sprite(560, 140, 'blockGreen'),
            blockGreen2 = this.game.add.sprite(40, 0, 'blockGreen'),
            blockGreen3 = this.game.add.sprite(80, 0, 'blockGreen');
        blockGreen.addChild(blockGreen2);
        blockGreen.addChild(blockGreen3);
        this.game.physics.arcade.enable(blockGreen);
        blockGreen.originalPosition = blockGreen.position.clone();        
        blockGreen.inputEnabled = true;
        blockGreen.input.enableDrag();
        blockGreen.input.useHandCursor = true;
        blockGreen.events.onDragStop.add(function(currentSprite) {
            level_1._stopDrag(currentSprite, gridLevel1);
        }, this);
    },

    _stopDrag: function(currentSprite, endSprite) {
        var dist = game.physics.arcade.distanceToXY(currentSprite, endSprite.x, endSprite.y);  
        // var dist = game.physics.arcade.overlap(currentSprite.children, endSprite.children);     
            
        if (dist < 29) {
            currentSprite.input.enableSnap(40, 40, false, true);
            // score.add(currentSprite._pieceID);
        } else {     
            currentSprite.position.copyFrom(currentSprite.originalPosition);
            // score.delete(currentSprite._pieceID);
        }

        // if (score.size === 3) {
        //     game.time.events.add(2000, function() {
        //         game.state.start('menu');
        //     });
        // }
    },

    menu: function() {
        this.game.state.start('menu');
    },

    // win: function() {
        
    //     if ((tween && tween.isRunning) || popup.scale.x === 1)
    //         { return; }
    //     tween = game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);
    // }
};

var level_2 = {};
var level_3 = {};

// Define all the states
game.state.add('load', load_state);  
game.state.add('menu', menu_state);
game.state.add('levels', levels_state);  
game.state.add('level_1', level_1);
game.state.add('level_2', level_2);
game.state.add('level_3', level_3);

// Start with the 'load' state
game.state.start('load');  
