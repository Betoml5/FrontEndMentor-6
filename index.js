const input_ip = document.querySelector('#input_ip').value;
const btn_submit = document.querySelector('#btn_ip');
const api = 'https://geo.ipify.org/api/v1?apiKey=at_IGgfN6y8XuYIAyf90S4pk9l3OlLfY&ipAddress=';
const tilesProvider = '	https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'






async function getLocation(api, ip){
    const res = await fetch(`${api}${ip}`)
    const data = await res.json();
    console.log(data);
    return data;
    

}

btn_submit.addEventListener('click', () => {
    console.log('Clicking');
    getLocation(api, input_ip);
    btn_submit.re
});




// let mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer(tilesProvider, {
    maxZoom: 18
}).addTo(mymap)




// const popup = L.popup();
// const onMapClick = e => {
//     popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(mymap);
// }

// mymap.on('click', onMapClick)


// const marker  = L.marker([51.505, -0.09]).bindPopup('Hey there');
// mymap.addLayer(marker)

// mymap.locate({enableHighAccuracy: true})

// mymap.on('locationfound', e => {
//     const coords = [e.latlng.lat, e.latlng.lng]
//     const marker  = L.marker(coords).bindPopup('You are here!');
//     mymap.addLayer(marker)
// })

