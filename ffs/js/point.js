
// Coordinates of San Francisco and zoom level of the map
let oceanActivities = L.map('oceanActivities').setView([38.583437, -99.821628], `5`)

// load basemap: black
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(oceanActivities)

// load a latest gridded surface oceanographic forecast model guidance and immediate shelf from the NOAA/NOS San Francisco Bay Operational Forecast System (SFBOFS).
let sanFran = L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/guidance_model_coastalocean_sfbofs_time/MapServer',
  opacity: 0.9,
  attirbution: 'NOAA'
}).addTo(oceanActivities)

// load a latest gridded surface oceanographic forecast model guidance and immediate shelf from the NOAA/NOS Northern Gulf of Mexico Bay Operational Forecast System (SFBOFS).
let northernGulf = L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/guidance_model_coastalocean_ngofs_time/MapServer',
  opacity: 0.9,
  attirbution: 'NOAA'
}).addTo(oceanActivities)

L.control.scale().addTo(oceanActivities)
