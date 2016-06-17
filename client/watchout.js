// // start slingin' some d3 here.

// var stats = {
//   score: 0,
//   highScore: 0
// };

// gameOptions: {
//   width: 50px,
//   height: 50px
// }

// var axes = {
//   x: d3.scale.linear().domain([0,100]).range([0,gameOptions.width]),
//   y: d3.scale.linear().domain([0,100]).range([0,gameOptions.height])
// };

d3.selectAll('body')
.append('svg').attr('width', 1000).attr('height', 1000).attr('border', '1px solid black')
.append('circle')
.attr("cx", 100)
.attr("cy", 100)
.attr("r", 10)
.attr("fill", '#ff6600');


// updateScoreBoard = ->
//   d3.select(".current").select('.childNode').text(stats.score.toString())


class Player {
  
  constructor () {
    fill = '#ff6600';
    cx = 100;
    cy = 100;
    r = 10;    
  }

}



d3.select('svg').append('circle')
.attr("cx", 100)
.attr("cy", 100)
.attr("r", 10)
.attr("fill", '#ff6600');

// d3.select('body').append('svg')
// .attr("width", 200).attr("height", 200)
// .append(new Player());