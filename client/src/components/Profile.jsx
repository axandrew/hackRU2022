import React from "react";

const data = [
  {
    name: "Drew",
    about: [
      "'Who’s joe?' a distant voice asks. Instantly everyone nearby hears the sound of 1,000s of bricks rapidly shuffling towards his location. The earth itself seemed to cry out in agony, until finally the ground itself split open and a horrific creature crawled from the ground, covered in mucus and tar. 'Joe Momma…' the creature whispered. The man cried out in pain as he disintegrated into dust, and the whole world fell silent in fear. 'I did a little trolling. the wretched creature remarked before burrowing back into the earth.'",
    ],
    preferences: ["Rock", "Jazz", "Pop"],
    type: "Listener",
    instrument: ["Piano"],
    icon: "...",
    pins: [],
    level: "high",
  },
  {
    name: "balloon",
    about: ["I like a quick duck."],
    preferences: ["K-poop", "Rap", "Genshin"],
    type: "Player",
    instrument: ["Drums"],
    icon: "...",
    pins: [],
    level: "low",
  },
  {
    name: "HearldOfRuin",
    about: ["I like my duck stuck."],
    preferences: ["Anime-Intros", "Rap", "Bad-Music"],
    type: "Player",
    instrument: ["Piano"],
    icon: "...",
    pins: [],
    level: "very-low",
  },
];

function Profile() {
  const user = data[0];
  const listPref = user.preferences.map((style) => <li>{style}</li>);
  const listInst = user.instrument.map((inst) => <li>{inst}</li>);
  return (
    <div class="container">
      <div class="my-3">
        <h1>My Profile</h1>
      </div>
      <hr />
      <span style={{ fontSize: "30px" }}>
        Nickname: <b>{user.name}</b>
      </span>
      <br />
      <br />
      <br />
      <div>
        <img
          src={`https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*`}
          alt="badge"
          style={{ height: "30em" }}
        />
      </div>
      <br />
      <br />
      <div style={{ fontSize: "20px" }}>About: {user.about} </div>
      <br />
      <br />
      <div style={{ fontSize: "20px" }}>
        Music Preferences:
        <ul>{listPref}</ul>
      </div>
      <div style={{ fontSize: "20px" }}>
        Listener or Performer?: {user.type}
      </div>{" "}
      <br />
      <div style={{ fontSize: "20px" }}>
        Preferred Instrument(s):
        <ul>{listInst}</ul>
      </div>
      <div style={{ fontSize: "20px" }}>Sight-reading Level: {user.level}</div>{" "}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Profile;
