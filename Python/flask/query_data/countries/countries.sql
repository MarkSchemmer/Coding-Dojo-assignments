
SELECT * FROM cities;
SELECT * FROM languages;
SELECT * FROM countries;

-- all countrys that speak slovene!
SELECT c.name, l.percentage 
FROM languages l JOIN countries c ON c.code = l.country_code 
WHERE l.language = 'Slovene' 
ORDER BY l.percentage DESC;

-- total number of cities for each country 
SELECT c.name, ci.country_id, COUNT(c.name) AS number_of_cities 
FROM countries c JOIN cities ci ON ci.country_id = c.id 
GROUP BY c.name 
ORDER BY number_of_cities DESC; 

-- 3, which cities are in descending order!
SELECT c.name, ci.name, ci.population 
FROM countries c 
JOIN cities ci ON ci.country_id = c.id  
WHERE c.name = 'Mexico' AND ci.population > 500000 
ORDER BY ci.population DESC;


-- 4, all languages in each country with a percentage greater than 89% should return in descending order
-- should be name language percentage
SELECT c.name, l.language, l.percentage 
FROM countries c 
JOIN languages l ON  c.code = l.country_code
WHERE l.percentage > 89
ORDER BY l.percentage DESC;

-- 5, get countrys with surface area < 5000000 and population greater than 100000
SELECT c.name, c.surface_area, c.population 
FROM countries c
WHERE c.surface_area < 501 AND c.population > 100000;


-- 6, get all constitutional monarchy countries with capital > 200 and life_expetency > 75
SELECT c.name, c.government_form, c.capital, c.life_expectancy 
FROM countries c
WHERE c.government_form = 'Constitutional Monarchy' AND c.capital > 200 AND c.life_expectancy > 75;



-- 7, query that gets 
SELECT c.name, ci.name, ci.district ,ci.population
FROM countries c
JOIN cities ci ON c.code = ci.country_code 
WHERE c.name = 'Argentina' 
AND ci.district = 'Buenos Aires' 
AND c.population > 500000;

-- 8 what query would summarize number of countries in each region 
-- query should display name of the region and the number of countries
-- query should arrange the result by number countries in ascending order
SELECT c.region, COUNT(c.name) AS number_of_countries 
FROM countries c 
GROUP BY c.region 
ORDER BY number_of_countries DESC;



