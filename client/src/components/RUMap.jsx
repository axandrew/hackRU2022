import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { HashLink } from "react-router-hash-link";
import React from "react";
import MapComponent from "../components/MapComponent";

import Button from "@mui/material/Button";

import { fetchPins } from "../api";

function RUMap() {
  const [pins, setPins] = React.useState([]);

  React.useEffect(() => {
    async function boot() {
      const bootRequests = [fetchPins].map((i) => i.call());

      const [pins] = await Promise.all(bootRequests);

      setPins(pins);
    }
    boot();
  }, []);

  return (
    <div>
      <Wrapper apiKey={"AIzaSyAU-23t0Rxi7O_oc03sivN593-aXVvK1G8"}>
        <MapComponent markers={pins} />
      </Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        class="sticky"
      >
        <Button
          variant="contained"
          color="secondary"
          component={HashLink}
          to="/jam"
        >
          Add a jam session
        </Button>
      </div>
    </div>
  );
}

export default RUMap;
