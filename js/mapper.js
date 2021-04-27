    //initialize map variable
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);


    //initialize the map variable with a layer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/satellite-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidG9zaGlvdWUiLCJhIjoiY2tuejJuNXd5MDFqMDJ3cGFjZXhmMm5ibCJ9.GCQZAMdKUUTrOaUA9fhCfQ'
    }).addTo(mymap);
    
    