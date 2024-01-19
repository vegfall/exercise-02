import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";
import "ol/ol.css";
import "./application.css";
import { MunicipalityCheckbox } from "../municipality/municipalityCheckbox";
import { Layer } from "ol/layer";

useGeographic();

const map = new Map({
  view: new View({
    center: [11, 60],
    zoom: 10,
  }),
});

export function MapApplication() {
  const [mapLayers, setMapLayers] = useState<Layer[]>([
    new TileLayer({
      source: new OSM(),
    }),
  ]);

  const mapRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    map.setLayers(mapLayers);
  }, [mapLayers]);

  useEffect(() => {
    map.setTarget(mapRef.current);
  }, []);

  return (
    <>
      <header>
        <h1>Awesome Map!</h1>
      </header>
      <nav>
        <MunicipalityCheckbox setMapLayers={setMapLayers} map={map} />
      </nav>
      <main ref={mapRef}></main>
    </>
  );
}
