var mymap2 = L.map('mapid2').setView([38, -100], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap2);

var circle_threeM_hq = L.circle([45, -93], 100000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<img src=plots_and_figures/ThreeMProduction.png class=threeM> <p class=caption><b>3M Headquarters</b>, Maple Wood, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_decatur = L.circle([34.7, -87], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Decatur, AL, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_guin = L.circle([33.9, -88], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Guin, AL, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_littlerock = L.circle([34.7, -92.3], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Little Rock, AR,  USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_corona = L.circle([33.8, -117.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Corona, CA, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_irvine = L.circle([33.8, -117.8], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Irvine, CA, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_monrovia = L.circle([34.2, -116.9], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Monrovia, CA, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_northridge = L.circle([34.2, -117.9], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Northridge, CA, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_newark = L.circle([39.5, -75.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Newark, DE, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_indianapolis = L.circle([39.8, -86.2], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Indianapolis, IN, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_Hartfordcity = L.circle([40.5, -85.4], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Hartford City, IN, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_dekalb = L.circle([42, -88.6], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, DeKalb, IL, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_cordova = L.circle([41.8, -90.2], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Cordova, IL, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_knoxville = L.circle([41.4, -93], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Knoxville, IA, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_ames = L.circle([41.9, -93.6], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Ames, IA, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_cynthiana = L.circle([38.5, -84.3], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Cynthiana, KY, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_chelmsford = L.circle([42.5, -71], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Chelmsford, MA, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_methuen = L.circle([42.8, -71.4], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Methuen, MA, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_detroit = L.circle([42.2, -83.3], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Detroit, MI, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_alexandria = L.circle([45.9, -95], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Alexandria, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_cottagegrove = L.circle([44.8, -92.8], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Cottage Grove, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_fairmont = L.circle([43.7, -95], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Fairmont, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_Hutchinson = L.circle([45, -94.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Hutchinson, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_newUlm = L.circle([44.2, -94.6], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, New Ulm, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_columbia = L.circle([39, -92.3], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Columbia, MO,  USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_nevada = L.circle([37.8, -94.2], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Nevada, MO,  USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_springfield = L.circle([37.1, -93.2], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Springfield, MO,  USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_valley = L.circle([41.6, -96.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Valley, NE,  USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_flemington = L.circle([40.5, -74.9], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Flemington, NJ, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_tonawanda = L.circle([43.2, -78.6], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Tonawanda, NY, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_pittsboro = L.circle([35.6, -78.9], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Pittsboro, NC, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_Medina = L.circle([41, -82], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Medina, OH, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_greenville = L.circle([35, -82.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Greenville, SC, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_aberdeen = L.circle([45.6, -98.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Aberdeen, SD, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_brookings = L.circle([44.4, -96.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Brookings, SD, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_menomonie = L.circle([45, -92], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Menomonie, WI, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_prairieduchien = L.circle([43.2, -91], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Prairie de Chien, WI, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_angleton = L.circle([29.3, -95.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Angleton, TX, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_cumberland = L.circle([31.7, -99], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Cumberland, WI, USA</p> ", {
    minWidth: "auto"
});

var circle_threeM_plant_wausau = L.circle([45, -89.5], 50000, {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>3M Manufacture Plant</b>, Wausau, WI, USA</p> ", {
    minWidth: "auto"
});

var circle_dupont_hq = L.circle([39.5, -75.5], 80000, {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Dupont Headquarters</b>, Wilmington, DE, USA</p> ", {
    minWidth: 400
});

var circle_honeywell_hq = L.circle([34, -118], 80000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Honeywell Headquarters</b>, Santa Ana, CA, USA</p> ", {
    minWidth: 400
});

var circle_honeywell_smithfield = L.circle([41.8, -71.5], 50000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Honeywell Factory</b>, Smithfield, RI, USA</p> ", {
    minWidth: 400
});

var circle_honeywell_phoenix = L.circle([33.3, -112], 50000, {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Honeywell Factory</b>, Phoenix, AZ, USA</p> ", {
    minWidth: 400
});

var circle_kimberly_clark_hq = L.circle([33, -97], 80000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Headquarter</b>, Dallas, TX, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_conway = L.circle([35.2, -92.3], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Conway, AR, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_hendersonville = L.circle([35.4, -82.6], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Hendersonville, NC, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_loudon = L.circle([35.7, -84.5], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Loudon, TN, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_owensboro = L.circle([37.7, -87], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Owensboro, KY, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_neenah = L.circle([44.5, -88], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Neenah, WI, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_corinth = L.circle([34.8, -88.3], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Corinth, MS, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_jenks = L.circle([36, -96], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Jenks, OK, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_marinette = L.circle([45, -87.8], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Marinette, WI, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_paris = L.circle([33.6, -95.5], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Paris, TX, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_chester = L.circle([39.7, -75.2], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Chester, PA, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_chester = L.circle([39.7, -75.2], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Chester, PA, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_maumelle = L.circle([35.2, -92.9], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Maumelle, AR, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_newmilford = L.circle([41.6, -73.5], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Maumelle, AR, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_beechisland = L.circle([33.4, -81.8], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Beech Island, SC, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_fullerton = L.circle([33.8, -117.8], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Fullerton, CA, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_lagrange = L.circle([32.8, -84.8], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, LaGrange, GA, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_ogden = L.circle([41.2, -112], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, Ogden, UT, USA</p> ", {
    minWidth: "auto"
});

var circle_kimberly_clark_sanantonio = L.circle([29.3, -98.5], 50000, {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Kimberly Clark Corporation Factory</b>, San Antonio, TX, USA</p> ", {
    minWidth: "auto"
});

var circle_bd_hq = L.circle([40.5, -74.5], 80000, {
    color: 'pink',
    fillColor: 'pink',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>BD Headquarters</b>, Franklin Lakes, NJ, USA</p> ", {
    minWidth: "auto"
});

var circle_pa_hq = L.circle([33, -97.5], 80000, {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Prestige Ameritech Headquarters</b>, North Richard Hills, TX, USA</p> ", {
    minWidth: "auto"
});

var circle_apt_hq = L.circle([31.5, -111.1], 80000, {
    color: 'gray',
    fillColor: 'gray',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Alpha Pro Tech Headquarters</b>, Nogales, AZ, USA</p> ", {
    minWidth: "auto"
});

var circle_apt_hq = L.circle([40.6, -112], 50000, {
    color: 'gray',
    fillColor: 'gray',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Alpha Pro Tech Factory</b>, Salt Lake City, UT, USA</p> ", {
    minWidth: "auto"
});

var circle_lmg_hq = L.circle([42.2, -71.2], 80000, {
    color: 'lime',
    fillColor: 'lime',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Louis M. Gerson Company, Inc. Headquarter</b>, Middleboro, MA, USA</p> ", {
    minWidth: "auto"
});

var circle_teleflex_hq = L.circle([40.5, -74.7], 80000, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Teleflex Headquarter</b>, Wayne, PA, USA</p> ", {
    minWidth: "auto"
});

var circle_teleflex_jaffrey = L.circle([43, -71.8], 50000, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Teleflex Factory</b>, Jaffrey, NH, USA</p> ", {
    minWidth: "auto"
});

var circle_teleflex_mansfield = L.circle([42.1, -71.4], 50000, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Teleflex Factory</b>, Mansfield, MA, USA</p> ", {
    minWidth: "auto"
});

var circle_teleflex_maplegrove = L.circle([45.2, -93.4], 50000, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Teleflex Factory</b>, Maple Grove, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_teleflex_Plymouth = L.circle([45.3, -93.5], 50000, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Teleflex Factory</b>, Plymouth, MN, USA</p> ", {
    minWidth: "auto"
});

var circle_teleflex_trenton = L.circle([34.6, -85.3], 50000, {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
}).addTo(mymap2).bindPopup("<p class=caption><b>Teleflex Factory</b>, Trenton, GA, USA</p> ", {
    minWidth: "auto"
});