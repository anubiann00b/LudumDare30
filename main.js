var game = new Phaser.Game(600, 480, Phaser.AUTO, 'gameDiv');

var player1 = { x:"50", y:"50" };
var player2 = { x:"50", y:"50" };
var circle;
var blocks;

var mainState = {

  preload: function() {
    game.stage.backgroundColor = '#ccaaaa';
    game.load.image('circle', 'assets/circle.png');
  },

  create: function() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    platforms = game.add.group();
    platforms.enableBody = true;
    var ledge = platforms.create(400, 400, 'circle');
    ledge.body.immovable = true;
    ledge = platforms.create(150, 250, 'circle');
    ledge.body.immovable = true;

    this.circle = this.game.add.sprite(player1.x, player1.y, 'circle');
    game.physics.enable(this.circle, Phaser.Physics.ARCADE);
    this.circle.position.x = 10;
    this.circle.position.y = 100;
    this.circle.body.gravity.y=300;
    this.circle.body.bounce.y = 0.2;
    this.circle.body.maxVelocity.x = 300;
    this.circle.body.drag.x = 400;
    this.circle.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
    this.game.input.keyboard.addKey(Phaser.Keyboard.W).onDown.add(this.jump, this);
  },

  update: function() {
    game.physics.arcade.collide(circle, platforms);

    kb = game.input.keyboard;

    if (kb.isDown(Phaser.Keyboard.D)) {
      this.circle.body.velocity.x += 50;
    }
    if (kb.isDown(Phaser.Keyboard.A)) {
      this.circle.body.velocity.x -= 50;
    }
  },

  jump: function() {
    this.circle.body.velocity.y-=200;
  }
};

game.state.add('main', mainState);
game.state.start('main');
