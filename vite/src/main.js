import { Map, FullscreenControl, GlobeControl, L } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {addKotaLayer, addPulauLayer} from '../layers/vector'
import { addGambar } from '../layers/raster';
import { addAttribution } from '../control/newControl'
import { addKotaPopup } from '../popups/customPopups';
import { AttributionControl } from 'maplibre-gl';
import { LogoFate } from '../control/customlogoControl';



const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.83, -6.19],
  zoom: 1,
  attributionControl: false
})

map.addControl(new AttributionControl({
  compact:true,
  customAttribution:"Natural Earth, Fate"
}))

map.on("load", () => {
  addKotaLayer(map)
  addPulauLayer(map)
  addGambar(map)
  LogoFate(map)

})

map.on("click", "titik-kota", (event) => {
  addKotaPopup(map, event);
})

map.addControl(new GlobeControl())
map.addControl(new FullscreenControl())
map.addControl(new LogoControl({compact: false}))
map.addControl(new LogoFate(), "top-left")
