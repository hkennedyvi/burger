DROP DATABASE IF EXISTS burgersDB;

CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);