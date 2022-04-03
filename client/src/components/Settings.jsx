import React from "react";

function Settings() {
  const [state, setState] = React.useState({ textAreaValue: "" });

  const handleChange = (e) => {
    setState((props) => ({ ...props, textAreaValue: e.target.value }));
  };

  function handleSubmit(e) {
    alert("Account information saved" + state.textAreaValue);
    e.preventDefault();
  }

  return (
    <div class="container">
      <div class="my-3">
        <h3>Change My Profile</h3>
      </div>
      <hr />
      <div>
        Nickname: <b>HeraldOfRuin</b>
      </div>
      <br />
      <div>
        <img
          src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*`}
          alt="badge"
          style={{ height: "20em" }}
        />
      </div>
      <br />

      <form onSubmit={handleSubmit}>
        <label>About: </label>
        <br />
        <textarea value={state.textAreaValue} onChange={handleChange} />
        <br />
        <br />
        <label>
          Music Preferences: <input type="text" name="preference" /> eg. Pop,
          Rock, Jazz
        </label>
        <br />
        <label>
          Listener or Performer?:{" "}
          <select>
            <option value="Listener">Listener</option>
            <option value="Performer">Performer</option>
            <option value="Both">Both</option>
          </select>
        </label>
        <br />
        <label>
          Preferred Instrument(s): <input type="text" name="instrument" />
        </label>
        <br />
        <label>
          Sight Reading Level: <input type="text" name="level" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Settings;
{
  /* <input type="checkbox" id="itemtype1" name="filterCase" value="1">
		<label for="itemtype1"> Case</label> <input type="checkbox"
			id="itemtype2" name="filterKeycaps" value="1"> <label
			for="itemtype2"> Keycaps</label> <input type="checkbox"
			id="itemtype3" name="filterPCB" value="1"> <label
			for="itemtype3"> PCB</label> <input type="checkbox" id="itemtype4"
			name="filterSwitches" value="1"> <label for="itemtype4">
			Switches</label> <input type="checkbox" id="itemtype5" name="filterPrebuilt"
			value="1"> <label for="itemtype5"> Prebuilt</label>

		<p></p> */
}
