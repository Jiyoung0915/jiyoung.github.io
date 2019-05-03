var vlayer = new ol.layer.Vector({
		source : new ol.source.Vector({
			projcetion : 'EPSG:3857',
			ulr:'../Á¾·Î.geojson',
			format : new ol.format.GeoJSON()
		})
});

var mView = new ol.View({
	center : [0,0],
	zoom : 0,
	maxZoom : 19,
	minZoom : 1,
	projection : 'EPSG:3857'
});

var basemap = new ol.layer.Tile({title: 'basemap', source : new ol.source.OSM()});

var map = new ol.Map({
	target : 'map',
	renderer : 'canvas',
	view : mView,
	layer : [basemap, vlayer]
});