// Coordinates of Baton Rouge and zoom level of the map
let brMap = L.map('brMapView').setView([30.5230936,-91.071391], `11`)

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
let freeZoneLayer = L.layerGroup().addTo(brMap)
let crimeLayer = L.layerGroup().addTo(brMap)
let vacancyLayer = L.layerGroup().addTo(brMap)
let houseLayer = L.layerGroup().addTo(brMap)

// Public safety freeZone
let freeZoneUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/Crime_Nighttime.geojson'
$.getJSON(freeZoneUrl, function(data){
  var theftIcon =L.icon({
    iconUrl: 'https://jiyoung0915.github.io/jiyoung.github.io/theft.gif',
    iconSize: [50,40]
  });
  L.geoJson(data ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: theftIcon});
    }
  }  ).addTo(brMap);
});

// L.geoJSON(data, freeZoneGeojsonOptions).addTo(brMap)})

// Public safety freeZone
// let freeZoneUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/Crime_Nighttime.geojson'
// jQuery.getJSON(freeZoneUrl, function (data) {
//   let freeZoneStyle = {
//   color: '#0868ac',
//   weight: 1,
//   fillOpacity: 0.5,
//   array: 1
// }
//     let onEachFeature = function (feature, layer) {           //Begining part of popup
//       let freeZoneName = feature.properties.DESCRIPTIO
//       let freeZoneAdr = feature.properties.FULL_ADDRE
//       layer.bindPopup(freeZoneName + '<br>Address: '+ freeZoneAdr)
//       freeZoneLayer.addLayer(layer)
//       }
// 		let freeZoneGeojsonOptions = {
// 			style: freeZoneStyle,
//       onEachFeature: onEachFeature
//  		}
// L.geoJSON(data, freeZoneGeojsonOptions).addTo(brMap)})

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
// L.geoJSON(data, crimeGeojsonOptions).addTo(brMap)})
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
// L.geoJSON(data, vacancyGeojsonOptions).addTo(brMap)})
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
// L.geoJSON(data, houseGeojsonOptions).addTo(brMap)})


// layer on or off
// let layers = {
//   'Home-ownership rate': houseLayer,
//   'Vacancy rate': vacancyLayer,
//   'Crime rate': crimeLayer,
//   'Drug and Gun free Zone': freeZoneLayer
// }
L.control.layers(basemaps).addTo(brMap)
