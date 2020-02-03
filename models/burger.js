const orm = require("../config/orm.js");

orm.selectAll("burgers");
orm.insertOne("Veggie", true);
orm.updateOne(false, "Veggie");
orm.updateOne(true, "Greasy");