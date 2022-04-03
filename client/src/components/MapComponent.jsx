import React from "react";

const PIANO_ICON = "https://i.postimg.cc/pybxd0Z2/image-3.png";
const OUTDOORS_ICON = "https://i.postimg.cc/Kj8S8RC8/image-5.png";
const INDOORS_ICON = "https://i.postimg.cc/44Lj14rp/image-6.png";

function MapComponent({ markers }) {
  const center = { lat: 40.5004781852521, lng: -74.44279811081906 };
  const zoom = 15;

  const [map, setMap] = React.useState();
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map]);

  for (const pin of markers) {
    let marker = new window.google.maps.Marker({
      position: pin.position,
      title: pin.title,
      icon:
        pin.type === "piano"
          ? PIANO_ICON
          : pin.type === "indoors"
          ? INDOORS_ICON
          : OUTDOORS_ICON,
      map,
    });
    let infowindow = new window.google.maps.InfoWindow({
      content: `<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">${pin.title}</h1><div id="bodyContent"><p>${pin.description}<hr />~ ${pin.author}</p></div></div>`,
    });
    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }

  return <div ref={ref} style={{ height: "100vh", width: "100%" }} />;
}

export default MapComponent;
