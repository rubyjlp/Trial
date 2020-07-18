var tileSide = 400;
var crossSize = 10;
var threadSize = 3;
var spaces = [];
var stitchCase = [2, 1];
var repeats = 10

function setup() {
  tileSide = tileSide-crossSize;
  createCanvas(tileSide*repeats, tileSide*repeats);
  background(255);
  stroke(255, 0, 0);
  strokeWeight(threadSize);

  for (var i = 0; i < ((tileSide / crossSize)+1); i++) {
    append(spaces, []);
  }

  for (var a = 0; a < ((tileSide / crossSize)+1); a++) {
    for (var b = 0; b < ((tileSide / crossSize)+1); b++) {
      if (a <= (tileSide / crossSize / 2) && b <= (tileSide / crossSize / 2)) {

        if (spaces[b][a]) {
          spaces[a][b] = spaces[b][a]
        } else {
          spaces[a][b] = random(stitchCase);
        }

      } else if (a > (tileSide / crossSize / 2) && b <= (tileSide / crossSize / 2)) {

        spaces[a][b] = spaces[(tileSide / crossSize / 2) - (a - (tileSide / crossSize / 2))][b];

      } else if (a <= (tileSide / crossSize / 2) && b > (tileSide / crossSize / 2)) {

        spaces[a][b] = spaces[a][(tileSide / crossSize / 2) - (b - (tileSide / crossSize / 2))];

      } else {

        spaces[a][b] = spaces[(tileSide / crossSize / 2) - (a - (tileSide / crossSize / 2))][(tileSide / crossSize / 2) - (b - (tileSide / crossSize / 2))];

      }

      
      //print(spaces[a][b]);
    }
  }
  
  
  for (var q = 0; q<repeats; q++){
    for (var w = 0; w<repeats; w++){
      drawTile(q*tileSide, w*tileSide);
    }
  }

  //   print(spaces);
  //   print(spaces[3]);
  //saveCanvas("redwork","jpg");

}

function drawTile(startX,startY){
  for (var n = 0; n<(tileSide/crossSize); n++){
    for (var m = 0; m<(tileSide/crossSize); m++){
      if (spaces[n][m] == 1) {
        line(m * crossSize + startX, n * crossSize + startY, (m * crossSize) + crossSize + startX, (n * crossSize) + crossSize + startY);
        line((m * crossSize) + crossSize + startX, n * crossSize + startY, m * crossSize + startX, (n * crossSize) + crossSize + startY);

      }
    }
  }
}

// function draw() {
//   background(220);
// }
