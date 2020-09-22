let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 800},
            debug: false
        }
    },
    scene: {
        key: 'main',
        preload: preload,
        create: create,
        update: update
    }
};
 
let game = new Phaser.Game(config);
let background;
let map;
let player;
let cursors;
let groundLayer, coinLayer;
let bar;
let score = 0;
let text;
let coins;

 
function preload() {
    
    this.load.tilemapTiledJSON('map', 'assets/maps/map01.json')
    this.load.spritesheet('tiles', 'assets/world/tiles.png', {frameWidth: 32, frameHeight: 32} );
    this.load.spritesheet('coin', 'assets/pickups/coins.png', {frameWidth: 16, frameHeight: 16} );
    this.load.image('bg', 'assets/world/bg.png');
    this.load.image('bg2', 'assets/world/bg2.png');
    this.load.image('bg3', 'assets/world/bg3.png');
    this.load.atlas('player', 'assets/player/liu.png', 'assets/player/liu.json')
    
 
}
 
function create() {
   
    
    //Bakgrund 1 Himmel
    this.bg1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg');
    this.bg1.setOrigin(0,0)
    this.bg1.setScrollFactor(0)

    //Bakgrund 2 Berg
    this.bg2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg2');
    this.bg2.setOrigin(0,0)
    this.bg2.setScrollFactor(0)

    //Bakgrund 3 Träd
    this.bg3 = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'bg3');
    this.bg3.setOrigin(0,0)
    this.bg3.setScrollFactor(0)    
    

    //Världen
    map = this.make.tilemap({key: 'map'});
    let groundTiles = map.addTilesetImage('tiles');
    groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0);
    groundLayer.setCollisionByExclusion([-1]);
 
    this.physics.world.bounds.width = groundLayer.width;
    this.physics.world.bounds.height = groundLayer.height;



    
    // Spelaren
    player = this.physics.add.sprite(50, 500, 'player')
    player.setCollideWorldBounds(true);
    this.physics.add.collider(groundLayer, player);
    cursors = this.input.keyboard.createCursorKeys();


    //Spelarens animationer
    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNames('player', { prefix: 'liuWalk', start: 0, end: 5, zeroPad: 0, suffix: '.png'}),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNames('player', { prefix: 'liuWalk', start: 0, end: 0, zeroPad: 0, suffix: '.png'}),
        frameRate: 10,
        repeat: -1
    });

    //Kamera       
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        
        this.cameras.main.startFollow(player);


    //Coins


    coins =  map.createFromObjects('Object Layer 1', 3, { key: 'coin' });
    //coins.setTileIndexCallback(3, collectCoin, this)
    //this.physics.add.overlap(player, coins);
    
   



    this.anims.create({
        key: 'spin',
        frames: this.anims.generateFrameNumbers('coin', { start: 0, end: 6 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.play('spin', coins);
    
    
    


    
    





    // Ui och bar
    bar = this.add.graphics();
    bar.lineStyle(60, 5532, 1);
    bar.beginPath();
    bar.moveTo(0, 0);
    bar.lineTo(800, 0);
    bar.closePath();
    bar.strokePath();
    bar.setScrollFactor(0);
    
    

    text = this.add.text(780, 5, '0', {
        fontSize: '20px',
        fill: '#ffffff'
    });
    text.setScrollFactor(0);
  




 
}


 
function update() {


    
    //Repetera bakgrunden med kameran
    this.bg1.tilePositionX = this.cameras.main.scrollX * .3
    this.bg1.tilePositionY = this.cameras.main.scrollY

    //Repetera bergen med kameran
    this.bg2.tilePositionX = this.cameras.main.scrollX * .6
    this.bg2.tilePositionY = this.cameras.main.scrollY

    //Repetera bergen med kameran
    this.bg3.tilePositionX = this.cameras.main.scrollX * .9
    this.bg3.tilePositionY = this.cameras.main.scrollY

    
    //Spin ze coin
    //this.anims.play('spincoin', true)     
    

    if (cursors.left.isDown)
    {
        player.body.setVelocityX(-200);
        player.anims.play('walk', true)
        player.flipX = true;
    }
    else if (cursors.right.isDown)
    {
        player.body.setVelocityX(200);
        player.anims.play('walk', true)
        player.flipX = false;
    }
    else {
        player.body.velocity.x = 0;
        player.anims.play('idle', true)
    }

    if ((cursors.space.isDown) && player.body.onFloor())
    {
        player.body.setVelocityY(-400); 
    }

    
}



//Extrafunktioner



//Samlar pengar och ger poäng
function collectCoin(player, coin) {
    coin.kill
    score++;
    text.setText(score); 
    return false;
}