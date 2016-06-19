var svgHeight = 800;
var svgLength = 800;
var startYr = 1974;
var endYr = 2016;





d3.select('svg')
.selectAll('circle')
.data(hpiData2)
.enter()
.append('circle')
.attr('cx', function(d) { 

  if (d.frequency === 'monthly') {
    return (((d.yr - startYr) / (endYr - startYr)) * svgLength) + ((d.period / 12) * (svgLength / (endYr - startYr)));    
  } else {
    return (((d.yr - startYr) / (endYr - startYr)) * svgLength) + ((d.period / 4) * (svgLength / (endYr - startYr)));        
  }

})
.attr('cy', function(d) { return ((-1 * (d.index_nsa / svgHeight)) + 1) * svgHeight; })
.attr('r', 2)
.style('fill', function(d) {
  if (d.place_name === 'East North Central Division') {
    return 'green';
  } else {
    return 'red';
  }
});

var sortByPlaceName = function(name) {
  console.log("HEELLLLOOO");
  var newData = hpiData2.filter(function(obj) {
    if(name === 'all') {
      return true;
    } else {
    return obj.place_name === name;
    }
  });
  var newSelection = d3.select('svg')
  .selectAll('circle')
  .data(newData);
  
  newSelection
  .enter()
  .append('circle')
  .attr('cx', function(d) { 
    if (d.frequency === 'monthly') {
      return (((d.yr - startYr) / (endYr - startYr)) * svgLength) + ((d.period / 12) * (svgLength / (endYr - startYr)));    
    } else {
      return (((d.yr - startYr) / (endYr - startYr)) * svgLength) + ((d.period / 4) * (svgLength / (endYr - startYr)));        
    }
  })
  .attr('cy', function(d) { return ((-1 * (d.index_nsa / svgHeight)) + 1) * svgHeight; })
  .attr('r', 2)
  .transition()
  .duration(3000);
  
  newSelection
  .exit()
  .transition()
  .duration(10000)
  .style('cy', 0)
  .remove();
};

d3.select('button').on('click', function() {
  var selection = prompt( 'Provide a location name');
  sortByPlaceName(selection);
});