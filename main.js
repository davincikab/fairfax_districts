mapboxgl.accessToken = 'pk.eyJ1IjoiZGF1ZGk5NyIsImEiOiJjanJtY3B1bjYwZ3F2NGFvOXZ1a29iMmp6In0.9ZdvuGInodgDk7cv-KlujA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-77.16294732788364, 38.83166857095776], // starting position [lng, lat]
    zoom: 9.5 // starting zoom
});


map.on("load", function(e) {
    map.addSource('districts', {
        type:'geojson',
        data:'business_districts.geojson'
    });


    map.addLayer({
        id:'district-layer',
        type:'fill',
        source:'districts',
        paint:{
            'fill-color':'#025C8F',
            'fill-opacity':0.4
        }
    });

    map.addLayer({
        id:'district-layer-line',
        type:'line',
        source:'districts',
        paint:{
            'line-color':'#025C8F',
            'line-width':2
        }
    });

    // fairfax-city
    map.addSource('fairfax-city', {
        type:'geojson',
        data:'fairfax_city.geojson'
    });


    map.addLayer({
        id:'city-layer',
        type:'fill',
        source:'fairfax-city',
        paint:{
            'fill-color':'#9D9D9D',
            'fill-opacity':0.4
        }
    });

    // washington-dc
    map.addSource('dc', {
        type:'geojson',
        data:'washington_dc.geojson'
    });


    map.addLayer({
        id:'dc-layer',
        type:'fill',
        source:'dc',
        paint:{
            'fill-color':'#9D9D9D',
            'fill-opacity':0.4
        }
    });


    // labels layer
    map.addSource('label-source', {
        type:'geojson',
        data:labelLayer
    });


    map.addLayer({
        id:'label-layer',
        type:'symbol',
        source:'label-source',
        paint:{
            "text-color":["get", "text-color"],
            "text-halo-color":["get", "halo-color"],
            "text-halo-width":1
        },
        layout:{
            "text-font":["Roboto Condensed Bold", "Arial Unicode MS Regular"],
            "text-field":["get", "Name"],
            "text-size":["get", "fontSize"],
            "text-justify":"left",
            "text-letter-spacing":0,
            "text-max-width":["get", "max-width"],
            "text-transform":["get", "text-transform"],
            "text-allow-overlap":true,
            "text-anchor":["get", "text-anchor"],
        }
    });

    // pins
    pins.forEach(pin => {
        // marker element
        let marker = createMarker(pin);
        let popup = getPopup(pin);

        marker.setPopup(popup).addTo(map);
    });

    map.on("click", function(e) {
        console.log(e.lngLat);
    });


    // mouse hover events
    map.on("mouseover", "", function(e) {

    });


    map.on("")
});


function createMarker(pin) {
    let markerElement = document.createElement("div");
    markerElement.className = "marker-element";

    markerElement.innerHTML = `<img src="icons/${pin.icon}" />`;
    return new mapboxgl.Marker({element:markerElement})
            .setLngLat([...pin.location])
            
}

function getPopup(pin) {
    let html  = `<div>${pin.name}</div>`
    return new mapboxgl.Popup({focusOnOpen:false})
        .setHTML(html);
}