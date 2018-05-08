
-- SELECT u.first_name, u.last_name

SELECT * FROM users;


SELECT * FROM friendships;


SELECT CONCAT_WS(' ',u.first_name, u.last_name) AS name, u.id, fs.friend_2_id, CONCAT_WS(' ',friend.first_name, friend.last_name) AS sec_friend
FROM users u 
JOIN friendships fs ON u.id = fs.friend_1_id
JOIN users AS friend ON friend.id = fs.friend_2_id
ORDER BY name;
-- GROUP BY name;


SELECT CONCAT_WS(' ', u.first_name,u.last_name) AS name, CONCAT_WS(' ', friend.first_name, friend.last_name) AS sec_friend
FROM users u 
JOIN friendships fs ON u.id = fs.friend_1_id
JOIN users AS friend ON friend.id = fs.friend_2_id
WHERE friend.first_name = 'Kermit';


SELECT CONCAT_WS(' ', u.first_name,u.last_name) AS name, COUNT(CONCAT_WS(' ', friend.first_name, friend.last_name)) AS sec_friend
FROM users u 
JOIN friendships fs ON u.id = fs.friend_1_id
JOIN users AS friend ON friend.id = fs.friend_2_id
GROUP BY name
LIMIT 1;


INSERT INTO users (first_name,last_name,created_at) VALUES('Mark','Schemmer',NOW());

SELECT * FROM users;

INSERT INTO  friendships (friend_1_id,friend_2_id,created_at) 
VALUES 
(6,2,NOW()),
(6,4,NOW()),
(6,5,NOW());


SELECT CONCAT_WS(' ',friend.first_name,friend.last_name) AS name
FROM users u 
JOIN friendships fs ON u.id = fs.friend_1_id
JOIN users AS friend ON friend.id = fs.friend_2_id
WHERE u.first_name = 'Eli'
ORDER BY name ASC;

SELECT CONCAT_WS(' ',friend.first_name,friend.last_name) AS name
FROM users u 
JOIN friendships fs ON u.id = fs.friend_1_id
JOIN users AS friend ON friend.id = fs.friend_2_id
WHERE u.first_name = 'Eli';



 

























