import {
    Sprite,
    Container,
    Application,
    Rectangle,
    Graphics,
    DisplayObject,
    Text,
    
} from "pixi.js";


let percent: number = 0.1;
let delay: number = 750;
let rockInterval: number = 2000;
let app: Application = new Application(484, 484);
let isActive: boolean = true;
let isActive2: boolean = true;
let isActive3: boolean = true;
let sideArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

let waves: number = 0;
let waves2: number = 0;
let waves3: number = 0;


//const app: Application = new Application(484, 484);
document.body.appendChild(app.view);

class Rock {
    sprite: Sprite;
    side: number;
    speed: number = 2;
    constructor(sprite: Sprite, side: number, speed?: number) {
        this.sprite = sprite;
        this.sprite.scale.x = 0.09453125;
        this.sprite.scale.y = 0.09453125;
        this.side = side;
        if(speed != undefined){
            this.speed = speed;
        }
    }
    isColliding(a: DisplayObject, b: DisplayObject): boolean {
        const ab: Rectangle = a.getBounds();
        const bb: Rectangle = b.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }
}

class Arrow {
    sprite: Sprite;
    side: number;
    direction: number;
    constructor(sprite: Sprite, side: number){
        this.sprite = sprite;
        this.sprite.scale.x = 0.05694;
        this.sprite.scale.y = 0.064879;
        this.side = side;
    }
}

let background: Sprite = Sprite.fromImage("./grid.jpg");
background.scale.x = 3.2;
background.scale.y = 3.2;
app.stage.addChild(background);

let player: Sprite = Sprite.fromImage("./liam.JPG");
player.scale.x = 0.0144;
player.scale.y = 0.0144;
player.x = 244;
player.y = 244;
app.stage.addChild(player);

function playerReset(): void{
    player.x = 244;
    player.y = 244;
}

window.onkeydown = function(e: KeyboardEvent): void {
    const LEFT: number = 37;
    const UP: number = 38;
    const RIGHT: number = 39;
    const DOWN: number = 40;
    const STEP: number = 48.4;
    if (e.keyCode === LEFT) {
        if(player.x > 90){
            player.x -= STEP;
        }
    } else if (e.keyCode === UP) {
        if(player.y > 90){
            player.y -= STEP;
        }
    } else if (e.keyCode === RIGHT) {
        if(player.x < 360){
            player.x += STEP;
        }
    } else if (e.keyCode === DOWN) {
        if(player.y < 360){
            player.y += STEP;
        }
    }
};


function isColliding(a: DisplayObject, b: DisplayObject): boolean {
    const ab: Rectangle = a.getBounds();
    const bb: Rectangle = b.getBounds();
    return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
}

alert("Help Liam dodge all the haters!");

function main1(): void{
    

    let filteredSide1: number[] = [];
    let filteredSide2: number[] = [];
    let filteredSide3: number[] = [];
    let filteredSide4: number[] = [];
    for(let i: number = 0; i <= sideArray.length; i++){
        if(Math.random() <= percent){
            filteredSide1[filteredSide1.length] = sideArray[i];
        }
        if(Math.random() <= percent){
            filteredSide2[filteredSide2.length] = sideArray[i];
        }
        if(Math.random() <= percent){
            filteredSide3[filteredSide3.length] = sideArray[i];
        }
        if(Math.random() <= percent){
            filteredSide4[filteredSide4.length] = sideArray[i];
        }
    }
    
    let rocks: Rock[] = [];
    let arrows: Arrow[] = [];
    
    for(let i: number = 0; i <= filteredSide1.length; i++){
        let sprite: Sprite = Sprite.fromImage("./angry.png"); 
        sprite.x = 48.4 * filteredSide1[i];
        sprite.y = 0;
        let rock: Rock = new Rock(sprite, 1);
        setTimeout(function(){
            rocks.push(rock);        
        }, delay);
        app.stage.addChild(rock.sprite);
        let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
        let arrow: Arrow = new Arrow(arrowSprite, 1);
        arrowSprite.x = 48.4 * filteredSide1[i];
        arrowSprite.y = 0 * filteredSide1[i];
        arrows.push(arrow);
        app.stage.addChild(arrow.sprite);
    }
    for(let i: number = 0; i <= filteredSide2.length; i++){
        let sprite: Sprite = Sprite.fromImage("./angry.png");
        sprite.x = 484 - 48.4;
        sprite.y = 48.4 * filteredSide2[i];
        let rock: Rock = new Rock(sprite, 2);
        setTimeout(function(){
            rocks.push(rock);       
        }, delay);
        app.stage.addChild(rock.sprite);
        let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
        let arrow: Arrow = new Arrow(arrowSprite, 2);
        arrowSprite.x = 484 - 48.4;
        arrowSprite.y = 48.4 * filteredSide2[i];
        arrows.push(arrow);
        app.stage.addChild(arrow.sprite);
    }
    for(let i: number = 0; i <= filteredSide3.length; i++){
        let sprite: Sprite = Sprite.fromImage("./angry.png");
        sprite.x = 48.4 * filteredSide3[i];
        sprite.y = 484 - 48.4;
        let rock: Rock = new Rock(sprite, 3);
        setTimeout(function(){
            rocks.push(rock);        
        }, delay);
        app.stage.addChild(rock.sprite);
        let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
        let arrow: Arrow = new Arrow(arrowSprite, 3);
        arrowSprite.x = 48.4 * filteredSide3[i];
        arrowSprite.y = 484 - 48.4;
        arrows.push(arrow);
        app.stage.addChild(arrow.sprite);
    }
    for(let i: number = 0; i <= filteredSide4.length; i++){
        let sprite: Sprite = Sprite.fromImage("./angry.png");
        sprite.x = 0;
        sprite.y = 48.4 * filteredSide4[i];
        let rock: Rock = new Rock(sprite, 4);
        setTimeout(function(){
            rocks.push(rock);     
        }, delay);
        app.stage.addChild(rock.sprite);
        let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
        let arrow: Arrow = new Arrow(arrowSprite, 4);
        arrowSprite.x = 0;
        arrowSprite.y = 48.4 * filteredSide4[i];
        arrows.push(arrow);
        app.stage.addChild(arrow.sprite);
    }

    
    rockInterval = rockInterval - 20;

    let main1Ticker: PIXI.ticker.Ticker = app.ticker.add(function(delta: number): void{
        for(let i: number = 0; i < arrows.length; i++){
            const theArrow: Arrow = arrows[i];
            setTimeout(function(){
                app.stage.removeChild(theArrow.sprite);
            }, delay);
        }
        for(let i: number = 0; i < rocks.length; i++){
            const theRock: Rock = rocks[i];
            if(theRock.side == 1){
                theRock.sprite.y += theRock.speed;
            }else if(theRock.side == 2){
                theRock.sprite.x -= theRock.speed;
            }else if(theRock.side == 3){
                theRock.sprite.y -= theRock.speed;
            }else if(theRock.side == 4){
                theRock.sprite.x += theRock.speed;
            }

            if(theRock.sprite.x <= 0 || theRock.sprite.x >= 500){
                app.stage.removeChild(theRock.sprite);
            }
            if(theRock.sprite.y <= 0 || theRock.sprite.y >= 500){
                app.stage.removeChild(theRock.sprite);
            }

            if (isColliding(player, theRock.sprite)) {
                alert("Liam has been overrun by haters!! \nHe survived " + (waves - 1) + " waves!")

                playerReset();
                isActive = false;
                
                document.body.removeChild(app.view);
                main1Ticker.stop();

            }
        }
    });
    if(isActive == true){
        setTimeout(function(){
            waves += 1;
            main1();
        }, rockInterval)
    } else {
        app = new Application(484,484);
        document.body.appendChild(app.view);
        let background: Sprite = Sprite.fromImage("./grid.jpg");
        background.scale.x = 3.2;
        background.scale.y = 3.2;
        app.stage.addChild(background);
    
        player.x = 244;
        player.y = 244;
        app.stage.addChild(player);
    
        rockInterval = 2000;
        
        window.onkeydown = function(e: KeyboardEvent): void {
            const LEFT: number = 37;
            const UP: number = 38;
            const RIGHT: number = 39;
            const DOWN: number = 40;
            const STEP: number = 48.4;
            if (e.keyCode === LEFT) {
                if(player.x > 90){
                    player.x -= STEP;
                }
            } else if (e.keyCode === UP) {
                if(player.y > 90){
                    player.y -= STEP;
                }
            } else if (e.keyCode === RIGHT) {
                if(player.x < 360){
                    player.x += STEP;
                }
            } else if (e.keyCode === DOWN) {
                if(player.y < 360){
                    player.y += STEP;
                }
            }
        };

        alert("Liam HATES haters");

        
        main2();
    }
} 




//-------------------------------------------------------------------





function main2(): void{



    function isColliding(a: DisplayObject, b: DisplayObject): boolean {
        const ab: Rectangle = a.getBounds();
        const bb: Rectangle = b.getBounds();
        return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }

    let filteredSide1: number[] = [];
    let filteredSide2: number[] = [];
    let filteredSide3: number[] = [];
    let filteredSide4: number[] = [];
    for(let i: number = 0; i <= sideArray.length; i++){
        if(Math.random() <= percent){
            filteredSide1[filteredSide1.length] = sideArray[i];
        }
        if(Math.random() <= percent){
            filteredSide2[filteredSide2.length] = sideArray[i];
        }
        if(Math.random() <= percent){
            filteredSide3[filteredSide3.length] = sideArray[i];
        }
        if(Math.random() <= percent){
            filteredSide4[filteredSide4.length] = sideArray[i];
        }
    }

    let rocks: Rock[] = [];
    let arrows: Arrow[] = [];

    for(let i: number = 0; i <= filteredSide1.length; i++){
        let sprite: Sprite = Sprite.fromImage("./angry2.png"); 
        sprite.x = 48.4 * filteredSide1[i];
        sprite.y = 0;
        let rock: Rock = new Rock(sprite, 1, 1 + Math.random()*(3+waves/3));
        setTimeout(function(){
            rocks.push(rock);        
        }, delay);
        app.stage.addChild(rock.sprite);
        let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
        let arrow: Arrow = new Arrow(arrowSprite, 1);
        arrowSprite.x = 48.4 * filteredSide1[i];
        arrowSprite.y = 0 * filteredSide1[i];
        arrows.push(arrow);
        app.stage.addChild(arrow.sprite);
    }
    for(let i: number = 0; i <= filteredSide2.length; i++){
        let sprite: Sprite = Sprite.fromImage("./angry2.png");
        sprite.x = 484 - 48.4;
        sprite.y = 48.4 * filteredSide2[i];
        let rock: Rock = new Rock(sprite, 2, 1 + Math.random() * (3+waves/3));
        setTimeout(function(){
            rocks.push(rock);       
        }, delay);
        app.stage.addChild(rock.sprite);
        let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
        let arrow: Arrow = new Arrow(arrowSprite, 2);
        arrowSprite.x = 484 - 48.4;
        arrowSprite.y = 48.4 * filteredSide2[i];
        arrows.push(arrow);
        app.stage.addChild(arrow.sprite);
    }
    for(let i: number = 0; i <= filteredSide3.length; i++){
        let sprite: Sprite = Sprite.fromImage("./angry2.png");
        sprite.x = 48.4 * filteredSide3[i];
        sprite.y = 484 - 48.4;
        let rock: Rock = new Rock(sprite, 3, 1 + Math.random()*(3+waves/3));
        setTimeout(function(){
            rocks.push(rock);        
        }, delay);
        app.stage.addChild(rock.sprite);
        let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
        let arrow: Arrow = new Arrow(arrowSprite, 3);
        arrowSprite.x = 48.4 * filteredSide3[i];
        arrowSprite.y = 484 - 48.4;
        arrows.push(arrow);
        app.stage.addChild(arrow.sprite);
    }
    for(let i: number = 0; i <= filteredSide4.length; i++){
        let sprite: Sprite = Sprite.fromImage("./angry2.png");
        sprite.x = 0;
        sprite.y = 48.4 * filteredSide4[i];
        let rock: Rock = new Rock(sprite, 4, 1 + Math.random()*(3+waves/3));
        setTimeout(function(){
            rocks.push(rock);     
        }, delay);
        app.stage.addChild(rock.sprite);
        let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
        let arrow: Arrow = new Arrow(arrowSprite, 4);
        arrowSprite.x = 0;
        arrowSprite.y = 48.4 * filteredSide4[i];
        arrows.push(arrow);
        app.stage.addChild(arrow.sprite);
    }
    
    let main2Ticker: PIXI.ticker.Ticker = app.ticker.add(function(delta: number): void{

        for(let i: number = 0; i < arrows.length; i++){
            const theArrow: Arrow = arrows[i];
            setTimeout(function(){
                app.stage.removeChild(theArrow.sprite);
            }, delay);
        }
        for(let i: number = 0; i < rocks.length; i++){
            const theRock2: Rock = rocks[i];
            if(theRock2.side == 1){
                theRock2.sprite.y += theRock2.speed;
            }else if(theRock2.side == 2){
                theRock2.sprite.x -= theRock2.speed;
            }else if(theRock2.side == 3){
                theRock2.sprite.y -= theRock2.speed;
            }else if(theRock2.side == 4){
                theRock2.sprite.x += theRock2.speed;
            }

            if(theRock2.sprite.x <= 0 || theRock2.sprite.x >= 500){
                app.stage.removeChild(theRock2.sprite);
            }
            if(theRock2.sprite.y <= 0 || theRock2.sprite.y >= 500){
                app.stage.removeChild(theRock2.sprite);
            }

            if (isColliding(player, theRock2.sprite)) {
                alert("Liam is getting harassed by the haters!!\nHis current finesse points is: " + waves + " x " + waves2 + " = " + waves*waves2 + ".");
                
                playerReset();
                isActive2 = false;
                
                document.body.removeChild(app.view);
                main2Ticker.stop();
            }
        }

    
    });
    if(isActive2 == true){
        setTimeout(function(){
            waves2 += 1;
            main2();

        }, rockInterval)
    } else {

        app = new Application(484,484);
        document.body.appendChild(app.view);
        let background: Sprite = Sprite.fromImage("./grid.jpg");
        background.scale.x = 3.2;
        background.scale.y = 3.2;
        app.stage.addChild(background);
    
        player.x = 244;
        player.y = 244;
        app.stage.addChild(player);
    
        rockInterval = 2000;
        
        window.onkeydown = function(e: KeyboardEvent): void {
            const LEFT: number = 37;
            const UP: number = 38;
            const RIGHT: number = 39;
            const DOWN: number = 40;
            const STEP: number = 48.4;
            if (e.keyCode === LEFT) {
                if(player.x > 90){
                    player.x -= STEP;
                }
            } else if (e.keyCode === UP) {
                if(player.y > 90){
                    player.y -= STEP;
                }
            } else if (e.keyCode === RIGHT) {
                if(player.x < 360){
                    player.x += STEP;
                }
            } else if (e.keyCode === DOWN) {
                if(player.y < 360){
                    player.y += STEP;
                }
            }
        };

        delay = 1250;
        alert("Careful, the SUPERHATERS are coming");

        main3();
    }
} 

function main3(): void{



        function isColliding(a: DisplayObject, b: DisplayObject): boolean {
            const ab: Rectangle = a.getBounds();
            const bb: Rectangle = b.getBounds();
            return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
        }
    
        let filteredSide1: number[] = [];
        let filteredSide2: number[] = [];
        let filteredSide3: number[] = [];
        let filteredSide4: number[] = [];
        for(let i: number = 0; i <= sideArray.length; i++){
            if(Math.random() <= percent){
                filteredSide1[filteredSide1.length] = sideArray[i];
            }
            if(Math.random() <= percent){
                filteredSide2[filteredSide2.length] = sideArray[i];
            }
            if(Math.random() <= percent){
                filteredSide3[filteredSide3.length] = sideArray[i];
            }
            if(Math.random() <= percent){
                filteredSide4[filteredSide4.length] = sideArray[i];
            }
        }

        let rocks: Rock[] = [];
        let arrows: Arrow[] = [];
    
        for(let i: number = 0; i <= filteredSide1.length; i++){
            let sprite: Sprite = Sprite.fromImage("./angry3.png"); 
            sprite.x = 48.4 * filteredSide1[i];
            sprite.y = 0;
            let rock: Rock = new Rock(sprite, 1,30);
            setTimeout(function(){
                rocks.push(rock);        
            }, delay);
            app.stage.addChild(rock.sprite);
            let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
            let arrow: Arrow = new Arrow(arrowSprite, 1);
            arrowSprite.x = 48.4 * filteredSide1[i];
            arrowSprite.y = 0 * filteredSide1[i];
            arrows.push(arrow);
            app.stage.addChild(arrow.sprite);
        }
        for(let i: number = 0; i <= filteredSide2.length; i++){
            let sprite: Sprite = Sprite.fromImage("./angry3.png");
            sprite.x = 484 - 48.4;
            sprite.y = 48.4 * filteredSide2[i];
            let rock: Rock = new Rock(sprite, 2,30);
            setTimeout(function(){
                rocks.push(rock);       
            }, delay);
            app.stage.addChild(rock.sprite);
            let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
            let arrow: Arrow = new Arrow(arrowSprite, 2);
            arrowSprite.x = 484 - 48.4;
            arrowSprite.y = 48.4 * filteredSide2[i];
            arrows.push(arrow);
            app.stage.addChild(arrow.sprite);
        }
        for(let i: number = 0; i <= filteredSide3.length; i++){
            let sprite: Sprite = Sprite.fromImage("./angry3.png");
            sprite.x = 48.4 * filteredSide3[i];
            sprite.y = 484 - 48.4;
            let rock: Rock = new Rock(sprite, 3, 30);
            setTimeout(function(){
                rocks.push(rock);        
            }, delay);
            app.stage.addChild(rock.sprite);
            let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
            let arrow: Arrow = new Arrow(arrowSprite, 3);
            arrowSprite.x = 48.4 * filteredSide3[i];
            arrowSprite.y = 484 - 48.4;
            arrows.push(arrow);
            app.stage.addChild(arrow.sprite);
        }
        for(let i: number = 0; i <= filteredSide4.length; i++){
            let sprite: Sprite = Sprite.fromImage("./angry3.png");
            sprite.x = 0;
            sprite.y = 48.4 * filteredSide4[i];
            let rock: Rock = new Rock(sprite, 4, 30);
            setTimeout(function(){
                rocks.push(rock);     
            }, delay);
            app.stage.addChild(rock.sprite);
            let arrowSprite: Sprite = Sprite.fromImage("./warning.png")
            let arrow: Arrow = new Arrow(arrowSprite, 4);
            arrowSprite.x = 0;
            arrowSprite.y = 48.4 * filteredSide4[i];
            arrows.push(arrow);
            app.stage.addChild(arrow.sprite);
        }
        percent = percent + 0.003;
        
        let main3Ticker: PIXI.ticker.Ticker = app.ticker.add(function(delta: number): void{
    
            for(let i: number = 0; i < arrows.length; i++){
                const theArrow: Arrow = arrows[i];
                setTimeout(function(){
                    app.stage.removeChild(theArrow.sprite);
                }, delay);
            }
            for(let i: number = 0; i < rocks.length; i++){
                const theRock3: Rock = rocks[i];
                if(theRock3.side == 1){
                    theRock3.sprite.y += theRock3.speed;
                }else if(theRock3.side == 2){
                    theRock3.sprite.x -= theRock3.speed;
                }else if(theRock3.side == 3){
                    theRock3.sprite.y -= theRock3.speed;
                }else if(theRock3.side == 4){
                    theRock3.sprite.x += theRock3.speed;
                }
    
                if(theRock3.sprite.x <= 0 || theRock3.sprite.x >= 500){
                    app.stage.removeChild(theRock3.sprite);
                }
                if(theRock3.sprite.y <= 0 || theRock3.sprite.y >= 500){
                    app.stage.removeChild(theRock3.sprite);
                }
    
                if (isColliding(player, theRock3.sprite)) {
                    alert("Oh no, you've died again!\nYour total points is: " + waves + " x " + waves2 + " x " + waves3 + " = " + waves*waves2*waves3 + ".");
                    
                    playerReset();
                    isActive3 = false;
                    
                    document.body.removeChild(app.view);
                    main3Ticker.stop();
                }
            }
    
        
        });
            setTimeout(function(){
                waves3 += 1;
                main3();
            }, rockInterval)

    }
    



main1();
