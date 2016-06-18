// number of enemies
var numOfEnemies = 15;
var hasCollided = false;
var highScore = 0;
var currentScore = 0;
var collisions = 0;

// svg board properties
var dimensions = {
  width: 500,
  height: 500
};

//append svg board to body
var boardTest = d3.selectAll('body')
.append('svg').attr('width', dimensions.width).attr('height', dimensions.height).attr('border', '1px solid black');

// generate random enemy positions
var enemyPositions = [];

var generateEnemyPositions = function() {
  
  var randomX, randomY;
  enemyPositions = [];

  for (var i = 0; i < numOfEnemies; i++ ) { 
    randomX = Math.floor(Math.random() * dimensions.width);
    randomY = Math.floor(Math.random() * dimensions.height);
    enemyPositions.push([randomX, randomY]);
  }

};

// generate enemies
var generateEnemies = function () {

  d3.select('svg')
  .selectAll('image')
  .data(enemyPositions)
  .enter()
  .append('image')
  .classed('enemyDots', true)
  .attr('xlink:href', 'images/ghost.gif')
  .attr('x', function(d){return d[0]; })
  .attr('y', function(d){return d[1]; })
  .attr('height', 25)
  .attr('width', 25); 
};


  // d3.select('svg')
  // .append('image')
  // .attr('xlink:href', 'images/ghost.gif')
  // .attr('x', 200)
  // .attr('y', 200)
  // .attr('height', 25)
  // .attr('width', 25); 

// move player to random position every 2 seconds
var moveEnemies = function() {
  console.log('moving');
  generateEnemyPositions();

  d3.selectAll('.enemyDots')
  .data(enemyPositions)
  .transition()
  .duration(10000)
  .attr('x', function(d) { return d[0]; })
  .attr('y', function(d) { return d[1]; })
  .ease('elastic');
};

var drag = d3.behavior.drag()
    .on("drag", dragged);



function dragged(d) {
  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}





var player = function() {
};
  d3.select('svg')
  .append('circle')
  .classed('playerDot', true)
  .attr('cx', dimensions.width / 2)
  .attr('cy', dimensions.height / 2)
  .attr('r', 10)
  .attr('fill', 'red')
  .call(drag); 

// var checkCollision = function() {
//   // collect all enemy dots
//   var enemies = d3.selectAll('.enemyDots')[0];
//   var player = d3.select('.playerDot')[0];
//   // create an each loop to examine position of each enemy
//   for (var i = 0; i < enemies.length; i++ ) {
//     var eX = enemies[i].__data__[0];
//     var eY = enemies[i].__data__[1];
//     var pX = player[0].__data__[0];
//     var pY = player[0].__data__[1];
//     var diffX = eX - pX;
//     var diffY = eY - pY;
//     var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
//     // var hasColliding = false
//     if (!hasCollided && distance < 50) {
//       console.log(distance);
//       collisions++;
//       d3.select('.collisions span').text(collisions);
//       hasCollided = true;
//       if (currentScore > highScore) {
//         highScore = currentScore;
//         d3.select('.highscore span').text(highScore);
//       }
//       setTimeout(function() {
//         hasCollided = false;
//       }, 1000);

//     }
//   }
// };


// initiation of enemies, positions, player and movement
generateEnemyPositions();
generateEnemies();
player();
// checkCollision();

setInterval (function() {
  moveEnemies();
  currentScore++;
  d3.select('.current span').text(currentScore);
}, 2000);


// setInterval (function() {
//   checkCollision();
// }, 1);

