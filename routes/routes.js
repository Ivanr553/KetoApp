const express = require("express");
const app = express();
const router = express.Router();

const fatSecret = require("fatsecret")
let fs = new fatSecret("52832a4fe3694a07aca24da4887b98d6", "32aec36f36b946669239d5ddb13abe0b")

//Register
router.post("/search", (req, res) => {

  // console.log("Called with serach term: " + req.searchTerm)
  console.log(req.body.searchTerm)

  fs.method("foods.search", {
      search_expression: req.body.searchTerm,
      max_results: 15
    }).then((data) => {
      res.json(data);
    }).catch((err) => {
      res.send(err);
    })

})

module.exports = router;
