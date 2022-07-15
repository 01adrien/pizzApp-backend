const express = require("express");
const app = express();
const cors = require("cors");
const allPizzas = require("./db");

app.use(express.json());
app.use(cors());

app.get("/pizzas", (req, res) => {
    res.send(allPizzas);
});

app.listen(4000, () => console.log("server is running on port 4000"));
