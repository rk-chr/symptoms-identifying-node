const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Router = require("./SymptomAPI");

const app = express();
const port = 2018;
app.use(cors());

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

Router().Symptoms(app);

app.listen(port, () => console.log(`app listening on port ${port}!`));
