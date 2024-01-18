import React, { MutableRefObject, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import "ol/ol.css";
import "./application.css";

useGeographic();

const map = new Map({
  view: new View({
    center: [11, 60],
    zoom: 10,
  }),
  layers: [new TileLayer({ source: new OSM() })],
});

export function MapApplication() {
  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);

  return (
    <>
      <header>
        <h1>Awesome Map!</h1>
      </header>
      <nav>Links</nav>
      <main ref={mapRef}></main>
    </>
  );
}
