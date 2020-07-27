var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var cursors;
var playText;

function preload (){
    this.load.image('main', 'assets/phaser.png');
}

function create (){
    this.add.image(400, 300, 'main');
    cursors = this.input.keyboard.createCursorKeys();
    scoreText = this.add.text(250, 400, 'score: 0', { fontSize: '32px', fill: 'blue' });
    scoreText.setText('click space to play')
}

function redirect() {
    window.location = "http://localhost:3000/game"
}

function update (){
    if (cursors.space.isDown){
        redirect();
    }
}
