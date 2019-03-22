let myMap = L.map('map1').setView([30.44985756358743,-91.1539077758789], 8) //Coordinates of Baton Rouge
L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
}).addTo(myMap); // Load nighttime Lights base map

// add a marker
let myMarker = L.marker([30.449709578836355, -91.15425109863281]).addTo(myMap)

// add a heart shape polygon
	let myPolygon = L.polygon([
			[30.4200340982459, -91.18824005126953],
			[30.4295815597282, -91.2055778503418],
			[30.4133725253303, -91.22325897216797],
			[30.4025650066716, -91.22583389282227],
			[30.3805761571356, -91.19321823120116],
			[30.3977530552769, -91.1594009399414],
			[30.4147788952542, -91.15510940551756],
			[30.4285454463163, -91.16695404052734],
			[30.4192199303926, -91.18824005126953]
		]).addTo(myMap);

// add a polyline
let myPolyLine = L.polyline ([
		[30.4320977893375,-91.1700439453125],
		[30.4202561428451,-91.1041259765624],
		[30.3041320017636,-90.9942626953124],
		[30.2472046065341,-90.9860229492187],
		[30.1736245503585,-90.9146118164062],
		[30.1451271833761,-90.7470703125],
		[30.1189973638951,-90.6948852539062],
		[30.1094938967322,-90.5081176757812],
		[30.0191653879423,-90.3158569335937],
		[29.9953810335681,-90.0686645507812],
		[29.993002284551,-90.0508117675781],
		[30.0072739235045,-90.010986328125],
		[30.0286775329042,-90.0082397460937],
		[30.058991402837,-89.9368286132812],
		[30.1439396143727,-89.8654174804687],
	]).addTo(myMap);


//add a popup
myMarker.bindPopup('Baton Rouge')
myPolyLine.bindPopup('Highway 10')
myPolygon.bindPopup('<em>LSU school area</em>')
