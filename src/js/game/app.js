var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
var score = new Set();

var load_state = {  
    preload: function() { 
        game.load.spritesheet('newGame', 'images/button_sprite_sheet.png', 193, 71);
        game.load.image('block_0', 'images/blockRed3.png');
        game.load.image('block_1', 'images/blockBlue3.png');
        game.load.image('block_2', 'images/blockGreen3.png');
        game.load.image('blockOrange', 'images/blockOrange.png');
        game.load.image('blockYellow', 'images/blockYellow.png');
        game.load.image('level1-bg', 'images/sky.png');
        game.load.image('gridLevel1', 'images/gridLevel1.png');
    },

    create: function() {
        this.game.state.start('menu');
    }
};

var menu_state = {

  create: function() {
    game.stage.backgroundColor = "#000000";
    newGame = game.add.button(game.width/2, game.height/2, 'newGame', this.start, this, 0, 1);
    newGame.anchor.setTo(0.5, 0.5);
    newGame.inputEnabled = true;
    newGame.events.onInputDown.add(this.start, this);
},
    // Start the actual game
    start: function() {
        this.game.state.start('level_1');
    }
};
var level_1 = {

    create: function() {
        score.clear();
        game.add.sprite(0, 0, 'level1-bg');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        var gridLevel1 = this.game.add.sprite(380, 420, 'gridLevel1');
        gridLevel1.anchor.setTo(0.5, 0.5);

        var pieces = game.add.group();
        for (var i = 0; i < 3; i++) {
            var piece = game.add.sprite(0, 0, 'block_' + i);    
            piece.position.set((160+(i*200)), 160);
            piece.anchor.setTo(0.5, 0.5);
            piece._pieceID = i;
            piece.inputEnabled = true;
            piece.input.enableDrag();
            piece.input.useHandCursor = true;
            piece.originalPosition = piece.position.clone();
            piece.events.onDragStart.add(function() {
                    this.bringToTop();
                }, piece);
            piece.events.onDragStop.add(function() {
                level_1._stopDrag(this, gridLevel1);
                }, piece);
            pieces.addChild(piece);
        }
        pieces.position.set(0, 0);

        game.physics.enable([gridLevel1, pieces], Phaser.Physics.ARCADE);
        pieces.setAll('body.collideWorldBounds', true);

    },
    
    _stopDrag: function(currentSprite, endSprite) {
        var dist = game.physics.arcade.distanceToXY(currentSprite, endSprite.x, endSprite.y);       
        if (currentSprite._pieceID === 2 && dist <= 64) {
            currentSprite.anchor = {
                x: 0.335,
                y: 0
            }
            currentSprite.input.enableSnap(40, 40, false, true);
            score.add(currentSprite._pieceID);
        } else if (dist <= 57) {
            currentSprite.input.enableSnap(40, 40, false, true);
            score.add(currentSprite._pieceID);
        } else {     
            currentSprite.position.copyFrom(currentSprite.originalPosition);
            score.delete(currentSprite._pieceID);
        }

        if (score.size === 3) {
            game.time.events.add(2000, function() {
                game.state.start('menu');
            });
        }
    }
};

// Define all the states
game.state.add('load', load_state);  
game.state.add('menu', menu_state);  
game.state.add('level_1', level_1);

// Start with the 'load' state
game.state.start('load');  
