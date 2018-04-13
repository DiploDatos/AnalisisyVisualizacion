var width = window.innerWidth,
    height = window.innerHeight;

// Create the graph
var projection = d3.geoMercator()
    .translate([width / 2.2, height / 1.5]);

// Create the visualization container
var svg = d3.select('body').append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'map');

var g = svg.append('g');
var path = d3.geoPath()
    .projection(projection);

// Set the colo scale
var color = d3.scaleThreshold()
    .domain([1, 10, 50, 100, 250])
    .range(['#fdae61', '#fee08b', '#e6f598', '#abdda4',
          '#66c2a5'].reverse());

// Read the json with countries and number of conflicts
d3.json('countries_conflicts.json', function(error, conflicts) {
   if (error) return console.error(error);

  // Read the country coordinates combined with the names
  d3.json('countries_combined.json', function(error, world) {
    if (error) return console.error(error);

    //countries
    g.append('g')
        .attr('class', 'boundary')
      .selectAll('boundary') // Create each of the countries
        .data(topojson.feature(world, world.objects.countries).features)
        .enter().append('path')
        .attr('name', function(d) {return d.properties.name;})
        .attr('id', function(d) { return d.id;})
        .attr('d', path)
        .attr('fill', function(d) {
          if (conflicts[d.properties.name] == undefined) {
            return 'white';
          }
          return color(conflicts[d.properties.name]);
        }).style('stroke', 'grey');
  });
});
