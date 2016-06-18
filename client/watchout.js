
// svg board properties
var dimensions = {
  width: 500,
  height: 500
};

//append svg board to body
var boardTest = d3.selectAll('body')
.append('svg').attr('width', dimensions.width).attr('height', dimensions.height).attr('border', '1px solid black');


//append enemies to svg board randomly
var enemyPositions = [];

var generateEnemyPositions = function(number) {
  var randomX, randomY;

  for (var i = 0; i < number; i++ ) { 
    randomX = Math.floor(Math.random() * dimensions.width);
    randomY = Math.floor(Math.random() * dimensions.height);
    enemyPositions.push([randomX, randomY]);
  }

};


var generateEnemies = function(numOfEnemies) {

  var randomX = Math.floor(Math.random() * dimensions.width);
  var randomY = Math.floor(Math.random() * dimensions.height);

  // d3.select('svg')
  // .append('circle')
  // .attr("cx", randomX)
  // .attr("cy", randomY)
  // .attr("r", 10)
  // .attr("fill", '#ff6600');

  


};






// move player to random position every 2 seconds
var moveEnemies = function() {
  d3.selectAll('circle')
.data(enemyPositions)
.transition()
.delay(2000)
.attr('cy', function(x, y) { return y; })
.attr('cx', function(x, y) { return x; });
};


generateEnemyPositions(2);



// setInterval(function(){
//   moveEnemies();
// }, 1000);
