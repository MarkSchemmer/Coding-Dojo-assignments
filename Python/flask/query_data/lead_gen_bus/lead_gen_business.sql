SELECT sum(amount) AS s, DATE_FORMAT(charged_datetime,'%M') AS m FROM billing b WHERE date_format(charged_datetime,'%M') = 'March'  group by m;

SELECT sum(amount) AS s, DATE_FORMAT(charged_datetime,'%M') AS m, client_id AS client FROM billing b WHERE client_id = 2 GROUP BY client_id;

-- SELECT COUNT(s.)
SELECT COUNT(client_id) AS amount_of_sites_owned FROM sites
WHERE sites.client_id = 10;


SELECT t1.tot, t1.m, t2.tot, t2.y 
FROM 
(SELECT COUNT(s.site_id) AS tot, date_format(created_datetime, '%M') AS m
FROM sites s 
WHERE s.client_id = 1
GROUP BY m) AS t1,
(SELECT COUNT(s.site_id) AS tot, DATE_FORMAT(created_datetime, '%Y') AS y 
FROM sites s 
WHERE s.client_id = 1
GROUP BY y) AS t2;



DELIMITER //

DROP PROCEDURE IF EXISTS get_sites_nums //

CREATE PROCEDURE 
  get_sites_nums( v INT )
BEGIN  
SELECT t1.tot, t1.m, t2.tot, t2.y 
FROM 
(SELECT COUNT(s.site_id) AS tot, date_format(created_datetime, '%M') AS m
FROM sites s 
WHERE s.client_id = v
GROUP BY m) AS t1,
(SELECT COUNT(s.site_id) AS tot, DATE_FORMAT(created_datetime, '%Y') AS y 
FROM sites s 
WHERE s.client_id = v
GROUP BY y) AS t2;  
END 
//

DELIMITER ;


call get_sites_nums(1);
call get_sites_nums(20);


/*
5. What query would you run to get the total # of leads generated 
for each of the sites between January 1, 2011 to February 15, 2011?
*/
SELECT COUNT(l.leads_id) AS lead_count, CONCAT_WS(' ',l.first_name,l.last_name) AS full_name
FROM leads l
JOIN sites s ON l.site_id = s.site_id
WHERE  s.created_datetime  > '2011-1-1 0:0:0' AND s.created_datetime  < '2011-2-1 0:0:0'
GROUP BY s.client_id;



SELECT registered_datetime FROM leads;



SELECT CONCAT_WS(' ',c.first_name,c.last_name) AS client_name, COUNT(l.leads_id) AS leads_amount, DATE_FORMAT(l.registered_datetime, '%Y %e %M') AS d
FROM clients c 
JOIN sites s ON s.client_id = c.client_id 
JOIN leads l ON l.site_id = s.site_id
WHERE l.registered_datetime > '2011-1-1' AND '2011-12-31'
GROUP BY client_name;



/*
	7. What query would you run to get a list of client names and the 
    total # of leads we've generated for each client each month between 
    months 1 - 6 of Year 2011?
*/


SELECT CONCAT_WS(' ',c.first_name,c.last_name) AS client_name, COUNT(l.leads_id) AS lead_count
FROM leads l 
JOIN sites s ON l.site_id = s.site_id
JOIN clients c ON c.client_id = s.client_id;

/*
			8. What query would you run to get a list of client names and the total # of 
			leads we've generated for each of our clients' sites between 
			January 1, 2011 to December 31, 2011? Order this query by client id.  
			Come up with a second query that shows all the clients, the site name(s)
			and the total number of leads generated from each site for all time.
*/



SELECT t1.client_name, t1.lead_count, t1.date, t2.site_name, t2.lead_count, t2.client_name
FROM 
(SELECT CONCAT_WS(' ',c.first_name,c.last_name) AS client_name, COUNT(l.leads_id) AS lead_count, DATE_FORMAT(l.registered_datetime,'%M %e %Y') AS date 
FROM leads l 
JOIN sites s ON l.site_id = s.site_id
JOIN clients c ON c.client_id = s.client_id
WHERE l.registered_datetime > '2011-1-1' AND l.registered_datetime < '2011-12-31'
GROUP BY client_name) AS t1,
(SELECT s.domain_name AS site_name, COUNT(l.leads_id) AS lead_count, CONCAT_WS(' ',c.first_name,c.last_name) AS client_name
FROM leads l 
JOIN sites s ON l.site_id = s.site_id
JOIN clients c ON c.client_id = s.client_id
GROUP BY site_name) AS t2;


SELECT * FROM billing;


/*
	9. Write a single query that retrieves total revenue 
    collected from each client for each month of the year. 
    Order it by client id.
*/


SELECT t1.revenue, t1.date, t2.client_name
FROM 
(
	SELECT SUM(b.amount) AS revenue, DATE_FORMAT(b.charged_datetime,'%M') AS date
    FROM billing b
    GROUP BY date 
    ORDER BY date DESC
)AS t1,
(
SELECT CONCAT_WS(' ',c.first_name,c.last_name) AS client_name 
FROM clients c 
) AS t2;


/*
	10. Write a single query that retrieves all the sites 
    that each client owns. Group the results so that each row shows a new client.
    It will become clearer when you add a new field called 
    'sites' that has all the sites that the client owns. (HINT: use GROUP_CONCAT)
*/








