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
L.control.layers(basemaps).addTo(brMap)

// load a latest gridded surface oceanographic forecast model guidance and immediate shelf from the NOAA/NOS San Francisco Bay Operational Forecast System (SFBOFS).
let censusDemographicsUrl = 'https://opendata.arcgis.com/datasets/68c3d1291e9442b38012cf0dffddf61f_0.geojson'

jQuery.getJSON(censusDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(brMap)
})

let stateStyle = function (feature) {
  return {
    color: 'green',
    weight: 1,
    fillOpacity: 0.2
  }
}
L.geoJSON(data,stateGeojsonOptions).addTo(brMap)
//
// //POPup
// let censusLayer = L.layerGroup().addTo(brMap)
// censusLayer.addLayer(layer)
// let layers = {
//   'Vancany Rates by census block group': censusLayer
// }
// L.control.layers(basemaps, layers).addTo(renameThis)
