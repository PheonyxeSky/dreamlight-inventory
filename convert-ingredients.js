const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile("./data/Ingredients.csv")
  .then((jsonObj) => {
    fs.writeFileSync("./public/data/ingredients.json", JSON.stringify(jsonObj, null, 2));
    console.log("Ingredients.json created!");
  });