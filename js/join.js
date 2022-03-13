const { Router } = require("express");

const route = Router();

route.get("/", async (_, res) => {
    res.redirect(`https://dsc.gg/consteagle`)
});

module.exports = route;
