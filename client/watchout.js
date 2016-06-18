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


// initiation of enemies, positions, player and movement
generateEnemyPositions();
generateEnemies();
player();


setInterval(function(){
  moveEnemies();
}, 1000);
