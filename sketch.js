//  S T R U K T U R

// Preload -> Font laden (muss man bei WEBGL irgendwie)
// ------SET UP-------
// 1. User Input speichern
// 2. Graphics erstellen (arr_bundesland speichert die Vertex je Bundesland)
// 3. User Input in Array speichern (eig Datenbank)
// 4. Objekte erstellen (jedes Bundesland)
// 5. Objekte in Array speichern (alleLaender)
// 6. Beliebteste Emotionen ausrechnen
// ------DRAW-------
// 7. BG, Camera, Lights
// 8. Infographics einfügen
// 9. Map Movement Interaction
// 10. Display Shapes/Map 
// ------CLASS-------
// c1. Constructors
// c2. findingHighestEmotion (sucht beliebtese Emotions -> aufgerufen Step 6)
// c3. display (zeigt die Karte an -> aufgerufen Step 10)
// c4. showSphere (zeigt die interaktiven Würfel an -> aufgerufen Step 10)
// c5. displayScores (zeigt die Infografik zu den Emotionen an -> aufgerufen Step 8)
// c6. displayTimeline (zeigt den Zeitstrahl zu den Emotionen an -> aufgerufen Step 8)
// ------MousePressed-------




let boxHeight = 10;
let myFont;
let angle = 0;
let alleLaender = [];
//let emotionMid = "happy"; //PLATZHALTER
//let emotionLow = "einsam"; //PLATZHALTER
let thisIsClicked = true;

let emotionsBadenWuerttemberg; let emotionsBayern; let emotionsBerlin; let emotionsBrandenburg; let emotionsBremen; let emotionsHamburg; let emotionsHessen; let emotionsMecklenburgVorpommen; let emotionsNiedersachsen; let emotionsNRW; let emotionsRheinlandPfalz; let emotionsSaarland; let emotionsSachsen; let emotionsSachsenAnhalt; let emotionsSchleswigHoltstein; let emotionsThueringen;

let camera;
let cameraX = 0;
let cameraZ = 700;
let verschoben = false;
let smoothEffect = 5;

let sizedX;
let sizedY;
let ausgewaehlt = false;
let smoothEffect1 = 15;

let monthlyValue = [];



function preload(){
  myFont = loadFont('./img/Raleway/static/Raleway-Medium.ttf');
  myFontBold = loadFont('./img/Raleway/static/Raleway-Black.ttf');
}

function setup() {

//////////////////////////////////////////////////////////////////////////////////////////////////////// Wie kann ich die Daten aus dem HTML Dokument speichern?
// ------------------ 1: USER INPUT IN VARIABEL SPEICHERN ------------------

let url = window.location.href; 
let data = url.split('?')[1]; 
let splitData = data.split('&'); 
let userFeeling = splitData[0].split('=')[1]; 
let userOrigin = splitData[1].split('=')[1]; 

console.log(userFeeling, userOrigin); 

// let userForm = document.getElementById('userForm');
// let userFeeling = document.getElementById('userFeeling');
// let userOrigin = document.getElementById('userOrigin');


// Platzhalter:
// let userFeeling = 'glücklich';
// let userOrigin = 'Berlin';





// ------------------ 2: GRAPHICS ERSTELLEN ------------------
// WEBGL Environment mit Camera
// Danach werden alle Bundesländer mit Vektoren erstellt. 
// Die Schnittpunkte werden in Vertex Punkte gespeichert und dann in 
// Arrays (einer pro Bundesland) zusammengefügt.
// Arrays heißen: arr_bundesland


createCanvas(windowWidth, windowHeight, WEBGL);
camera = createCamera();
setCamera(camera);
sizedX = windowWidth;
sizedY = windowHeight;

//Schleswig-Holtstein 
let v1 = createVector(-90, -350, 0); //oben
let v2 = createVector(30, -300, 0); //rechts / G Mecklen
let v3 = createVector(-5, -220, 0); //rechts unten / G hamburg-Mecklen
let v4 = createVector(-22, -255, 0); //spitze unten / G Hamburg
let v5 = createVector(-42, -235, 0); // Mitte unten / G Hamburg-Nieders
let v6 = createVector(-70, -260, 0); //links unten / G Nieders


//Hamburg
let v7 = createVector(-35, -218, 0); //unten / G Nieders


//Mecklenburg-Vorpommern
let v8 = createVector(100,-315, 0); //oben
let v9 = createVector(195,-230, 0); //rechts / G Brandenburg
let v10 = createVector(130,-210, 0); //unten mitte r / G Brandenburg
let v11 = createVector(80,-220, 0);//unten mitte l / G Brandenburg
let v12 = createVector(50, -190, 0); // unten / G Brandenburg-SachsenA-Nieders

//Niedersachsen
let v13 = createVector(-175, -240, 0); //links oben
let v14 = createVector(-180, -140, 0); //links unten / G NRW
let v15 = createVector(-80, -150, 0); // unten mitte / G NRW
let v16 = createVector(-40, -50, 0); // unten / G NRW-Hessen-Thüringen
let v17 = createVector(5,-70, 0); //unten rechts / G Thüringen-SachsenA

//Bremen
let v18 = createVector(-100, -205, 0); //mitte links / G Bremen
let v19 = createVector(-95, -190, 0); //mitte links-u / G Bremen
let v20 = createVector(-75, -190, 0); //mitte rechts-u / G Bremen
let v21 = createVector(-80, -202, 0); //mitte rechts-o / G Bremen

//Brandenburg 
let v22 = createVector(185, -185, 0); // rechts
let v23 = createVector(220, -70, 0); // rechts unten / G Sachsen
let v24 = createVector(150, -55, 0); // unten / G Sachsen
let v25 = createVector(140, -80, 0); // links / G Sachsen-SachsenA
let v26 = createVector(100, -110, 0); // links / G SachsenA
let v27 = createVector(90, -170, 0); // links / G SachsenA

//Berlin
let v28 = createVector (145, -160, 0);// oben links
let v29 = createVector(160, -160, 0);//oben rechts
let v30 = createVector(170, -140, 0);//unten rechts
let v31 = createVector(130,-140, 0); //unten links

//NRW
let v32 = createVector(-240, -40, 0); // links
let v33 = createVector(-225, 35, 0); // links unten / G Rheinland
let v34 = createVector(-150,-10,0); // unten / G Rheinland
let v35 = createVector(-130,0,0); //unten / G Rheinland-Hessen

//Hessen
let v36 = createVector(-140, 50,0); // links mitte / G Rheinland
let v37 = createVector(-110, 100,0); // links unten / G Rheinland-Badenw
let v38 = createVector(-80,105,0); // unten r/ G Rheinland-Badenw-Bayern
let v39 = createVector(-80,55,0); // rechts / G Bayern
let v40 = createVector(-20,30,0); // rechts / G Bayern-Thüringen

//Thüringen
let v41 = createVector(20, 50,0); // unten / G Bayern
let v42 = createVector(83, 35,0); // rechts / G Bayern-Sachsen
let v43 = createVector(114,-20,0); // rechts/ G Sachsen
let v44 = createVector(100, -21,0); // rechts / G Sachsen-SachsenA

//SachsenAnhalt
let v45 = createVector(90,-60,0); // rechts / G Sachsen

//SAchsen
let v46 = createVector(230,-10,0); // rechts

//Bayern
let v47 = createVector(110,110,0); // rechts oben
let v48 = createVector(180,170,0); //rechts
let v49 = createVector(140, 220,0); // rechts m u
let v50 = createVector(140,280,0); // unten rechts
let v51 = createVector(50,285,0); // unten
let v52 = createVector(-57,276,0); //unten links / G BadenW
let v53 = createVector(0, 170,0); // mitte links / G Baden W
let v54 = createVector(-40,90,0); // oben links / G BadenW


//BadenW
let v55 = createVector(-125, 155,0); // links / G Rheinland
let v56 = createVector(-170, 250,0); // unten links
let v57 = createVector(-145,275,0); // unten
let v58 = createVector(-110, 253,0); // unten rechts

//Saarland
let v59 = createVector(-210, 130,0); // links / G Rheinland
let v60 = createVector(-230, 100,0); // unten links
let v61 = createVector(-200,96,0); // unten
let v62 = createVector(-170, 115,0); // unten rechts
let v63 = createVector(-172, 135,0);


arr_schleswigH = [ v1, v2, v3, v4, v5, v6 ];
arr_hamburg = [ v3, v4, v5, v7];
arr_mecklenburg = [ v8, v9, v10, v11, v12, v3, v2];
arr_niedersachsen = [ v13, v14, v15, v16, v17, v12, v3, v7, v5, v6];
arr_bremen = [v18,v19,v20,v21];
arr_brandenburg = [v22, v23, v24, v25, v26, v27, ,v12, v11, v10, v9];
arr_berlin = [v28, v29, v30, v31];
arr_nrw = [v32, v33, v34, v35, v16, v15, v14];
arr_hessen = [v36, v37, v38, v39, v40, v16, v35];
arr_thueringen = [v41, v42, v43, v44, v17, v16, v40];
arr_sachsenAnhalt = [v45, v44, v17, v12, v27, v26, v25];
arr_sachsen = [v46, v23, v24, v25, v45, v44, v43, v42];
arr_bayern = [v47, v48, v49, v50, v51, v52, v53, v54, v38, v39, v40, v41, v42];
arr_badenW = [v55, v56, v57, v58, v52, v53, v54, v38, v37];
arr_saarland = [v59,v60,v61,v62,v63];
arr_rheinlandP = [v37, v36, v35, v34 ,v33, v60, v61, v62, v63, v55];




// ------------------ 3: USER INPUT IN ARRAY SPEICHERN (eigentlich Datenbank) ------------------

//USER ANTWORTEN ZU ARRAYS HINZUFÜGEN
emotionsBadenWuerttemberg = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'traurig', 'traurig', 'traurig', 'traurig'];
emotionsBayern = ['wütend', 'wütend', 'traurig', 'froh', 'gelangweilt', 'gelangweilt', 'lustig', 'müde', 'müse', 'müde', 'müde', 'traurig', 'wütend'];
emotionsBerlin = ['gelangweilt', 'traurig', 'froh', 'froh'];
emotionsBrandenburg = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'traurig', 'glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich'];
emotionsBremen = ['glücklich', 'müde', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'sauer', 'traurig', 'sauer', 'sauer'];
emotionsHamburg = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde'];
emotionsHessen = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'traurig', 'traurig', 'traurig', 'traurig'];
emotionsMecklenburgVorpommen = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'traurig', 'wütend', 'wütend', 'wütend'];
emotionsNiedersachsen = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'gereizt', 'langsam'];
emotionsNRW = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'traurig', 'glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'traurig', 'traurig', 'traurig'];
emotionsRheinlandPfalz = ['froh', 'froh', 'froh', 'froh', 'froh', 'froh', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'traurig', 'traurig', 'traurig', 'traurig'];
emotionsSaarland = ['müde', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'müde', 'müde', 'glücklich', 'müde', 'müde', 'traurig', 'müde'];
emotionsSachsen = ['happy', 'happy', 'happy', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'traurig', 'traurig', 'traurig', 'traurig'];
emotionsSachsenAnhalt = ['glücklich', 'traurig', 'traurig', 'froh', 'happy', 'happy', 'happy','gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'gelangweilt', 'gelangweilt', 'gelangweilt', 'traurig', 'traurig', 'traurig'];
emotionsSchleswigHoltstein = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'glücklich', 'traurig', 'müde', 'glücklich', 'müde', 'müde', 'gelangweilt', 'traurig', 'gelangweilt', 'traurig'];
emotionsThueringen = ['glücklich', 'traurig', 'traurig', 'froh', 'gelangweilt', 'froh', 'froh', 'froh', 'froh', 'müde', 'müde', 'froh', 'froh', 'traurig', 'traurig'];

if(userOrigin === 'baden-wuerttemberg'){
  emotionsBadenWuerttemberg.push(userFeeling);
}else if(userOrigin === 'bayern'){
  emotionsBayern.push(userFeeling);
}else if(userOrigin === 'berlin'){
  emotionsBerlin.push(userFeeling);
}else if(userOrigin === 'brandenburg'){
  emotionsBrandenburg.push(userFeeling);
}else if(userOrigin === 'bremen'){
  emotionsBremen.push(userFeeling);
}else if(userOrigin === 'hamburg'){
  emotionsHamburg.push(userFeeling);
}else if(userOrigin === 'hessen'){
  emotionsHessen.push(userFeeling);
}else if(userOrigin === 'mecklenburg-vorpommen'){
  emotionsMecklenburgVorpommen.push(userFeeling);
}else if(userOrigin === 'niedersachsen'){
  emotionsNiedersachsen.push(userFeeling);
}else if(userOrigin === 'nordrhein-westfalen'){
  emotionsNRW.push(userFeeling);
}else if(userOrigin === 'rheinland-pfalz'){
  emotionsRheinlandPfalz.push(userFeeling);
}else if(userOrigin === 'saarland'){
  emotionsSaarland.push(userFeeling);
}else if(userOrigin === 'sachsen'){
  emotionsSachsen.push(userFeeling);
}else if(userOrigin === 'sachsen-anhalt'){
  emotionsSachsenAnhalt.push(userFeeling);
}else if(userOrigin === 'schlesweig-holtstein'){
  emotionsSchleswigHoltstein.push(userFeeling);
}else if(userOrigin === 'thueringen'){
  emotionsThueringen.push(userFeeling);
}




// ------------------ 4: OBJEKTE ERSTELLEN (JEDES BUNDESLAND)------------------

//BUNDESLÄNDER ERSTELLEN UND EMOTIONEN ZUORDNEN
schleswigHoltstein = new Bundesland(emotionsSchleswigHoltstein, arr_schleswigH,-35, -290,boxHeight, 'Schleswig-Holtstein');
hamburg = new Bundesland(emotionsHamburg, arr_hamburg,-30, -230,boxHeight,'Hamburg');
mecklenburg = new Bundesland(emotionsMecklenburgVorpommen, arr_mecklenburg,90, -260,boxHeight, 'Mecklenburg-Vorpommen');
niedersachsen = new Bundesland(emotionsNiedersachsen, arr_niedersachsen,-35, -160,boxHeight,'Niedersachsen');
bremen = new Bundesland(emotionsBremen, arr_bremen,-90, -200,boxHeight,'Bremen');
brandenburg = new Bundesland(emotionsBrandenburg, arr_brandenburg,165, -110,boxHeight,'Brandenburg');
berlin = new Bundesland(emotionsBerlin, arr_berlin,155, -150,boxHeight,'Berlin');
hessen = new Bundesland(emotionsHessen, arr_hessen,-85, 20,boxHeight, 'Hessen');
nrw = new Bundesland(emotionsNRW, arr_nrw,-145, -70,boxHeight,'Nordrhein-Westfalen');
sachsenAnhalt = new Bundesland(emotionsSachsenAnhalt, arr_sachsenAnhalt,75,-90,boxHeight,'Sachsen');
sachsen = new Bundesland(emotionsSachsen, arr_sachsen,155,-30,boxHeight,'Sachsen-Anhalt');
thueringen = new Bundesland(emotionsThueringen, arr_thueringen,30, -10,boxHeight,'Thüringen');
bayern = new Bundesland(emotionsBayern, arr_bayern,60, 160,boxHeight, 'Bayern');
badenW = new Bundesland(emotionsBadenWuerttemberg, arr_badenW,-80, 180,boxHeight,'Baden-Wüttemberg');
saarland = new Bundesland(emotionsSaarland, arr_saarland,-200, 120,boxHeight,'Saarland');
rheinlandP = new Bundesland(emotionsRheinlandPfalz, arr_rheinlandP,-165, 80,boxHeight,'Rheinland-Pfalz');





// ------------------ 5: OBJEKTE IN ARRAY SPEICHERN ------------------


alleLaender = [
  schleswigHoltstein,
  hamburg,
  mecklenburg,
  niedersachsen,
  bremen,
  brandenburg,
  berlin,
  hessen,
  nrw,
  sachsenAnhalt,
  sachsen,
  thueringen,
  bayern,
  badenW,
  saarland,
  rheinlandP
]




// ------------------ 6: BELIEBTESTE EMOTIONEN AUSRECHNEN ------------------

  for(let i = 0; i < alleLaender.length; i++){
    alleLaender[i].findingHighestEmotion();
  }


}//end set up




function draw() {

// ------------------ 7: BG, CAMERA, LIGHTS ------------------

background(194, 255, 245);

camera.setPosition(cameraX, 0, windowHeight);


/////////LICHTER
lights();
specularColor(255, 0, 0);

let locX = mouseX - width / 2;
let locY = mouseY - height / 2;
pointLight(50, 50, 50, locX, locY, 100); //erster wert für intensität, wenn eine farbe ausgewählt wird wird nur die farbe im material heler

ambientMaterial(150,100,100);
rotateY(angle*0.1);

mx = map(mouseX, 0, 2000, 20, 255);
my = map(mouseY, 0, 2000, 20, 255);

push();
translate(0,0,-200);
noStroke();
directionalLight(0, my, mx, 0, 0, -1)
fill(170,220,230);
//ambientMaterial(150,220,220);
rect(-sizedX/2,-sizedY/2,sizedX,sizedY);
if(ausgewaehlt){
  smoothEffect1 *= 0.995;
  sizedX += smoothEffect1 * 1.13;
  sizedY += smoothEffect1;
}
pop();

// ------------------ 8: INFO GRAPHICS ------------------

for(let i = 0; i < alleLaender.length; i++){
  push();
  alleLaender[i].displayScores();
  alleLaender[i].displayTimeline();
  pop();
}





// ------------------ 9: MAP MOVEMENT ------------------

rY = map(mouseX,0,width, 1,-1);
rX = map(mouseY,0, height, -0.3, 0.3);

rotateY(rY);
rotateX(rX);
stroke(0);




// ------------------ 10: Display Shapes/Map ------------------

for(let i = 0; i < alleLaender.length; i++){
  push();
  alleLaender[i].display();
  alleLaender[i].showSphere();
  pop();
}


}//end draw




class Bundesland {
  constructor(allEmotions, arr, sphereX, sphereY, sphereZ, text){
    this.allEmotions = allEmotions;
    this.emotionHigh = '';
    this.emotionMid = '';
    this.emotionLow = '';
    this.arr = arr;
    this.col_r = 210;
    this.col_g = 245;
    this.col_b = 255;
    this.sphereX = sphereX;
    this.sphereY = sphereY;
    this.sphereZ = sphereZ;
    this.c = color(0);
    this.text = text;
    this.z = 0;
    this.d = 0;
    this.isClicked = false;
    this.highestNumberEmotion = 0;
    this.middleNumberEmotion = 0;
    this.lowestNumberEmotion = 0;
  }

  findingHighestEmotion(){
    //den Array ordnen
    this.allEmotions.sort();


    //https://www.javaer101.com/de/article/2685955.html
    let current = null; //aktuelles Element
    let cnt = 0; //Counter
    let emotions = []; //alle Emotionen
    let cntEmotions = []; //Emotionen Counter

    for (let i = 0; i < this.allEmotions.length; i++) {
      if (this.allEmotions[i] != current) {
          if (cnt > 0) {
              console.log(current + ' comes --> ' + cnt + ' times');
              emotions.push(current);
              cntEmotions.push(cnt);
          }
          current = this.allEmotions[i];
          cnt = 1;
      } else {
          cnt++;
      }
    }
    if (cnt > 0) {
      console.log(current + ' comes --> ' + cnt + ' times');
      //IRGENDWIE MUSS DAS ZWEI MAL PASSIEREN,weil das letzte sonst fehlt
      emotions.push(current);
      cntEmotions.push(cnt);
    }

    console.log(emotions); //array mit den emotions zusammengefasst
    console.log(cntEmotions); //array mit dem counter an index mit passender emotions[]

    //jetzt habe ich den höchsten Wert
    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    this.highestNumberEmotion = Math.max(...cntEmotions);
    console.log(this.highestNumberEmotion);

    //der höchste Wert befindet sich an Stelle whereHighestNumber
    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let whereHighestNumber = cntEmotions.indexOf(this.highestNumberEmotion);
    console.log(whereHighestNumber);
    
    this.emotionHigh = emotions[whereHighestNumber];
    console.log(this.emotionHigh +' ist in '+ this.text +'am stärksten');
    //////////////////////////////////////////////////////////////////////////////////////////////////////// Wie kann ich den zweiten und dritten Wert speichern?

    //setze cntEmotions an Stelle höchster Wert auf 0
    let HighZahl = whereHighestNumber; //muss in eine neue Variabel sonst erscheint ein empty spot
    cntEmotions[HighZahl] = 0;
    this.middleNumberEmotion = Math.max(...cntEmotions);
    let whereMiddleNumber = cntEmotions.indexOf(this.middleNumberEmotion);
    this.emotionMid = emotions[whereMiddleNumber];
    console.log(this.emotionMid +' ist in '+ this.text + ' mittel stark');

    let MidZahl = whereMiddleNumber;
    cntEmotions[MidZahl] = 0;
    this.lowestNumberEmotion = Math.max(...cntEmotions);
    let whereLowestNumber = cntEmotions.indexOf(this.lowestNumberEmotion);
    this.emotionLow = emotions[whereLowestNumber];
    console.log(this.emotionLow +' ist in '+ this.text +'mittel schwach');
    
    console.log(cntEmotions);
  }


  display(){
    noStroke();
    stroke(0);
    strokeWeight(2);
    //fill(col_r, col_g, col_b)
    translate(0,0,this.z);
    ambientMaterial(this.col_r, this.col_g, this.col_b);
    beginShape();
    this.arr.forEach(v => {
      vertex(v.x, v.y,v.z);
    }); 
    endShape(CLOSE);
  }



  showSphere(){
    push();
    noStroke();
    
    translate(this.sphereX, this.sphereY, this.sphereZ);
  
    fill(this.c);
    box(10);

    //wegen WEBGL muss man die mouse erstmal richtig mappen weil es nicht bei 0 beginnt
    let x2 = map(mouseX,0, width, -width/2, width/2);
    let y2 = map(mouseY, 0, height, -height/2, height/2);

    if(verschoben){
      this.d = dist(this.sphereX + -cameraX, this.sphereY, x2, y2);
    }else{
      this.d = dist(this.sphereX, this.sphereY, x2, y2);
    }

    
    if(this.d < 30){
      this.c.setGreen(255);
      this.c.setRed(255);
      this.c.setBlue(255);
      textSize(32);
      textFont(myFontBold);
      push();
      translate(0,0,200);
      text(this.text, 10, 30);
      this.col_r = 0;
      this.col_g = 0;
      this.col_b = 0;
      if(this.z < 100){
        this.z += 1;
      }
      pop();
    }else{
      this.c.setGreen(0);
      this.c.setRed(0);
      this.c.setBlue(0);
      this.col_r = 180;
      this.col_g = 245;
      this.col_b = 255;
      this.z = 0;
    }
    pop();
  }

 
  displayScores(){
    if(this.isClicked){
      verschoben = true;
      
      if (cameraX > -windowWidth/10){
        smoothEffect *= 0.97;
        cameraX -= smoothEffect;
      }
     
      push();
        translate(-windowWidth/12,0,200);
        noStroke();
        textSize(20);
        textFont(myFontBold);

        //highestNumber als höchsten Wert im dritten Argument, weil die anderen dann auch in Relation zur highest Numer angezeigt werden
        let my1 = map(this.highestNumberEmotion,0,this.highestNumberEmotion,20,windowHeight/4.5);
        let my2 = map(this.middleNumberEmotion,0,this.highestNumberEmotion,20,windowHeight/4.5); 
        let my3 = map(this.lowestNumberEmotion,0,this.highestNumberEmotion,20,windowHeight/4.5); 

        fill(0);
        text('In ' + this.text + ' sind die Menschen:',-windowWidth/3, -windowHeight/3.5);

        textSize(14);
        rect(-windowWidth/3,-20,windowWidth/20,-my1);
        text(this.emotionHigh, -windowWidth/3, 0);

        fill(50,70,80);
        rect(-windowWidth/3 + windowWidth/15,-20,windowWidth/20,-my2);
        text(this.emotionMid, -windowWidth/3 + windowWidth/15, 0);

        fill(80,110,120);
        rect(-windowWidth/3 + windowWidth/7.5,-20,windowWidth/20,-my3);
        text(this.emotionLow, -windowWidth/3 + windowWidth/7.5, 0);

      
        //this.isClicked = thisIsClicked;
        
        //setTimeout(function(){ thisIsClicked = false; }, 2000);
      
        //console.log(this.isClicked);
      pop();
    }
    
  
  }


  displayTimeline(){
    if(this.isClicked){
      push();
      //wegen der camera
      translate(-windowWidth/12,0,200);

        textSize(10);
        textFont(myFontBold);
        fill(0);
        text('Die Menschen in '+ this.text +' fühlten sich in den letzten 12 Monaten so ' + this.emotionHigh, -windowWidth/3, windowHeight/3.5 + 20);

    

        // Koordinatensystem Graph
        let monthIntervall = (windowWidth/7.5 + windowWidth/20)/12;

        stroke(50,70,80);
        strokeWeight(3);
        line(-windowWidth/3, windowHeight/3.5, 0, -windowWidth/3 + windowWidth/7.5 + windowWidth/20, windowHeight/3.50, 0 ); // waagerechte Linie
        line(-windowWidth/3, windowHeight/3.5, 0, -windowWidth/3, 40, 0 );  //senkrechte Linie 

        stroke(80,110,120);
        strokeWeight(0.5);
        for (let i = -windowWidth/3 ; i < -windowWidth/3 + windowWidth/7.5 + windowWidth/20; i += monthIntervall){
          line(i, windowHeight/3.5, 0, i, 40, 0 ); 
        }

        //Graph
        
        //hier könnten prozentuale Werte gespeichert werden
        //////////////////////////////////////////////////////////////////////////////////////////////////////// Wo soll ich die Ergebnisse der letzen Monate speichern?
        let monat = [13,90,29,40,10,9,30,86,85,47,45,23];
        
        for (let i = 0; i < monat.length; i++){
          monthlyValue[i] = map(monat[i], 0, 100, windowHeight/3.5, 40);
        }
        
  
        stroke(0);
        noFill();
        strokeWeight(2);
        beginShape();
        for (let i = 0; i < monat.length; i++){
          vertex(-windowWidth/3 + (monthIntervall*i), monthlyValue[i], 0);
        }
        endShape();

      pop();
    }
  }




}//end Class


function mousePressed(){
  //////////////////////////////////////////////////////////////////////////////////////////////////////// Wie kann ich es hinkriegen, dass die alten Ergebnisse nicht mehr angezeigt werden, sobald die neuen gezeigt werden sollen?
  for(let i = 0; i < alleLaender.length; i++){
    if(alleLaender[i].d < 30){
      console.log(alleLaender[i]);
      alleLaender[i].isClicked = true;
      ausgewaehlt = true;
    }else{
      alleLaender[i].isClicked = false; 
    }
  }
}



// function countArray(allEmotions){
//   allEmotions.sort();

//   //https://www.javaer101.com/de/article/2685955.html
//   let current = null;
//   let cnt = 0;
//   let emotions = [];
//   let cntEmotions = [];

//     for (let i = 0; i < allEmotions.length; i++) {
//         if (allEmotions[i] != current) {
//             if (cnt > 0) {
//                 console.log(current + ' comes --> ' + cnt + ' times');
//                 emotions.push(current);
//                 cntEmotions.push(cnt);
//             }
//             current = allEmotions[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
        
//     }
//     if (cnt > 0) {
//         console.log(current + ' comes --> ' + cnt + ' times');
//         //IRGENDWIE MUSS DAS ZWEI MAL PASSIEREN,weil das letzte sonst fehlt
//         emotions.push(current);
//         cntEmotions.push(cnt);
//     }

//     console.log(emotions);
//     console.log(cntEmotions);

//     //jetzt habe ich den höchsten Wert
//     //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//     highestNumberEmotion = Math.max(...cntEmotions);
//     console.log(highestNumberEmotion);

//     //der höchste Wert befindet sich an Stelle whereHighestNumber
//     //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//     let whereHighestNumber = cntEmotions.indexOf(highestNumberEmotion);
//     console.log(whereHighestNumber);

//     emotionHigh = emotions[whereHighestNumber];
//     return emotionHigh;
//     console.log(emotionHigh);

//   //Jetzt eventuell die größten Zahlen im Array des Counters finden 
//   // und dann den Wert an der gleichen Stelle des anderes Arrays nehmen

//   //entweder so oder ich suche den größten wert des arrays und untersuche dann den array auf die zahl und finde heraus an welcher stelle es sitzt
// }