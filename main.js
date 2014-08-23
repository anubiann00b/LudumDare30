var game = new Phaser.Game(600, 480, Phaser.AUTO, 'gameDiv');

var mainState = {

    preload: function() {
        game.stage.backgroundColor = '#ccaaaa';
        game.load.image('circle', 'assets/circle.png');
    },

    create: function() {
        this.circle = this.game.add.sprite(64, 64, 'circle');
    },

    update: function() {
    },
};

game.state.add('main', mainState);
game.state.start('main');
