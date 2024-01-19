import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Map } from "ol";
import { Layer } from "ol/layer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { GeoJSON } from "ol/format";

export function MunicipalityCheckbox({
  setMapLayers,
  map,
}: {
  setMapLayers: Dispatch<SetStateAction<Layer[]>>;
  map: Map;
}) {
  const [municipalityChecked, setMunicipalityChecked] = useState(false);

  const municipalityLayer = useMemo(
    () =>
      new VectorLayer({
        source: new VectorSource({
          url: "/exercise-02/nor_municipality.json",
          format: new GeoJSON(),
        }),
      }),
    [],
  );

  useEffect(() => {
    if (municipalityChecked) {
      setMapLayers((old) => [...old, municipalityLayer]);
    } else {
      setMapLayers((old) => old.filter((layer) => layer !== municipalityLayer));
    }
  }, [municipalityChecked]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={municipalityChecked}
          onChange={(e) => setMunicipalityChecked(e.target.checked)}
        />
        Municipality:{municipalityChecked ? "Hide" : "Show"}
      </label>
    </>
  );
}
