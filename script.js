/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

const mongoose = require("mongoose");

const mongo = require("./server/mongo");

const pinDB = require("./models/pins");
const userDB = require("./models/users");

async function generatePicks() {
  const d2teams = await teamDB.find({
    season,
    division: 2,
    name: { $ne: "Free Agent" },
  });

  d2teams.forEach(async (i) => {
    for (let x = 1; x <= 6; x += 1) {
      await pickDB.create({
        season: 10,
        round: x,
        team: i.name,
        owner: i.name,
      });
    }
  });
  console.log("done");
}

mongo().then(async () => {
  console.log("connected to mongo");

  await pinDB.create([
    {
      author: "Tiff",
      position: { lat: 40.5024781852521, lng: -74.44379811081906 },
      title: "Flute lesson",
      description:
        "Some people I know are very bad at flute and because of this I will offer my time to any individual wanting to learn some fluting!!!",
      type: "piano",
    },
    {
      author: "Ronalda",
      position: { lat: 40.5044781852521, lng: -74.44479811081906 },
      title: "Piano at the student center",
      description:
        "Perhaps this location is actually not the student center. However, this is going to be hosted at the livingston student center and yeah.",
      type: "piano",
    },
    {
      author: "Yulie",
      position: { lat: 40.5034781852521, lng: -74.44179811081906 },
      title: "Jazz playing",
      description:
        "Me and my friends are going to be performing a jazz perfomance near this location!! Please come!",
      type: "outdoors",
    },
    {
      author: "Wendy",
      position: { lat: 40.5004781852521, lng: -74.44159811081906 },
      title: "Group Jam Sesh",
      description: "I enjoy pop, rock, and honestly anything besides rap",
      type: "indoors",
    },
    {
      author: "Mona",
      position: { lat: 40.5064781852521, lng: -74.44079811081906 },
      title:
        "Yelling and throat singging a very interesting thing to take part in!",
      description: "Destroy the pop scene with our special talent :)",
      type: "outdoors",
    },
    {
      author: "Jessie",
      position: { lat: 40.5006781852521, lng: -74.44279811081906 },
      title:
        "Sing Along! Fun for the whole fam (family in case you were wondering what fam stands for)",
      description: "Disney songs, all family friendly for shore",
      type: "indoors",
    },
  ]);
  console.log("done");
});
