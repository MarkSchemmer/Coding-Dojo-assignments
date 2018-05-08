
-- basic update for the mark_table , I'm going to add a another column then I'm going to update 
-- the mark column with a new value 


SELECT * FROM mark_table;


INSERT INTO mark_table (first_name,last_name,age) VALUES('james','schemmer',50);


UPDATE mark_table SET first_name = 'marky' WHERE id = 1;


-- for deleting info from the table DELETE FROM table_name WHERE condition(s);


DELETE FROM mark_table WHERE first_name = 'james';
SELECT * FROM mark_table;


-- CONCAT() concats two values together 
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM mark_table;


-- CONCAT_WS()  will put a separator between each value 

SELECT CONCAT_WS(' ',first_name,last_name) AS full_name FROM mark_table; 


-- LENGTH() returns the length of the string 

SELECT LENGTH(last_name) AS last_len FROM mark_table;


-- LOWER() AND UPPER()

SELECT UPPER(last_name) AS last_upper FROM mark_table;

/*

HOUR()
DAYNAME()
MONTH()
NOW()
DATE_FORMAT()

*/


SELECT NOW(); -- will use SELECT NOW() for the created_at and updated_at times 



/* JOIN

	when you join tables you need to join on relationships such id's 
    
    so for example 
    
    SELECT * FROM table_name JOIN talle_name.column ON other_table_name = to a new_column_name

*/





