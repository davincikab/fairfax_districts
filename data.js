var pins = [
    {
        name:'Washington Dulles International Airport',
        location:[-77.4565388, 38.9531162],
        icon:'airport.png'
    },
    {
        name:'Ronald Reagan Washington National Airpor',
        location:[-77.0452315, 38.851242,],
        icon:'airport.png'
    },
    {
        name:'Fort Belvoir',
        location:[-77.14516166994423, 38.69373747411778],
        icon:'map-pin.png'
    }
];


var labelLayer = {
    "type": "FeatureCollection",
    "name": "districts_centroids",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 13, "Name": "Annandale-Baileys, Crossroads-Seven Corners",  }, "geometry": { "type": "Point", "coordinates": [ -77.16897386149609, 38.83374846318651 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 5, "Name": "Chantilly-Centreville",  }, "geometry": { "type": "Point", "coordinates": [ -77.459553731416975, 38.855460412125495 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 5, "Name": "Fairfax Center",  }, "geometry": { "type": "Point", "coordinates": [ -77.3679878881279, 38.842658572789304 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 5, "Name": "Herndon",  }, "geometry": { "type": "Point", "coordinates": [ -77.43848789784333, 38.928194120878789 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 5, "Name": "Merrifield",  }, "geometry": { "type": "Point", "coordinates": [ -77.228469555157488, 38.86456604170121 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 5, "Name": "Reston",  }, "geometry": { "type": "Point", "coordinates": [ -77.352340232851148, 38.949278561506588 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 5, "Name": "Richmond Highway",  }, "geometry": { "type": "Point", "coordinates": [ -77.10279280286198, 38.72915575200503 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 7, "Name": "Springfield /- I95 Corridor",  }, "geometry": { "type": "Point", "coordinates": [ -77.220715321369624, 38.765341928761739 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#fff", "halo-color": "#000", "fontSize" : 17 , "max-width": 13, "Name": "Tysons, Mclean, Vienna, Great Falls",  }, "geometry": { "type": "Point", "coordinates": [ -77.207058735485757, 38.937576846601079 ] } },

    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13, "max-width": 5, "Name": "City of Fairfax",  }, "geometry": { "type": "Point", "coordinates": [ -77.30422405448482, 38.85410640258925 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"left", "text-transform":"none", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13 , "max-width": 13, "Name": "Fort Belvoir",  }, "geometry": { "type": "Point", "coordinates": [ -77.13716166994423, 38.68373747411778 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13 , "max-width": 13, "Name": "Maryland",  }, "geometry": { "type": "Point", "coordinates": [ -77.13157331020622, 39.02506595582287] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13 , "max-width": 13, "Name": "Maryland",  }, "geometry": { "type": "Point", "coordinates": [ -77.02526062065577, 38.66171030040027] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13 , "max-width": 13, "Name": "Washington D.C",  }, "geometry": { "type": "Point", "coordinates": [ -77.04830501843202, 38.93618790667864 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"center", "text-transform":"none", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13 , "max-width": 13, "Name": "Washington Dulles International Airport",  }, "geometry": { "type": "Point", "coordinates": [ -77.46555655601097, 38.97750954611316 ] } },
    { "type": "Feature", "properties": { "type":"Roboto Condensed Bold", "text-anchor":"left", "text-transform":"none", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13 , "max-width": 8, "Name": "Ronald Reagan Washington National Airport",  }, "geometry": { "type": "Point", "coordinates": [-77.03356333226028, 38.844116558730534 ] } },
    
    { "type": "Feature", "properties": { "type":"text-small", "text-anchor":"center", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13, "max-width": 7, "Name": "Price William County",  }, "geometry": { "type": "Point", "coordinates": [ -77.47267310805799, 38.71625280021655 ] } },
    { "type": "Feature", "properties": { "type":"text-small", "text-anchor":"center", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13, "max-width": 7, "Name": "Loundon County",  }, "geometry": { "type": "Point", "coordinates": [ -77.51155908478339, 39.02857667563438 ] } },
    { "type": "Feature", "properties": { "type":"text-small", "text-anchor":"left", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13, "max-width": 7, "Name": "City of Falls Church",  }, "geometry": { "type": "Point", "coordinates": [ -77.16615082110532, 38.88608180788614 ] } },
    { "type": "Feature", "properties": { "type":"text-small", "text-anchor":"center", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13, "max-width": 7, "Name": "Arlington County",  }, "geometry": { "type": "Point", "coordinates": [ -77.08429119331939, 38.8563750012895 ] } },
    { "type": "Feature", "properties": { "type":"text-small", "text-anchor":"center", "text-transform":"uppercase", "text-color":"#000", "halo-color": "#fff", "fontSize" : 13, "max-width": 7, "Name": "City of Alexandria",  }, "geometry": { "type": "Point", "coordinates": [ -77.05421327672862, 38.81087924790458 ] } }
    ]
};

var textLayer = [
    {location:[], name:"Herndon", fontSize:14},
    {location:[], name:"Reston", fontSize:14},
    {location:[], name:"Tysons, Mclean, Vienna, Great Falls", fontSize:14},
    {location:[], name:"Merrifield", fontSize:14},
    {location:[], name:"Annandale-Baileys, Crossroads-Seven Corners", fontSize:14},
    {location:[], name:"Richmond Highway", fontSize:14},
    {location:[], name:"Springfield/I-95 Corridor", fontSize:14},
    {location:[], name:"Fairfax Center", fontSize:14},
    {location:[], name:"Chantilly-Centreville", fontSize:14},

    {location:[], name:"City of Fairfax", fontSize:12},
    {location:[], name:"Fort Belvoir", fontSize:12},
    {location:[], name:"Maryland", fontSize:12},
    {location:[], name:"Washington D.C.", fontSize:12},
    {location:[], name:"Washington Dulles International Airport", fontSize:12},
    {location:[], name:"Ronald Reagan Washington National Airport", fontSize:12},

    {location:[], name:"Prince William County", fontSize:10},
    {location:[], name:"Loudoun County", fontSize:10},
    {location:[], name:"City of Falls Church", fontSize:10},
    {location:[], name:"Arlington County", fontSize:10},
    {location:[], name:"City of Alexandria", fontSize:10},
];


