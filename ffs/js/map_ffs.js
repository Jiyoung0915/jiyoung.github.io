let myMap = L.map('mapFFS').setView([30.411831, -91.179157], 14)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(myMap)

//Add marker
let myMarker = L.marker([30.411831, -91.179157]).addTo(myMap)

//popup
myMarker.bindPopup('The First Crime Finder System')

//scale bar
L.control.scale().addTo(myMap);
