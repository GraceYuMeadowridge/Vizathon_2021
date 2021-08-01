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
}).addTo(mymap).bindPopup("<a href=US_masks.html class=threeM>Click to See Visualizations</a>", {
    minWidth: 300
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

var circle_russia_3 = L.circle([60, 105], 500000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Russia_growth.png class=russia> ", {
    minWidth: "auto",
    maxWidth: 800
});

var circle_canada = L.circle([45, -80], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/canada_mask_demand.png class=canada>", {
    minWidth: "auto",
});

var circle_columbia = L.circle([5, -75], 200000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/colombia_exports.png class=colombia>", {
    minWidth: "auto",
});

var circle_chile_sales = L.circle([-32, -72], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/chile_sales.png class=chile>", {
    minWidth: "auto",
});

var circle_chile_behaviors = L.circle([-36, -73], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/chile_behaviors.png class=chile>", {
    minWidth: "auto",
});

var circle_singapore = L.circle([2, 104], 100000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Singapore_facemask.png class=singapore>", {
    minWidth: "auto",
});

var circle_indonesia = L.circle([2, 115], 400000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Indonesia_facemask.png class=Indonesia>", {
    minWidth: "auto",
});

var circle_malaysia = L.circle([5, 102], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Malaysia_facemask.png class=malaysia>", {
    minWidth: "auto",
});

var circle_peru = L.circle([-10, -75], 300000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Peru_exp.png class=peru>", {
    minWidth: "auto",
});

var circle_mexico = L.circle([20, -98], 500000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/mexico_behaviors.png class=mexico>", {
    minWidth: "auto",
});

var circle_france_import = L.circle([46.5, 0], 300000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/france.png class=france>", {
    minWidth: "auto",
});

var circle_france_pie = L.circle([46.5, 3], 300000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/france_pie.png class=france>", {
    minWidth: "auto",
});

var circle_africa = L.circle([0, 20], 2000000, {
    color: 'gray',
    fillColor: 'gray',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<p class=africa>Unfortunately, we are unable to find online dataset regarding the continent of Africa.</p>", {
    minWidth: 400,
});

var circle_uk = L.circle([53, -2], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/UK_Frequency.png class=uk>", {
    minWidth: "auto",
});

var circle_ecuador = L.circle([-1, -79], 100000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/ecuador_imports.png class=ecuador>", {
    minWidth: "auto",
});

var circle_aruba = L.circle([12.5, -70], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/china_aruba.png class=aruba>", {
    minWidth: "auto",
});

var circle_china = L.circle([35, 110], 1000000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/china.png class=china>", {
    minWidth: "auto",
});

var circle_finland = L.circle([65, 27], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/finland.png class=finland>", {
    minWidth: "auto",
});

var circle_sweden = L.circle([60, 17], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/sweden.png class=sweden>", {
    minWidth: "auto",
});

var circle_norway = L.circle([62, 10], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/norway.png class=norway>", {
    minWidth: "auto",
});

var circle_denmark = L.circle([56, 10], 100000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/denmark.png class=denmark>", {
    minWidth: "auto",
});

var circle_germany = L.circle([50, 10], 300000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/germany.png class=germany>", {
    minWidth: "auto",
});

var circle_netherlands = L.circle([53, 5], 100000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/netherlands.png class=netherlands>", {
    minWidth: "auto",
});

var circle_spain = L.circle([40, -2], 300000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/spain.png class=spain>", {
    minWidth: "auto",
});

var circle_italy_masks = L.circle([44, 12], 200000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/italy.png class=italy>", {
    minWidth: "auto",
});

var circle_italy_exports = L.circle([40, 16], 200000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/italy_exports.png class=italy>", {
    minWidth: "auto",
});

var circle_australia = L.circle([-20, 140], 800000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Australia_facemask.png class=australia>", {
    minWidth: "auto",
});

var circle_australia_imports = L.circle([-25, 130], 800000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/australia_import.png class=australia>", {
    minWidth: "auto",
});

var circle_india_exports_1 = L.circle([10, 80], 500000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/India_exports_to_SouthAfrica.png class=india>", {
    minWidth: "auto",
});

var circle_india_exports_2 = L.circle([28, 77], 500000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Indian_exports_to_Nigeria.png class=india>", {
    minWidth: "auto",
});

var circle_india_exports_3 = L.circle([20, 82], 800000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/India_exports_to_USA.png class=india>", {
    minWidth: "auto",
});

var circle_india_exports_4 = L.circle([20, 75], 500000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/India_exports_to_Ukraine.png class=india>", {
    minWidth: "auto",
});

var circle_brazil_hygiene = L.circle([-12, -42], 1000000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap).bindPopup("<img src=plots_and_figures/Brazil_Hygiene.png class=brazil>", {
    minWidth: "auto",
});