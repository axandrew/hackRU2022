const { Router } = require("express");
const Pin = require("../../models/pins");

function pinsController() {
  const router = Router();

  router.get("/pins", async (req, res) => {
    // const teams = await Player.find().lean();
    const pins = await Pin.find().lean();
    res.send(JSON.stringify(pins));
  });

  router.route("/create-pin").post((req, res, next) => {
    Pin.create(req.body, (error, data) => {
      if (error) return next(error);
      res.json(data);
    });
  });

  return router;
}

module.exports = pinsController();
