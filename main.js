var game = new Phaser.Game(600, 480, Phaser.AUTO, 'gameDiv');

var player = { x:"50", y:"50" };

var mainState = {

  preload: function() {
    game.stage.backgroundColor = '#ccaaaa';
    game.load.image('circle', 'assets/circle.png');
  },

  create: function() {
    this.circle = this.game.add.sprite(player.x, player.y, 'circle');
  },

  update: function() {
  },
};

game.state.add('main', mainState);
game.state.start('main');
