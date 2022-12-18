var red_button, colour_button, buttonGroup;
var redImg, blueImg, yellowImg, greenImg, pinkImg, purpleImg, greyImg, aquaImg;
var customCursor, customImg;
var bgImg;
var score = 0;
var winSound, boomSound;
var gameState = "pause";
var red = 0;


function preload() {
    redImg = loadImage("./assets/red.png");
    blueImg = loadImage("./assets/blue_square.png");
    yellowImg = loadImage("./assets/yellow_square.png");
    greenImg = loadImage("./assets/green_square.png");
    pinkImg = loadImage("./assets/pink_square.png");
    purpleImg = loadImage("./assets/purple_square.png");
    greyImg = loadImage("./assets/grey_square.png");
    aquaImg = loadImage("./assets/aqua_square.png");
    
    customImg = loadImage("./assets/cursor.png");
    bgImg = loadImage("./assets/background.png");

    boomSound = loadSound("./assets/explosion.mp3");
    winSound = loadSound("./assets/win.mp3")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    buttonGroup = new Group();

    customCursor = createSprite(500, 300)
    customCursor.addImage('cursor', customImg)
    customCursor.scale = 0.1
    
}

function draw() {

    background(bgImg, windowWidth/2, windowHeight/2);

   
    
    if(gameState == "pause"){
        textSize(25)
        fill("blue")
        text("Objective: Click all the coloured squares", 500, 100);
        text("The speed will gradually increase as you score", 500, 200)
        text("WARNING - Clicking RED will result in immediate failure", 500, 300)
        text("Click your mouse to begin the game!", 500, 600)
    
    }

    if(gameState == "play") {
        textSize(25)
        fill("blue")
        text("Don't click RED!", 600, 30)
        text("score:" + score, 800, 30)
        spawnColours();

        customCursor.x = mouseX;
        customCursor.y = mouseY;


        if(buttonGroup.isTouching(customCursor)){
 
            boomSound.play();
      
    
      for(var i=0;i<buttonGroup.length;i++){     
           
       if(buttonGroup[i].isTouching(customCursor)){
            if(red == 1){
                gameState = "end"
            }
            else{
                score = score + 1
                buttonGroup[i].destroy()
            }
            
            
            } 
      
      }
     }
    /*if (buttonGroup.isTouching(customCursor)){
        colourClick();
    }*/

    drawSprites();
    }
    if(gameState == "end"){
        console.log("end");
    }
}

    function spawnColours() {
        if (frameCount % 5 === 0){
            colour_button = createSprite(1400, 673);
            
            var rand = Math.round(random(1,8))
            //var xPosition = [[130, 30], [230, 30](330, 30], (425, 30], (525, 30], (620, 30], (720, 30], (815, 30], (915, 30], (1010, 30)], (1110, 30)], (1205, 30)], (1303, 30)], (1400, 30]]
            var yPosition = [110, 190, 270, 351, 431, 512, 592, 673]
            var xPosition = [130, 230, 330, 425, 525, 620, 720, 815, 915, 1010, 1110, 1205, 1303, 1400]
            colour_button.x = random(xPosition);
            colour_button.y = random(yPosition);
            switch(rand) {
                case 1: colour_button.addImage(redImg);
                    colour_button.scale = 0.01;
                    red = 1;
                    break;
                case 2: colour_button.addImage(blueImg);
                    break;
                case 3: colour_button.addImage(greenImg);
                    break;
                case 4: colour_button.addImage(yellowImg);
                    break;
                case 5: colour_button.addImage(pinkImg);
                    break;
                case 6: colour_button.addImage(greyImg);
                    break;
                case 7: colour_button.addImage(aquaImg);
                    break;
                case 8: colour_button.addImage(purpleImg);
                    break;
                default: break;
          }
          colour_button.scale = 0.4;
          customCursor.depth = colour_button.depth + 1;
          buttonGroup.add(colour_button);
        }
        }

        function mouseClicked() {
            gameState = "play";
            console.log("confirm");
        }

        /*function colourClick() {
            score = score + 1
            red_button.remove();
            customCursor.x = 100;
            customCursor.y = 30
        }*/