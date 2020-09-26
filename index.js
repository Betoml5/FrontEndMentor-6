let input_ip = document.querySelector("#input_ip");
const btn_submit = document.querySelector("#btn_ip");
const api =
  "https://geo.ipify.org/api/v1?apiKey=at_IGgfN6y8XuYIAyf90S4pk9l3OlLfY&ipAddress=";
const tilesProvider = "	https://a.tile.openstreetmap.org/{z}/{x}/{y}.png";

async function getLocation(api, ip) {
  try {
    const res = await fetch(`${api}${ip}`);
    const data = await res.json();
    const coords = [data.location.lat, data.location.lng];
    mymap.setView(coords);
    const marker = L.marker(coords).bindPopup("You are here!");
    mymap.addLayer(marker);
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
}

btn_submit.addEventListener("click", () => {
  getLocation(api, input_ip.value);
});

let mymap = L.map("mapid").setView([51.505, -0.09], 13);
L.tileLayer(tilesProvider, {
  maxZoom: 18,
}).addTo(mymap);

mymap.locate({ enableHighAccuracy: true });

mymap.on("locationfound", (e) => {
  const coords = [e.latlng.lat, e.latlng.lng];
  mymap.setView(coords);
  const marker = L.marker(coords).bindPopup("You are here!");
  mymap.addLayer(marker);
});
