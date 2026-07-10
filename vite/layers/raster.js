import jeanne from "../data/jean.jpeg";

export function addGambar(map) {
  map.addSource("jean", {
    type: "image",
    url: jeanne, 
    coordinates: [
      [79.16, -0.40],   
      [94.18, -1.66],  
      [94.65, -14.73],  
      [72.97, -13.74]   
    ]
  });

  map.addLayer({
    id: "jeanne-fate",
    type: "raster",
    source: "jean", 
  });
}