var svgHeight = 800;
var svgLength = 800;
var startYr = 1974;
var endYr = 2016;





d3.select('svg')
.selectAll('circle')
.data(hpiData)
.enter()
.append('circle')
.attr('cx', function(d) { 

  if(d.frequency === 'monthly') {
    return (((d.yr - startYr) / (endYr - startYr)) * svgLength) + ((d.period / 12) * (svgLength / (endYr - startYr)));    
  } else {
    return (((d.yr - startYr) / (endYr - startYr)) * svgLength) + ((d.period / 4) * (svgLength / (endYr - startYr)));        
  }

  })
.attr('cy', function(d) { return ((-1 * (d.index_nsa/svgHeight)) + 1) * svgHeight; })
.attr('r', 2)
.style('fill', function(d) {
  if (d.place_name == 'East North Central Division') {
    console.log('green')
    return 'green';
  } else {
    console.log('red')
    return 'red';
  }
});
