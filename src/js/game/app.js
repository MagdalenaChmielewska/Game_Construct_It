const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

const Load_state = require('../states/Load_state.js'),
      Menu_state = require('../states/Menu_state.js'),
      Levels_state = require('../states/Levels_state.js'),     
      Level_1 = require('../states/Level_1.js'),
      Level_2 = require('../states/Level_2.js'),
      Level_3 = require('../states/Level_3.js');

game.state.add('load', Load_state);  
game.state.add('menu', Menu_state);
game.state.add('levels', Levels_state);  
game.state.add('level_1', Level_1);
game.state.add('level_2', Level_2);
game.state.add('level_3', Level_3);

game.state.start('load');  