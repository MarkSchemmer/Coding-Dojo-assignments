

-- basic insert into the twitter db


SELECT * FROM users;




-- create a table first !
CREATE TABLE IF NOT EXISTS mark_table (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(10) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    age INT,
	PRIMARY KEY (id)
);

-- insert into table
INSERT INTO mark_table (first_name, last_name,age)
VALUES ('mark',
		'schemmer',
		23);
        
        
SELECT * FROM mark_table;