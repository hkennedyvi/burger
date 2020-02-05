const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
    selectAll: (table, cb) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: (table, name, eaten, cb) => {
        const queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [table, name, eaten], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: (table, eaten, name, cb) => {
        const queryString = "UPDATE ?? SET devoured = ? WHERE burger_name = ?";
        connection.query(queryString, [table, eaten, name], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;