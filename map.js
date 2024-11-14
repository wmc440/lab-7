mapboxgl.accessToken = 'pk.eyJ1Ijoid21jNDQwIiwiYSI6ImNtMWllMGNsaDBwNzAya3BzOGw5YWFoaGEifQ.DCKA07hDOoGLHkaRFcNyxA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/wmc440/cm1if4ayu01jv01pd28y49esc',
  center: [-73.9442, 40.6982], // Starting position [lng, lat]
  zoom: 11
});


// Added part
map.on('load', () => {
  // Add a GeoJSON source with data from the API
  map.addSource('mongoLayer', {
    type: 'geojson',
    data: 'http://localhost:3000/api/geojson' // Replace with your API endpoint
  });

  // Add a layer to display MongoDB data
  map.addLayer({
    id: 'mongoLayer',
    type: 'circle', // Options: 'circle', 'line', 'fill'
    source: 'mongoLayer',
    paint: {
      'circle-radius': 6,
      'circle-color': '#efefef'
    }
  });
});