let boxHeight = 10;
let myFont;
let angle = 0;
let alleLaender = [];
let userFeeling;
let userOrigin;
let canvas;

function preload(){
  beispiel_map = loadImage('./img/Deutschlandkarte-beispiel-raster.png');
  myFont = loadFont('./img/Raleway/static/Raleway-Medium.ttf');
}


function userZeug(){
  let userForm = document.getElementById("userForm").value;
  alert(userForm);
}





function setup() {

// let userForm = document.getElementById("userForm");
// userFeeling.onsubmit = function(){
//   alert(userForm);
// }

// userFeeling = prompt("Wie fühlst du dich heute?", "<dein Gefühl>");

canvas = createCanvas(windowWidth, windowHeight, WEBGL);
canvas.position(0,0,0);
canvas.style('z-index', '-1');
  // camera = createCamera();
  // setCamera(camera);
  // strokeWeight(6);

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


schleswigHoltstein = new Bundesland(arr_schleswigH,-35, -290,boxHeight, 'Schleswig-Holtstein');
hamburg = new Bundesland(arr_hamburg,-30, -230,boxHeight,'Hamburg');
mecklenburg = new Bundesland(arr_mecklenburg,90, -260,boxHeight, 'Mecklenburg-Vorpommen');
niedersachsen = new Bundesland(arr_niedersachsen,-35, -160,boxHeight,'Niedersachsen');
bremen = new Bundesland(arr_bremen,-90, -200,boxHeight,'Bremen');
brandenburg = new Bundesland(arr_brandenburg,165, -110,boxHeight,'Brandenburg');
berlin = new Bundesland(arr_berlin,155, -150,boxHeight,'Berlin');
hessen = new Bundesland(arr_hessen,-85, 20,boxHeight, 'Hessen');
nrw = new Bundesland(arr_nrw,-145, -70,boxHeight,'Nordrhein-Westfalen');
sachsenAnhalt = new Bundesland(arr_sachsenAnhalt,75,-90,boxHeight,'Sachsen');
sachsen = new Bundesland(arr_sachsen,155,-30,boxHeight,'Sachsen-Anhalt');
thueringen = new Bundesland(arr_thueringen,30, -10,boxHeight,'Thüringen');
bayern = new Bundesland(arr_bayern,60, 160,boxHeight, 'Bayern');
badenW = new Bundesland(arr_badenW,-80, 180,boxHeight,'Baden-Wüttemberg');
saarland = new Bundesland(arr_saarland,-200, 120,boxHeight,'Saarland');
rheinlandP = new Bundesland(arr_rheinlandP,-165, 80,boxHeight,'Rheinland-Pfalz');

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
}

function draw() {
background(100,170,160);



/////////LICHTER
lights();
specularColor(255, 0, 0);

let locX = mouseX - width / 2;
let locY = mouseY - height / 2;
pointLight(50, 50, 50, locX, locY, 100); //erster wert für intensität, wenn eine farbe ausgewählt wird wird nur die farbe im material heler

ambientMaterial(150,100,100);
rotateY(angle*0.1);

mx = map(mouseX, 0, width, 0, 0);
my = map(mouseY, 0, width, 0, 0);


///////// BEWEGUNG DEUTSCHLAND MAP

rY = map(mouseX,0,width, 1,-1);
rX = map(mouseY,0, height, -0.3, 0.3);




rotateY(rY);
rotateX(rX);
stroke(0);


///////// SHAPES MALEN
for(let i = 0; i < alleLaender.length; i++){
  push();
  alleLaender[i].display();
  pop();
}

///////// SHAPES MALEN


}




class Bundesland {
  constructor(arr, sphereX, sphereY, sphereZ, text){
    this.arr = arr;
    this.col_r = 150;
    this.col_g = 250;
    this.col_b = 250;
    this.sphereX = sphereX;
    this.sphereY = sphereY;
    this.sphereZ = sphereZ;
    this.c = color(255);
    this.text = text;
    this.z = 0;
  }

  display(){
    noStroke();
    stroke(50,100,100);
    strokeWeight(6);
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

    let d = dist(this.sphereX, this.sphereY, x2, y2);

    if(d < 20){
      this.c.setGreen(0);
      textSize(32);
      textFont(myFont);
      push();
      translate(0,0,200);
      text(this.text, 10, 30);
      this.col_r = 255;
      if(this.z < 100){
        this.z += 1;
      }
      pop();
    }else{
      this.c.setGreen(255);
      this.col_r = 150;
      this.z = 0;
    }
    pop();
  
  }



}

function startScreen(){
  //bg
  //input gefühl
  //auswahlmöglichkeiten von Gefühlen
  //auswahl Bundesland 
  //weiter
}
