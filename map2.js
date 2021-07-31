var mymap2 = L.map('mapid2').setView([38, -100], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap2);

var circle_threeM = L.circle([45, -93], 100000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<img src=plots_and_figures/ThreeMProduction.png class=threeM> <p class=caption><b>3M Headquarters</b>, Maple Wood, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_honeywell_hq = L.circle([34, -118], 80000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Honeywell Headquarters</b>, Santa Ana, CA, USA</p> ", {
    minWidth: 400
});