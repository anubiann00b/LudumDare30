var game = new Phaser.Game(600, 480, Phaser.AUTO, 'gameDiv');

var player1 = { x:"50", y:"50" };
var player2 = { x:"50", y:"50" };
var circle;

var mainState = {

  preload: function() {
    game.stage.backgroundColor = '#ccaaaa';
    game.load.image('circle', 'assets/circle.png');
  },

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y=300;
    this.circle = this.game.add.sprite(player1.x, player1.y, 'circle');

    game.physics.enable(this.circle, Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    this.circle.position.x = 10;
    this.circle.position.y = 100;
    this.circle.body.bounce.y = 0.2;
    this.circle.body.maxVelocity.x = 300;
    this.circle.body.drag.x = 100;
    this.circle.body.collideWorldBounds = true;
    this.circle.body.setSize(30, 30, 15, 15);

    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add((function (){ this.circle.body.velocity.y-=300; }), this);
  },

  update: function() {
    kb = game.input.keyboard;

    if (kb.isDown(Phaser.Keyboard.D)) {
      this.circle.body.velocity.x += 5;
    }
    if (kb.isDown(Phaser.Keyboard.A)) {
      this.circle.body.velocity.x -= 5;
    }
  },
};

game.state.add('main', mainState);
game.state.start('main');
