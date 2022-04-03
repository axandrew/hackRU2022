import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { HashLink } from "react-router-hash-link";
import React from "react";
import MapComponent from "../components/MapComponent";

import Button from "@mui/material/Button";

const PIANO_ICON = "https://i.postimg.cc/pybxd0Z2/image-3.png";
const OUTDOORS_ICON = "https://i.postimg.cc/Kj8S8RC8/image-5.png";
const INDOORS_ICON = "https://i.postimg.cc/44Lj14rp/image-6.png";

const pins_data = [
  {
    author: "HeraldOfRuin",
    position: { lat: 40.5004781852521, lng: -74.44279811081906 },
    title: "Piano Session",
    icon: PIANO_ICON,
  },
  {
    author: "Drew",
    position: { lat: 40.501414655908405, lng: -74.45026050343856 },
    title: "Outdoor Jam",
    icon: OUTDOORS_ICON,
  },
  {
    author: "balloon",
    position: { lat: 40.4911618732372, lng: -74.44161795779873 },
    title: "Jazz Performance",
    icon: INDOORS_ICON,
  },
];

function RUMap() {
  const [pins, setPins] = React.useState(pins_data);

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
