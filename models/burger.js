const orm = require("../config/orm.js");

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },

    insertOne: (name, eaten, cb) => {
        orm.insertOne("burgers", name, eaten, (res) => {
            cb(res);
        });
    },

    updateOne: (eaten, name, cb) => {
        orm.updateOne("burgers", eaten, name, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;

