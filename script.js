window.alert("My Web mapping journey! 📚💪");

// Map initialization ], copied from Leaflet site
// var map = L.map('map').setView([6.5244, 3.3792], 15);
var map = L.map('map').setView([6.5836, 3.2936], 13);  // Akowonjo, Lagos


// myMap layer, also copied from leaflet site. difference is that i named the var, myMap
var myMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 
myMap.addTo(map);

// Water Color. copied from openstreet map
var waterColor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
	minZoom: 1,
	maxZoom: 16,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
});

// When i do addTo(map) for the Var waterColor, it will overide myMap.
// waterColor.addTop(map);

// Google street map
var googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
 //googleStreets.addTo(map);


// google satellite

googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
 //googleSat.addTo(map);

// Marker
var myIcon = L.icon({
    iconUrl: '/img/map-marker.webp',
    iconSize: [40, 40],
});

var singleMarker = L.marker([6.5244, 3.3792], {icon: myIcon, draggable: true}) ;
var PopUp = singleMarker.bindPopup('Thi is Lagos ' + singleMarker.getLatLng()).openPopup();
//singleMarker.addTo(map);

console.log(singleMarker.toGeoJSON());


// Crystal Hospital marker
var crystalMarker = L.marker([6.602839537617199, 3.3062946459804765], {icon: myIcon}) ;
var PopUp = crystalMarker.bindPopup('Crystal Specialist Hospital ' + crystalMarker.getLatLng()).openPopup();
crystalMarker.addTo(map);


// St Ives Specialist Hospital marker
var ivesMarker = L.marker([6.601986068657348, 3.3029244111497236], {icon: myIcon}) ;
var PopUp = ivesMarker.bindPopup('St Ives Specialist Hospital ' + ivesMarker.getLatLng()).openPopup();
ivesMarker.addTo(map);


// Bee Hees Hospital Marker
var beeMarker = L.marker([6.601778347339463, 3.3019656334478724], {icon: myIcon}) ;
var PopUp = beeMarker.bindPopup('Bee Hees Hospital ' + beeMarker.getLatLng()).openPopup();
beeMarker.addTo(map);


// Akowonjo Primary Healtcare centre Marker
var akowonjoMarker = L.marker([6.60054685924282, 3.3003988818649153], {icon: myIcon}) ;
akowonjoMarker.bindPopup('Akowonjo Primary Healtcare centre ' + akowonjoMarker.getLatLng()).openPopup();
akowonjoMarker.addTo(map);


// Bob Specialist Hospital Marker
var bobMarker = L.marker([6.588938291375153, 3.291252371164152], {icon: myIcon}) ;
bobMarker.bindPopup('Bob Specialist Hospital ' + bobMarker.getLatLng()).openPopup();
bobMarker.addTo(map);

// Firstmed Specialist Hospital Marker
var firstMarker = L.marker([6.5793335050797745, 3.282229899602998], {icon: myIcon}) ;
firstMarker.bindPopup('Firstmed Specialist Hospital ' + firstMarker.getLatLng()).openPopup();
firstMarker.addTo(map);


// Carepoint Hospital Marker
var careMarker = L.marker([6.600734663873462, 3.2927012433900362], {icon: myIcon}) ;
careMarker.bindPopup('Carepoint Hospital ' + careMarker.getLatLng()).openPopup();
careMarker.addTo(map);


// Life Anchor Hospital Marker
var lifeMarker = L.marker([6.590162095269929, 3.298194407343892], {icon: myIcon}) ;
lifeMarker.bindPopup('Life Anchor Hospital ' + lifeMarker.getLatLng()).openPopup();
lifeMarker.addTo(map);



// City of Salvation Hospital Marker
var cityMarker = L.marker([6.601757803699029, 3.3005976665737045], {icon: myIcon}) ;
cityMarker.bindPopup('City of Salvation Hospital ' + cityMarker.getLatLng()).openPopup();
cityMarker.addTo(map);



// Westcare Specialist Hospital Marker
var westMarker = L.marker([6.599370474150679, 3.299567698332356], {icon: myIcon}) ;
westMarker.bindPopup('Westcare Specialist Hospital ' + westMarker.getLatLng()).openPopup();
westMarker.addTo(map);






// Layer Control

var baseMaps = {
    "My Map": myMap,
    "Google street": googleStreets,
    "Google satllite": googleSat
};

var overlayMaps = {
    "marker1": crystalMarker,
    "marker2": ivesMarker,
    "marker3": beeMarker,
    "marker4": akowonjoMarker,
    "marker5": bobMarker,
    "marker6": firstMarker,
    "marker7": careMarker,
    "marker8": lifeMarker,
    "marker9": cityMarker,
    "marker10": westMarker,


};

// This removes the marker
//map.removeLayer(akowonjoMarker);

L.control.layers(baseMaps, overlayMaps).addTo(map);
// has the collapsed control passed in the map
// L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);




