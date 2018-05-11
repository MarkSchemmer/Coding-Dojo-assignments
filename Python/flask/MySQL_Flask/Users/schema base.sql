CREATE DATABASE users;

use users;


CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    created_at DATETIME,
    PRIMARY KEY (id)
);


INSERT INTO user (first_name,last_name,created_at) VALUES ('mark','schemmer',NOW());


SELECT * FROM user;
