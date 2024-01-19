import React, { useEffect, useState } from "react";

export function MunicipalityCheckbox() {
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
