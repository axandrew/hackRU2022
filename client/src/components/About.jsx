import React from "react";

function About() {
  return (
    <div class="container">
      <div class="my-3">
        <h1>About Us</h1>
      </div>
      <hr />
      <div>
        <img
          src={`https://i.imgur.com/H1COdaa.png`}
          alt="logo"
          style={{ height: "25em", width: "25em" }}
        />
      </div>
      <span style={{ fontSize: "20px" }}>
        Jam Together is the hackathon submission for 4 Rutgers University class
        of 2023 students. It's often said that music is the universal language,
        and we at Jam Together truly believe in the friendships, memories, and
        community that music can build. This is why we started Jam Together, in
        order to bring more music to the world and connect local people with
        common interests with each other.{" "}
      </span>
      <br />
      <br />
      <br />
      <h3>How to use our app</h3>
      <span style={{ fontSize: "20px" }}>
        Jam Together is made with simplicity in mind. After you create an
        account, you can start making pins. These pins will tell you the
        location (on the map), the type of location (either outdoors, indoors,
        or piano available), and the times you'll be there. You can just fill it
        out with the information, and people who are interested in your style of
        music will show up and be either listeners or performers. Together, you
        guys can create the magic of music and share it with the listeners and
        those who happen to be around.{" "}
      </span>
    </div>
  );
}

export default About;
