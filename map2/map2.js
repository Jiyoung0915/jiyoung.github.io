// Coordinates of San Francisco and zoom level of the map
let surfSanFran = L.map('sanFran').setView([37.8292506,-122.4521499], `11`)

// load basemap: black
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(surfSanFran)

// load a latest gridded surface oceanographic forecast model guidance and immediate shelf from the NOAA/NOS San Francisco Bay Operational Forecast System (SFBOFS).
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/guidance_model_coastalocean_sfbofs_time/MapServer',
  opacity: 0.9
}).addTo(surfSanFran)


// load surfing places from ArcGIS Online
var surfingPoint = L.esri.featureLayer({
  url: 'https://services9.arcgis.com/SDQDNhpG8jikA0D1/arcgis/rest/services/surfing/FeatureServer/0',
  style: function (feature) {
          return {color: 'blue', weight: 2 };
        }
}).addTo(surfSanFran);

// Popup of surfingPoint Layer
surfingPoint.bindPopup(function (layer) {
    return L.Util.template('<p>{Place}</p>', layer.feature.properties);
  });
