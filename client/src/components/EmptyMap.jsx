import React from "react";
import { HashLink } from "react-router-hash-link";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const PIANO_ICON = "https://i.postimg.cc/pybxd0Z2/image-3.png";
const OUTDOORS_ICON = "https://i.postimg.cc/Kj8S8RC8/image-5.png";
const INDOORS_ICON = "https://i.postimg.cc/44Lj14rp/image-6.png";

function EmptyMap() {
  const center = { lat: 40.5004781852521, lng: -74.44279811081906 };
  const zoom = 15;

  const [map, setMap] = React.useState();
  const [type, setType] = React.useState("piano");
  const [time, setTime] = React.useState(new Date());
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map]);

  const handleChange = (e) => {
    marker.setMap(null);
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const selectMenu = () => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <ToggleButtonGroup
          color="secondary"
          style={{ backgroundColor: "white" }}
          value={type}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="piano">Piano</ToggleButton>
          <ToggleButton value="indoors" aria-label="centered">
            Indoors
          </ToggleButton>
          <ToggleButton value="outdoors" aria-label="right aligned">
            Outdoors
          </ToggleButton>
        </ToggleButtonGroup>
        <DateTimePicker
          label="Jam Time"
          value={time}
          onChange={(e) => {
            setTime(new Date(e._d));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Jam!
        </Button>
        <Button variant="contained" color="warning" component={HashLink} to="/">
          Cancel
        </Button>
      </div>
    );
  };

  let marker = new window.google.maps.Marker({
    position: center,
    title: "default",
    icon:
      type === "piano"
        ? PIANO_ICON
        : type === "indoors"
        ? INDOORS_ICON
        : OUTDOORS_ICON,
    draggable: true,
    map,
    animation: window.google.maps.Animation.DROP,
  });

  return (
    <div>
      <div ref={ref} style={{ height: "100vh", width: "100%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        class="sticky"
      >
        {selectMenu()}
      </div>
    </div>
  );
}

export default EmptyMap;
