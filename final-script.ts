import {
    Sprite,
    Container,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text,
    
} from "pixi.js";


let newV: number = 7;
let t: number = 0;
let v: number = 0;
let a: number = -0.35;
let GAP: number = 160;
let PIPE_SPEED: number = 2.5;
let spawnInterval: number = 100;
let waves: number = 0;
let isActive: boolean = true;

let appSize: number = 420;
let app: Application = new Application(appSize, appSize);
document.body.appendChild(app.view);

class Obstacle {
    bSprite: Sprite;
    tSprite: Sprite;
    gap: number = GAP;
    speed: number = PIPE_SPEED;
    constructor(){
        this.bSprite = Sprite.fromImage("./pipe.png");
        this.tSprite = Sprite.fromImage("./pipe.png");
        this.tSprite.scale.y = -1;
        this.bSprite.x = appSize;
        this.bSprite.y = appSize - (appSize - this.gap) * Math.random();
        this.tSprite.x = appSize;
        this.tSprite.y = this.bSprite.y - this.gap;
    }
}


let background: Sprite = Sprite.fromImage("./background.png");
app.stage.addChild(background);

let player: Sprite = Sprite.fromImage("./kris.png");
player.scale.x = 1/12;
player.scale.y = 1/12;
player.x = appSize/4;
player.y = appSize/2;
app.stage.addChild(player);

window.onkeydown = function(e: KeyboardEvent): void {
    if(e.keyCode === 32){
        v = newV;
        t = 0;
    }
}

function isColliding(a: DisplayObject, b: DisplayObject): boolean {
    const ab: Rectangle = a.getBounds();
    const bb: Rectangle = b.getBounds();
    return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
}

let obstacles: Obstacle[] = [];
let count: number = 0;
alert("Welcome to Flappy Kris: The Game! \n Use the Spacebar to help Kris Flap! \n Don't let him die, Kris is counting on you!");

let mainTicker: PIXI.ticker.Ticker = app.ticker.add(function(delta: number): void{  
    count += 1;

    if(count % spawnInterval === 0){
        waves++;
        let obs: Obstacle = new Obstacle();
        obstacles.push(obs);
        app.stage.addChild(obs.bSprite);
        app.stage.addChild(obs.tSprite);
    }


    v = v + a; 
    player.y = player.y - v;

    if(v >= 2){
        player.rotation = -20 * Math.PI / 180;
    } else if(v <= -2){
        player.rotation = 20 * Math.PI / 180;
    } else {
        player.rotation = 5 * v * Math.PI / 180;
    }

    for(let i: number = 0; i < obstacles.length; i++){
        const obs: Obstacle = obstacles[i];
        obs.bSprite.x = obs.bSprite.x - PIPE_SPEED;
        obs.tSprite.x = obs.tSprite.x - PIPE_SPEED;
        if(isColliding(player, obs.bSprite) || isColliding(player, obs.tSprite)){
            alert("Kris died. \n You survived: " + waves + " number of waves.")
            isActive = false;
            mainTicker.stop();
        }
    }
    if(player.y <= 0){
        player.y = 0; 
        v = 0;
    }
    if(player.y >= appSize - 95){
        player.y = appSize - 95;
        v = 0;
    }

});
