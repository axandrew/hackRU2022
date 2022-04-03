import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateAdapter from "@mui/lab/AdapterMoment";

import RUMap from "./components/RUMap";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import EmptyMap from "./components/EmptyMap";

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<RUMap />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/settings" exact element={<Settings />} />

            <Route
              path="/jam"
              exact
              element={
                <Wrapper apiKey={"AIzaSyAU-23t0Rxi7O_oc03sivN593-aXVvK1G8"}>
                  <EmptyMap />
                </Wrapper>
              }
            />
          </Routes>
        </Router>
      </div>
    </LocalizationProvider>
  );
}

export default App;
