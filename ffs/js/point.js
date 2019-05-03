// Coordinates of Baton Rouge and zoom level of the map
let brPointMap = L.map('brPointMapView').setView([30.5230936,-91.071391], `11`)

// load basemap: black, streets and gray map
let streetsMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(brPointMap)
let grayMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(brPointMap)
let blackMap = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(brPointMap)

//Make a list of basemaps
let basemaps = {
  'Streets': streetsMap,
  'Gray canvas': grayMap,
  'Black' : blackMap
}

//Control box for the basemaps
let gifLayer = L.layerGroup().addTo(brPointMap)
let heatMapLayer = L.layerGroup().addTo(brPointMap)
let vacancyLayer = L.layerGroup().addTo(brPointMap)
let houseLayer = L.layerGroup().addTo(brPointMap)

// gif layer
// let gifUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/Crime_Nighttime.geojson'
// $.getJSON(gifUrl, function(data){
//   var theftIcon =L.icon({
//     iconUrl: 'https://jiyoung0915.github.io/jiyoung.github.io/theft.gif',
//     iconSize: [50,40]
//   });
//   L.geoJson(data ,{
//     pointToLayer: function(feature,latlng){
// 	  return L.marker(latlng,{icon: theftIcon});
//     }
//   }  ).addTo(brPointMap);
// });

// Heat map layer
let heatMapUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/Crime_Nighttime.geojson'
$.getJSON(heatMapUrl, function (data) {
  var locations = data.features.map(function(rat) {
      // the heatmap plugin wants an array of each location
      var location = rat.geometry.coordinates.reverse();
      location.push(0.5);
      return location;
    });

  var heat = L.heatLayer(locations, { radius: 35 })
map.addLayer(heat);
});
//
// // load a census block group map with crime data.
// let crimeDemographicsUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/map3/Census_Crime_DayNight.geojson'
// jQuery.getJSON(crimeDemographicsUrl, function (data) {        //Crime rate choropleth
//   let crimeStyle = function (feature) {
//     let crime = feature.properties.Count_
//   	let population = feature.properties.TOTAL_POPU
// 		let crimeRate = crime / population * 100000
// 		let crimeColor = '#bdc9e1'
// 				if ( crimeRate < 400000 ) {crimeColor = '#a50f15'}
//         if ( crimeRate < 220000 ) { crimeColor = '#de2d26' }
//         if ( crimeRate < 130000 ) { crimeColor = '#fb6a4a' }
//         if ( crimeRate < 70000 ) { crimeColor = '#fcae91' }
// 				if ( crimeRate < 3000 ) { crimeColor = '#fee5d9' }
// 						return {
// 							fillColor: crimeColor,
// 							color: crimeColor,                               //use the color variables
// 						 	weight: 1,
// 						 	fillOpacity: 0.5,
// 						 	dashArray: '3'
// 						}
// 		}
//     let onEachFeature = function (feature, layer) {           //Begining part of popup
//       let crime = feature.properties.Count_
//       let population = feature.properties.TOTAL_POPU
//       let crimeRate = crime / population * 100000
//       let crimeRateRound = Math.round(crimeRate)
//       layer.bindPopup('Crime rate is ' + crimeRateRound )
//       crimeLayer.addLayer(layer)
//       }
// 		let crimeGeojsonOptions = {
// 			style: crimeStyle,
//       onEachFeature: onEachFeature
//  		}
// L.geoJSON(data, crimeGeojsonOptions).addTo(brPointMap)})
//
// // load a census block group map for the vacancy rate.
// let vacancyUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/map3/Census_Crime_DayNight.geojson'
// jQuery.getJSON(vacancyUrl, function (data) {              //Vacancy rate choropleth
//   let vacancyStyle = function (feature) {
//       let vacancyRa = feature.properties.VACANCY_RA
//       let vacancyColor = '#bdc9e1'
// 				if ( vacancyRa < 21 ) { vacancyColor = '#756bb1'}
//         if ( vacancyRa < 12 ) { vacancyColor = '#bcbddc' }
//         if ( vacancyRa < 3 )  { vacancyColor = '#efedf5' }
// 						return {
// 							fillColor: vacancyColor,
// 							color: vacancyColor,                               //use the color variables
// 						 	weight: 1,
// 						 	fillOpacity: 0.7,
// 						 	dashArray: '3'
// 						}
//       }
// 		  let onEachFeature = function (feature, layer) {           //Begining part of popup
//       let vacancyRa = feature.properties.VACANCY_RA
//       layer.bindPopup('vacancy rate is ' + vacancyRa )
//       vacancyLayer.addLayer(layer)
//       }
// 		let vacancyGeojsonOptions = {
// 			style: vacancyStyle,
//       onEachFeature: onEachFeature
//  		}
// L.geoJSON(data, vacancyGeojsonOptions).addTo(brPointMap)})
//
//
// // load a census block group map for the vacancy rate.
// let houseUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/map3/Census_Crime_DayNight.geojson'
// jQuery.getJSON(houseUrl, function (data) {              //house own or rent rate choropleth
//     let houseStyle = function (feature) {
//     let houseRa = feature.properties.PERCENT_OW
//     let houseColor = '#bdc9e1'
//     	if ( houseRa < 101 ) { houseColor = '#5ab4ac'}
//       if ( houseRa < 51 ) { houseColor = '#d8b365' }
//     			return {
//     				fillColor: houseColor,
//     				color: houseColor,                               //use the color variables
//     			 	weight: 1,
//     			 	fillOpacity: 0.7,
//     			 	dashArray: '3'
//     			}
//     }
//     let onEachFeature = function (feature, layer) {           //Begining part of popup
//     let houseRa = feature.properties.PERCENT_OW
//     layer.bindPopup('Home-ownership rate is ' + houseRa )
//     houseLayer.addLayer(layer)
//     }
//     let houseGeojsonOptions = {
//     style: houseStyle,
//     onEachFeature: onEachFeature
//     }
// L.geoJSON(data, houseGeojsonOptions).addTo(brPointMap)})


// layer on or off
// let layers = {
//   'Home-ownership rate': houseLayer,
//   'Vacancy rate': vacancyLayer,
//   'Crime rate': crimeLayer,
//   'Drug and Gun free Zone': freeZoneLayer
// }
L.control.layers(basemaps).addTo(brPointMap)
