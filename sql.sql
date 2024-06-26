-- 5.
SELECT a.product_name,SUM(b.quantity) AS quantity FROM products a 
LEFT JOIN order_details b ON a.product_id = b.product_id 
LEFT JOIN orders c ON c.order_id = b.order_id 
WHERE YEAR(c.order_date) = 2016 GROUP BY a.product_id ORDER BY quantity DESC limit 5
-- result
-- Gorgonzola Telino	444
-- Camembert Pierrot	370
-- Steeleye Stout	274
-- Chartreuse verte	266
-- Flotemysost	261

-- 6.
WITH TopProducts2016 AS (
    SELECT a.product_id,a.product_name,SUM(b.quantity) AS quantity FROM products a 
    LEFT JOIN order_details b ON a.product_id = b.product_id 
    LEFT JOIN orders c ON c.order_id = b.order_id 
    WHERE YEAR(c.order_date) = 2016 GROUP BY a.product_id ORDER BY quantity DESC limit 5
),
TopProducts2017 AS (
    SELECT a.product_id,a.product_name,SUM(b.quantity) AS quantity FROM products a 
    LEFT JOIN order_details b ON a.product_id = b.product_id 
    LEFT JOIN orders c ON c.order_id = b.order_id 
    WHERE YEAR(c.order_date) = 2017 GROUP BY a.product_id ORDER BY quantity DESC limit 5
)
SELECT p.product_name FROM products p
JOIN TopProducts2016 tp2016 ON p.product_id = tp2016.product_id
JOIN TopProducts2017 tp2017 ON p.product_id = tp2017.product_id;
-- result
-- Gorgonzola Telino
-- Camembert Pierrot

-- 7.
WITH data as (
SELECT 
    b.order_id,
    a.product_name,
    a.unit_price,
    b.quantity,
    b.discount,
    (a.unit_price - b.discount) AS total,
    ((a.unit_price - b.discount) * b.quantity ) AS total_price,
    c.order_date 
  from products a
  LEFT JOIN order_details b ON a.product_id = b.product_id 
  LEFT JOIN orders c ON b.order_id = c.order_id
  WHERE c.ship_region = 'Western Europe' 
  ORDER BY c.order_date
)
SELECT year(order_date),sum(total_price) AS Total_sales FROM data
GROUP BY year(order_date)

-- result
-- 2016	119240.38
-- 2017	277821.23000000004
-- 2018	175776.18999999997
