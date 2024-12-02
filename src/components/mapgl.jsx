import React from "react";
import Map, { Layer, Source } from "react-map-gl";
import mapboxgl from "mapbox-gl";

export default function MapGL(props) {
  const [viewport, setViewport] = React.useState({
    latitude: 10.736925364913548,
    longitude: 106.72630256442386,
    zoom: 13,
    width: "100vw",
    height: "100vh",
  });

  

  const handleViewportChange = (viewport) => {
    setViewport({
      ...viewport,
      latitude: viewport.viewState.latitude,
      longitude: viewport.viewState.longitude,
    });
  };
  const handleZoom = (viewport) => {
    setViewport({
      ...viewport,
      zoom: viewport.viewState.zoom,
    });
  };

  return (
    <Map
      mapLib={mapboxgl}
      {...viewport}
      onDrag={handleViewportChange}
      onZoom={handleZoom}
      mapStyle={"mapbox://styles/mapbox/streets-v11"}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Source
        id="image-source"
        type="image"
        url={props?.urlLayer}
        coordinates={props?.imageCoordinates}
      >
        <Layer
          id="image-layer"
          type="raster"
          source="image-source"
          paint={{
            "raster-opacity": parseFloat(props?.layerOpacity || 0.5),
          }}
        />
      </Source>
    </Map>
  );
}