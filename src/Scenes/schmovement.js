class Move extends Phaser.Scene {

    constructor(){
        super("1DMovement");
    }

    preload() {
        this.load.setPath("./assets/");                        // Set load path
        this.load.image("x-mark", "numeralX.png");             // x marks the spot
        this.load.image("enemyShip", "enemyGreen1.png");       // spaceship that runs along the path
    }

    create() {
        my.numThings = 0;
        my.things = [];
        // Define key bindings
        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.shootKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        my.sprite.enemyShip = this.add.sprite(69, 690, "enemyShip");
        my.sprite.enemyShip.angle = 180;
        document.getElementById('description').innerHTML = 'A - Move left D - Move Right :)';
    }

    update() {

        if (this.leftKey.isDown) {
            my.sprite.enemyShip.x -= 5;
        }
        if (this.rightKey.isDown) {
            my.sprite.enemyShip.x += 5;
        }
        if (Phaser.Input.Keyboard.JustDown(this.shootKey)) {
            my.sprite.things = this.add.sprite(my.sprite.enemyShip.x, my.sprite.enemyShip.y - 20, "x-mark");
            my.things.push(my.sprite.things);
            
            //this.temp.setVelocity(0, 10);
        }
        for (let i = 0; i < my.things.length; i++) {
            
            my.things[i].y -= 10;
            if (my.things[i].y < 0) {
                
                my.things[i].destroy();
                my.things.slice(1);
            }
            
        }
        
    }

}