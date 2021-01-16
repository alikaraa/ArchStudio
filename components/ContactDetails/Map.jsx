import { useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import Image from "next/image";

export default function Map({ latitude, longitude }) {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "500px",
    latitude,
    longitude,
    zoom: 7,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1IjoicWItcml2a3liIiwiYSI6ImNramtocWxrNDVmcWMyeHBkNDRod3JicWMifQ.CLnkFua1CepBX2UpilcqAg"
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <div css={{ position: "absolute", right: 0 }}>
        <NavigationControl />
      </div>
      <Marker
        latitude={latitude}
        longitude={longitude}
        offsetLeft={-20}
        offsetTop={-50}
      >
        <Image
          src="/icons/map-marker.svg"
          width="40"
          height="50"
          alt="marker"
        />
      </Marker>
    </ReactMapGL>
  );
}
