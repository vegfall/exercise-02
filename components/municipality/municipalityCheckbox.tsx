import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Map } from "ol";
import { Layer } from "ol/layer";

export function MunicipalityCheckbox({
  setMapLayers,
  map,
}: {
  setMapLayers: Dispatch<SetStateAction<Layer[]>>;
  map: Map;
}) {
  const [municipalityChecked, setMunicipalityChecked] = useState(false);

  useEffect(() => {}, [municipalityChecked]);

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
