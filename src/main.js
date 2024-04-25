"use strict"

// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true
    },
    width: 1000,
    height: 800,
    fps: { forceSetTimeOut: true, target: 30 },
    scene: [Move]
}

var my = {sprite: {}};

const game = new Phaser.Game(config);
