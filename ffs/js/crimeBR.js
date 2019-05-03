// Coordinates of Baton Rouge and zoom level of the map
let brMap = L.map('brMapView').setView([30.4489936,-91.125555], `12`)

// load basemap: black, streets and gray map
let streetsBRmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(brMap)
let grayBRmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(brMap)
let blackBRmap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(brMap)

//Make a list of basemaps
let basemaps = {
  'Streets': streetsBRmap,
  'Gray canvas': grayBRmap,
  'Black' : blackBRmap
}

//Control box for the basemaps
let crimeLayer = L.layerGroup().addTo(brMap)
let gifLayer = L.layerGroup().addTo(brMap)

//gif layer
let gifUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/Crime_Nighttime.geojson'
$.getJSON(gifUrl, function(data){
  var thiefIcon =L.icon({
    iconUrl: 'images/thief.gif',
    iconSize: [50,40]
  });
  L.geoJson(data ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: thiefIcon});
      gifLayer.addLayer(layer)
    }
  }  ).addTo(brMap);
})

// Top crime type
let crimeTypeUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/ffs/geojson/br.geojson'
jQuery.getJSON(crimeTypeUrl, function (data) {
  let crimeStyle = function (feature) {
    let crime = feature.properties.DIV_Num
		let crimeColor = '#bdc9e1'
				if ( crime == '1' ) {crimeColor = '#a50f15'}
        if ( crime == '2' ) {crimeColor = '#66a61e'}
        if ( crime == '3' ) {crimeColor = '#377eb8'}
        if ( crime == '4' ) {crimeColor = '#a50f15'}
        if ( crime == '5' ) {crimeColor = '#7570b3'}
        						return {
							fillColor: crimeColor,
							color: crimeColor,                               //use the color variables
						 	weight: 1,
						 	fillOpacity: 0.5,
						 	dashArray: '3'
						}
		}
    let onEachFeature = function (feature, layer) {           //Begining part of popup
      let crime = feature.properties.DIV
      layer.bindPopup('Top Crime type is ' + crime )
      crimeLayer.addLayer(layer)
      }
		let crimeGeojsonOptions = {
			style: crimeStyle,
      onEachFeature: onEachFeature
 		}
L.geoJSON(data, crimeGeojsonOptions).addTo(brMap)})


// layer on or off
let layers = {
  'Top crime': crimeLayer,
  'Crime Incident': gifLayer
}
L.control.layers(basemaps, layers).addTo(brMap)

//scale bar
L.control.scale().addTo(brMap);
