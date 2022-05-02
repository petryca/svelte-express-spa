const express = require("express");
const app = express();
const router = express.Router();

router.get("/test", (req, res) => {

  res.json({
      success: true,
      data: ['red', 'green', 'blue']
  });

});

module.exports = router;
