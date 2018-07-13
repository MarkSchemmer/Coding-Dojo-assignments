
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


-- b'$2b$12$736rD74B.p8iolLrr/n3eOX1Z//bNQ71s8Lj4udCjjd0obXbo7tTO'

update users SET pass = '$2b$12$736rD74B.p8iolLrr/n3eOX1Z//bNQ71s8Lj4udCjjd0obXbo7tTO' WHERE email = 'mjs.schemmer@gmail.com';



DELETE FROM users WHERE first_name = 'zim';


DROP DATABASE cw_db;

	CREATE DATABASE django_app;
    USE django_app;