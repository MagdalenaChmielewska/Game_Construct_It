const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

const Load_state = require('../states/load.js'),
      Menu_state = require('../states/menu.js'),
      Levels_state = require('../states/levels.js'),     
      Level_1 = require('../states/level1.js'),
      Level_2 = require('../states/level2.js'),
      Level_3 = require('../states/level3.js');

// Define all the states
game.state.add('load', Load_state);  
game.state.add('menu', Menu_state);
game.state.add('levels', Levels_state);  
game.state.add('level_1', Level_1);
game.state.add('level_2', Level_2);
game.state.add('level_3', Level_3);

// Start with the 'load' state
game.state.start('load');  