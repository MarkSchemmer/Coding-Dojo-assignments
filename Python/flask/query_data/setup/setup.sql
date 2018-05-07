CREATE DATABASE setup;

USE setup;


CREATE TABLE users
(
	id INT AUTO_INCREMENT,
    first_name VARCHAR(200),
    last_name VARCHAR(200),
    email VARCHAR(300),
    PRIMARY KEY(id)
);


INSERT INTO users (first_name, last_name,email) 
VALUES
('mark','schemmer','gringojaimes20@gmail.com'),
('jim','schemmer','jt.schemmer@gmail.com');

UPDATE users SET  first_name = 'Marky' WHERE id = 1;


SELECT * FROM users;


DELETE FROM users
WHERE users.id = 2;

