var mymap = L.map('mapid').setView([20, -10], 3);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var circle_brazil = L.circle([-12, -50], 1000000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Brazil_Mask_Use.png class=brazil> ", {
    minWidth: "auto"
});

var circle_threeM = L.circle([40, -100], 500000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/ThreeMProduction.png class=threeM>", {
    minWidth: "auto"
});

var circle_russia_1 = L.circle([60, 55], 500000, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Russia_sales.png class=russia> ", {
    minWidth: "auto",
    maxWidth: 800
});
var circle_russia_2 = L.circle([60, 80], 500000, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Russia_ACP.png class=russia> ", {
    minWidth: "auto",
    maxWidth: 800
});

var circle_canada = L.circle([45, -80], 200000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/canada_mask_demand.png class=canada>", {
    minWidth: "auto",
});

var circle_columbia = L.circle([5, -75], 200000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/colombia_exports.png class=colombia>", {
    minWidth: "auto",
});