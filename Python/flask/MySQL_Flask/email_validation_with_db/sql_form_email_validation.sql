DROP DATABASE email;

CREATE DATABASE email;

USE email;

CREATE TABLE emails(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    created_at DATETIME,
    delete_email BOOLEAN,
    PRIMARY KEY (id)
);


DROP TABLE emails;

INSERT INTO emails (email,created_at,delete_email) 
VALUES('mjs.schemmer@gmail.com',NOW(),False);

SELECT e.id, e.email, DATE_FORMAT(e.created_at,'%M %D %Y') AS _date FROM emails  e;

-- delete parts of a database 

-- DELETE FROM emails WHERE emails.delete_email = 0;


SELECT * FROM emails WHERE emails.id = 4;


SELECT * FROM emails;