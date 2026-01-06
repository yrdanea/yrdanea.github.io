// MAP SETUP
// 
//Creates the map, tells it to display in the element with id of 'mapid' and sets a flat projection, as we are projecting an image. 
var map = L.map('mapid', { 
    crs: L.CRS.Simple, //Set a flat CRS (Coordinate Reference System) projection as we are projecting an image.
	scrollWheelZoom: false,
	smoothWheelZoom: true,
	smoothSensitivity: 1,
});

//Change the URL to reflect where you are hosting your map tiles. Width and Height of original image MUST be defined.
var layer = L.tileLayer.zoomify('yrdanea-base/{g}/{z}-{x}-{y}.jpg', {
    width: 12000,    // MUST be defined.
    height: 9000,   // MUST be defined.
    minZoom: 2,
	maxZoom: 6,
    invalidateSize: true,
    continuousworld: false,
	noWrap: true,
}).addTo(map);
		
//Setting the view to our layer bounds, set by our Zoomify plugin.
map.fitBounds(layer.getBounds());

// TEXT CONTENT / DESCRIPTIONS

/// POPUPS
{
    
    // REGIONS

    {
        var adyriaPopup = '<h1>Adyria</h1> Diese Region im Südosten ist überwiegend von Menschen bewohnt. Adyria ist ein Königreich.';
    }
    // CAPITALS
    {
        var berlionPopup = '<h1>Berlion</h1> Die Hauptstadt Adyrias trägt den Namen Berlion.';
    }
    // IMPORTANT CITIES
    {
        var jaejuinPopup = '<h1>Jaejuin</h1> Die Stadt der Vogelmenschen.';

    }
    // TEMPLES
    {
        var yrdalaPopup = '<h1>Yrdala</h1> <hr> Ein Tempel für Yrda, die Mutterspinne.';
    }

    // SETTLEMENTS
    {
    }

    // CASTLES
    {
    }  
    // RUINS

    {
    }  
    // NATURE

    {
    }
}

// I C O N S
{
// kingdoms
{
	var adyriaIcon = L.icon({
		iconUrl: 'images/shields/karm.png',
		iconSize: [120,120],
	});
	
}
// capitalIcon - capitals = icon1 55,55, icon2 70,70
{
var capitalIcon = L.icon({
    iconUrl: 'images/huvudstad_b.png',  // Location of file to be used as icon.
    iconSize: [60, 60],             // Size of icon on map.
});
}


// SETTLEMENTS


{
	// cityIcon# stooora städer = icon 50,50, icon2 70,70
	{
var cityIcon = L.icon({
	iconUrl: 'images/city_b.png',
	iconSize: [50, 50],
});

}
// largeTownIcon# storstäder = icon1 50,50, icon2 65,65 
{
var largeTownIcon1 = L.icon({
	iconUrl: 'images/ltown_b.png',
	iconSize: [55, 55],
});
	
var	largeTownIcon2 = L.icon({
	iconUrl: 'images/ltown_b.png',
	iconSize: [65, 65],
});
}
// smallTownIcon# småstäder = icon1 45,45, icon2 50,50 
{
var smallTownIcon1 = L.icon({
	iconUrl: 'images/stown_b.png',
	iconSize: [50, 50],
});
	
var	smallTownIcon2 = L.icon({
	iconUrl: 'images/stown_b.png',
	iconSize: [50, 50],
});
}
// villageIcon# storbyar = icon1 45,45, icon2 50,50 
{
var villageIcon1 = L.icon({
	iconUrl: 'images/village_b.png',
	iconSize: [45, 45],
});
	
var	villageIcon2 = L.icon({
	iconUrl: 'images/village_b.png',
	iconSize: [50, 50],
});
}
// HamletIcon# småbyar = icon1 45,45, icon2 50,50 
{
var HamletIcon1 = L.icon({
	iconUrl: 'images/hamlet_b.png',
	iconSize: [45, 45],
});
	
var	HamletIcon2 = L.icon({
	iconUrl: 'images/hamlet_b.png',
	iconSize: [50, 50],
});
}
// dockIcon# Småhamnar = icon1 45,45, icon2 50,50
{
var dockIcon1 = L.icon({
	iconUrl: 'images/docks_b.png',
	iconSize: [50, 50],
});
	
var	dockIcon2 = L.icon({
	iconUrl: 'images/docks_b.png',
	iconSize: [50, 50],
});
}
// smallHarbourIcon# medelstora hamnar = icon1 50,50, icon2 55,55
{
var smallHarbourIcon1 = L.icon({
	iconUrl: 'images/harbour_b.png',
	iconSize: [50, 50],
});
	
var	smallHarbourIcon2 = L.icon({
	iconUrl: 'images/harbour_b.png',
	iconSize: [55, 55],
});
}
// bigHarbourIcon# stora hamnar = icon1 55,55, icon2 65,65
{
var bigHarbourIcon1 = L.icon({
	iconUrl: 'images/bharbour_b.png',
	iconSize: [60, 60],
});
	
var	bigHarbourIcon2 = L.icon({
	iconUrl: 'images/bharbour_b.png',
	iconSize: [65, 65],
});
}
// fiskeby
{
var fiskebyIcon = L.icon({
	iconUrl: 'images/fishby_b.png',
	iconSize: [60, 60],
});
}

// värdshus
{
var innIcon = L.icon({
	iconUrl: 'images/inn_b.png',
	iconSize: [70, 70],
});
}

}


// TEMPLE


{
// bigTempleIcon# Stora tempel = icon1 50,50, icon2 65,65
{
var bigTempleIcon = L.icon({
	iconUrl: 'images/tcomplex_b.png',
	iconSize: [60, 60],
});

}
// smallTempleIcon# Medelstora tempel = icon1 50,50, icon2 55,55
{
var medTempleIcon = L.icon({
	iconUrl: 'images/temple_b.png',
	iconSize: [55, 55],
});
}
// ShrineIcon# Litet tempel = icon1 45,45, icon2 50,50
{
var ShrineIcon = L.icon({
	iconUrl: 'images/shrine_b.png',
	iconSize: [50, 50],
});
}
}

// CASTLES
{
	// towers
	{
	var towerIcon1 = L.icon({
	iconUrl: 'images/tower_b.png',
	iconSize: [55,55]
});
	}
	// castleIcon
	{
var castleIcon = L.icon({
	iconUrl: 'images/castle_b.png',
	iconSize: [60, 60],
});
	}
	// fortIcon
	{
var fortIcon = L.icon({
	iconUrl: 'images/fort_b.png',
	iconSize: [55, 55],
});
	}
	// campIcon
	{
var campIcon = L.icon({
	iconUrl: 'images/camp_b.png',
	iconSize: [50, 50],
});
	}

}
	// Ruins 50,50
	{
		var ruinIcon = L.icon({
		iconUrl: 'images/ruin_b.png',
		iconSize: [50,50],
		});
		
	}
	
	// Nature 
	{
		var skogIcon = L.icon({
		iconUrl: 'images/forestpoi_b.png',
		iconSize: [70,70],
		});
	}

	
}

// COORDINATES
{
// Copy me 
// var variable = L.marker([X, Y], {icon: IKON}).addTo(map).on('click', function(){
// sidebar.setContent("<img src='images/preview.png'>" + Popup).toggle();
// });

// Regions
{
	var adyria = L.marker([-96, 124], {title: "Adyria"}).addTo(map);
	var adyria = L.marker([-96, 124], {icon: adyriaIcon}).addTo(map).on('click', function(){
		sidebar.setContent(adyriaPopup).show();
	});
}

// Capitals
{
	var berlion = L.marker([-102.5, 123.9], {title: "Berlion"}).addTo(map);
	var berlion = L.marker([-102.5, 123.9], {icon: capitalIcon}).on('click', function(){
		sidebar.setContent(berlionPopup).show();
	});
}
	
// IMPORTANT CITIES
{
	// IMPORTANT CITIES
	{
	var jaejuin = L.marker([-77.3, 130.7], {title: "Jaejuin"}).addTo(map);
	var jaejuin = L.marker([-77.3, 130.7], {icon: cityIcon}).on('click', function(){
		sidebar.setContent(jaejuinPopup).show();
	});
	
	}
    
    // TAVERNS
    
  {         
  }	
}
// HARBORS / DOCKS
{ 
	{  
	}
}
// TEMPEL
{
	var yrdala = L.marker([-69.7, 93.7], {title: "Yrdala"}).addTo(map);
	var yrdala = L.marker([-69.7, 93.7], {icon: bigTempleIcon}).on('click', function(){
		sidebar.setContent(yrdalaPopup).show();
		});
}

// CASTLES
{ 
}	

// RUINS
{

}
// NATURE
{
    // FORESTS
    // RIVERS
    // MOUNTAINS
    // OCEANS
    // LAKES
	
}
    
// Search Result
   // var exampleSearchResult = L.marker([-73, 67], {title: "example"}).addTo(map);
}

// LAGER
{
var kingdoms = L.layerGroup([adyria]).addTo(map);
// CAPITAL LAGER
var capitals = L.layerGroup([berlion]);

// TEMPLE LAGER
var temples = L.layerGroup([yrdala]);

// IMPORTANT CITIES
var cities = L.layerGroup([jaejuin]);

// TOWNS
var towns = L.layerGroup([
 
]); 

// VILLAGES
var villages = L.layerGroup([
 
]); 

var docks = L.layerGroup([
 
]); 

var nature = L.layerGroup([

]);


// CASTLE LAGER
var castles = L.layerGroup([ 
]);

}

// Additional MAP LAYERS

var desc = L.tileLayer.zoomify('./yrdanea-desc/{g}/{z}-{x}-{y}.jpg', {
    width: 12000,  // MUST be defined.
    height: 9000,  // MUST be defined.
    tolerance: 0.9, 
    minZoom: 2,
	maxZoom: 6,
    continuousworld: false,
	noWrap: true,
    layers: [capitals],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map of <a href="https://www.yrdanea.de" target="_blank" alt="yrdanea">Yrdanea</a>, map script by Hreikin & Amdir'    // Attribution which appears in the bottom right corner, change this value to whatever you like.
    }).addTo(map),

    borders = L.tileLayer.zoomify('./yrdanea-borders/{g}/{z}-{x}-{y}.jpg', {
    width: 12000,                                                                                        // MUST be defined.
    height: 9000,                                                                                       // MUST be defined.
    tolerance: 0.9, 
    minZoom: 2,
	maxZoom: 6,
    continuousworld: false,
	noWrap: true,
    layers: [capitals],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map of <a href="https://www.yrdanea.de" target="_blank" alt="yrdanea">Yrdanea</a>,map script by Hreikin & Amdir'    // Attribution which appears in the bottom right corner, change this value to whatever you like.
    }),

   regions = L.tileLayer.zoomify('./yrdanea-regions/{g}/{z}-{x}-{y}.jpg', {
    width: 12000,                                                                                        // MUST be defined.
    height: 9000,                                                                                       // MUST be defined.
    tolerance: 0.9, 
    minZoom: 2,
	maxZoom: 6,
    continuousworld: false,
	noWrap: true, 
	layers: [capitals],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map of <a href="https://www.yrdanea.de" target="_blank" alt="yrdanea">Yrdanea</a>, map script by Hreikin & Amdir'    // Attribution which appears in the bottom left corner, change this value to whatever you like.
    }),

    blank = L.tileLayer.zoomify('./yrdanea-base/{g}/{z}-{x}-{y}.jpg', {
    width: 12000,                                                                                        // MUST be defined.
    height: 9000,                                                                                       // MUST be defined.
    tolerance: 0.9, 
    minZoom: 2,
	maxZoom: 6,
    continuousworld: false,
	noWrap: true, 
	layers: [capitals],                                //Layers to include in layers control, initial map should NOT be included as it will be added automatically.
    attribution: 'Map of <a href="https://www.yrdanea.de" target="_blank" alt="yrdanea">Yrdanea</a>, map script by Hreikin & Amdir'    // Attribution which appears in the bottom left corner, change this value to whatever you like.
    });

// Creates baseMaps layer and passes which maps to include in the layers control.
var baseMaps = {
    "Weltkarte": desc,  // The value within quotation marks is the name of the switchable control as it appears on the map. The second value is the layer name.
    "Grenzen": borders,  
    "Regionen": regions, 
    "Incognito": blank
};

// show markörgrupper
var overlayMaps = {
	"Regionen": kingdoms,
	"Hauptstädte": capitals,                 // The value within quotation marks is the name of the switchable control as it appears on the map. The second value is the group name.
	"Städte": cities,
    "Kleinstädte": towns,
	"Dörfer": villages,
	"Tempel": temples,
	"Häfen": docks,
	"Burgen": castles,
    };
	
// Creates a switchable layers control from baseMaps and overlayMaps and adds them to map.
L.control.layers(baseMaps, overlayMaps).addTo(map);

// Sidebar
var sidebar = L.control.sidebar('sidebar', {
		position: 'left'
});

map.addControl(sidebar);
map.on('click', function () {
sidebar.hide();
});

	
	// ZoomShowHide = zsh
	var c = new L.Control.Coordinates();
	
	c.addTo(map);
	
	function onMapClick(e) {
		c.setCoordinates(e);
	}
	
	map.on('click', onMapClick);
	
		{
zsh = new ZoomShowHide();
zsh.addTo(map);
		}
		
		// Do not set min_zoom = 6, otherwise it also becomes visible at Zoom 3. Instead use 5.5 or 5.9 etc.
kingdoms.min_zoom = 3;
kingdoms.max_zoom = 4;
zsh.addLayer(kingdoms);
capitals.min_zoom = 3.3; // vi vill se capitals från Z3
zsh.addLayer(capitals);
cities.min_zoom = 3.5; // vi vill ha städerna (viktiga POI, som Salthamn å Eltram) å visa före towns och före villages.
cities.max_zoom = 6; 
zsh.addLayer(cities);
temples.min_zoom = 4; // tempel lagret har "viktiga POI", små tempel går på 'towns' och helgedomar/shrines går på 'villages'
zsh.addLayer(temples);
castles.min_zoom = 4; // castles har några "stora" POI, t.ex. järnporten, targovizma osv. men bara castles, fort går på towns, och läger går på villages.
zsh.addLayer(castles);
villages.min_zoom = 5.5; // tanken är å ha villages lagret å bara synnas på zoom nivå 5.5 eller 6
zsh.addLayer(villages);
docks.min_zoom = 5; // samma med docks lagret
zsh.addLayer(docks);
towns.min_zoom = 5; // towns, dvs små/städer visas före byar
zsh.addLayer(towns);

        // PinSearch component
        var searchBar = L.control.pinSearch({
            position: 'topleft',
            placeholder: 'Suche...',
            buttonText: 'Search',
            onSearch: function(query) {
                console.log('Search query:', query);
                // Handle the search query here
            },
            searchBarWidth: '200px',
            searchBarHeight: '30px',
            maxSearchResults: 5
        }).addTo(map);

	

  