
CREATE DATABASE login;
USE login;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(200) NOT NULL,
    pass VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO users (user_name,first_name,last_name,email,pass)
VALUES(
	'ze-marcos',
    'mark',
    'schemmer',
    'mjs.schemmer@gmail.com',
    'qwertyuio'
);



SELECT * FROM users;



-- see if email exists in database!

SELECT * FROM users 
WHERE email = 'mjs.schemmer@gmail.com';