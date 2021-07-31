var mymap = L.map('mapid').setView([40, -50], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], 50000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<b>Hello world!</b><br>I am a popup.")