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
let heatLayer = L.layerGroup().addTo(brPointMap)
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
let heatUrl = 'https://jiyoung0915.github.io/jiyoung.github.io/Crime_Nighttime.geojson'
$.getJSON(heatUrl, function(data){
var heat = L.heatLayer([], {
      radius: 35,
      opacity: 0.5,
      gradient: {
        0.45: "rgb(0,0,255)",
        0.55: "rgb(0,255,255)",
        0.65: "rgb(0,255,0)",
        0.95: "rgb(255,255,0)",
        1.0:  "rgb(255,0,0)"
      }
    }).addTo(brPointMap);
});

L.control.layers(basemaps).addTo(brPointMap)
