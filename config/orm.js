const connection = require("../config/connection.js");

// function selectAll();
// function insertOne();
// function updateOne();

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
const orm = {
    selectAll: (tableInput) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },
    //NEEDS WORK
    insertOne: (name, eaten) => {
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
        connection.query(queryString, [name, eaten], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: (eaten, name) => {
        const queryString = "UPDATE burgers SET devoured = ? WHERE burger_name = ?";
        connection.query(queryString, [eaten, name], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    }

    //   selectWhere: function(tableInput, colToSearch, valOfCol) {
    //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    //   },
    //   selectAndOrder: function(whatToSelect, table, orderCol) {
    //     var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    //     console.log(queryString);
    //     connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    //   },
    //   findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    //     var queryString =
    //       "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    //     connection.query(
    //       queryString,
    //       [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
    //       function(err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //       }
    //     );
    //   }
};

module.exports = orm;