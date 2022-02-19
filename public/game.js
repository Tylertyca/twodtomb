var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};
var cursors;
var player;

var game = new Phaser.Game(config);

function preload() {
  this.load.image('background', '/assets/cavefront.png');
  this.load.image('wall','/assets/caveback.png');
  this.load.spritesheet('psheet','/assets/p_sheet.png',{frameWidth: 44, frameHeight: 88});

}

function create() {
  var walls;
        var back = this.add.image(400,300,'background');
        back.setScale(16);
        walls = this.physics.add.staticGroup();
        walls.create(400,200,'wall');
        walls.create(200,450,'wall');
        walls.create(300,325,'wall');
        walls.create(400,400,'wall');
        walls.create(450,400,'wall');
        walls.create(500,400,'wall');
        walls.create(550,400,'wall');
        walls.create(600,400,'wall');
        walls.create(100,550,'wall');
        
        player = this.physics.add.sprite(100,350, 'psheet');
        this.physics.add.collider(player,walls);
        cursors = this.input.keyboard.createCursorKeys();
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('psheet',{start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [ {key: 'psheet', frame: 2}],
            frameRate: 10
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('psheet', {start: 3, end: 5}),
            frameRate: 5,
            repeat: -1
        });
}

function update() {
  if (cursors.left.isDown)
  {
      player.setVelocityX(-160);
  
      player.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
      player.setVelocityX(160);
  
      player.anims.play('right', true);
  }
  else
  {
      player.setVelocityX(0);
  
      player.anims.play('turn');
  }
  
  if (cursors.up.isDown && player.body.touching.down)
  {
      player.setVelocityY(-330);
  }
}