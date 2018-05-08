

-- 1 return all customers who have a city_id=312
SELECT c.city, cu.first_name, cu.last_name, c.city_id
FROM city c 
JOIN address a ON a.city_id = c.city_id
JOIN customer cu ON cu.address_id = a.address_id
WHERE c.city_id = 312;


-- get all comedy films query should return the description,  release year, rating, special features and genre!
SELECT f.title,f.description,f.release_year,f.rating,f.special_features, c.name 
FROM film f 
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON c.category_id = fc.category_id
WHERE c.name = 'Comedy';

-- what query would you to get all films joined by actor_id = 5, return actor id actor name file title,  description, and release year

SELECT a.actor_id, CONCAT_WS(' ',a.first_name,a.last_name) AS full_name, f.title,f.description,f.release_year
FROM actor a 
JOIN film_actor fa ON fa.actor_id = a.actor_id
LEFT JOIN film f ON f.film_id = fa.film_id
WHERE a.actor_id = 5;


/*
4. What query would you run to get all the customers in store_id = 1 and 
inside these cities (1, 42, 312 and 459)? Your query should return customer
 first name, last name, email, and address.
*/

SELECT c.first_name, c.last_name, c.email, a.address 
FROM customer c
JOIN address a ON a.address_id = c.address_id
JOIN city cc ON cc.city_id = a.city_id
WHERE c.store_id = 1 AND cc.city_id IN (1,42,312,459);



/*
	5. What query would you run to get all the 
	films with a "rating = G" and "special feature = behind the scenes", joined by actor_id = 15? 
	Your query should return the film 
	title, description, release year, rating, and special feature. Hint: 
	You may use LIKE function in getting the 'behind the scenes' part.
*/


SELECT f.title,f.description,f.release_year,f.rating,f.special_features
FROM film f 
JOIN film_actor fc ON fc.film_id = f.film_id 
JOIN actor a ON a.actor_id = fc.actor_id
WHERE a.actor_id = 15 AND f.rating = 'G' AND f.special_features = 'Behind the Scenes';

/*
	6. What query would you run to get all the actors 
	that joined in the film_id = 369? Your query should return 
	the film_id, title, actor_id, and actor_name.

*/


SELECT  f.film_id, f.title, a.actor_id, CONCAT_WS(' ',a.first_name,a.last_name) AS name 
FROM film f 
JOIN film_actor fc ON fc.film_id = f.film_id 
JOIN actor a ON a.actor_id = fc.actor_id
WHERE f.film_id = 369;


/*

7. What query would you run to get all drama films with a rental rate of 2.99? 
Your query should return 
film title, description, release year, rating, special features, and genre (category).

*/
SELECT f.title, f.description, f.release_year, f.rating, f.special_features, c.name
FROM film f
JOIN film_category fc ON fc.film_id = f.film_id
JOIN category c ON c.category_id = fc.category_id
WHERE f.rental_rate = 2.99;

/*
8. What query would you run to get all the action films which are joined by SANDRA KILMER? Your query should return 
film title, description, release year, rating, special features, genre (category), and actor's first name and last name.
*/ 

SELECT f.title, f.description, f.release_year, f.rating, f.special_features, c.name, CONCAT_WS(' ',a.first_name, a.last_name) AS actor_name 
FROM film f 
JOIN film_category fc ON fc.film_id = f.film_id
JOIN category c ON c.category_id = fc.category_id 
JOIN film_actor fa ON f.film_id = fa.film_id 
JOIN actor a ON a.actor_id = fa.actor_id
WHERE CONCAT_WS(' ',a.first_name,a.last_name) = 'SANDRA KILMER';

        
        
        
        
        
        
