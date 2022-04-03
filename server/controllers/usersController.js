const { Router } = require("express");
const User = require("../../models/users");

function usersController() {
  const router = Router();

  router.get("/users", async (req, res) => {
    // const teams = await Player.find().lean();
    const users = await User.find().lean();
    res.send(JSON.stringify(users));
  });

  return router;
}

module.exports = usersController();
