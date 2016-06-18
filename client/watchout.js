// number of enemies
var numOfEnemies = 10;




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
  .selectAll('circle')
  .data(enemyPositions)
  .enter()
  .append('circle')
  .classed('enemyDots', true)
  .attr('cx', function(d){return d[0]; })
  .attr('cy', function(d){return d[1]; })
  .attr('r', 10)
  .style('fill', '#000');  
};

// move player to random position every 2 seconds
var moveEnemies = function() {

  generateEnemyPositions();

  d3.selectAll('.enemyDots')
  .data(enemyPositions)
  .transition()
  .delay(1000)
  .attr('cx', function(d){return d[0]; })
  .attr('cy', function(d){return d[1]; });
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

var checkCollision = function() {
  // collect all enemy dots
  var enemies = d3.selectAll('.enemyDots')[0];
  var player = d3.select('.playerDot')[0];
  // create an each loop to examine position of each enemy
  for (var i = 0; i < enemies.length; i++ ) {
    var eX = enemies[i].__data__[0];
    var eY = enemies[i].__data__[1];
    var pX = player[0].__data__[0];
    var pY = player[0].__data__[1];
    var diffX = eX - pX;
    var diffY = eY - pY;
    var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    if (distance < 50) {
      console.log(distance);
      d3.select('.collisions').select('span').text(100);
    }
  }
};


// initiation of enemies, positions, player and movement
generateEnemyPositions();
generateEnemies();
player();
checkCollision();

setInterval(function(){
  moveEnemies();
}, 1000);

setInterval(function() {
  checkCollision();
}, 0.5);

