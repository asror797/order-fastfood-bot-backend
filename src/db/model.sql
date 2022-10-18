


CREATE table users (
   id SERIAL PRIMARY KEY,
   telegram_id INT NOT NULL,
   fullname VARCHAR(128) NOT NULL,
   phone_number VARCHAR(64) ,
)


models-
   -id   
   -name

car-
   -id
   -title
   -price
   -year 
   -author_phone_number 
   -img []
   -created



CREATE TABLE models (
   id SERIAL PRIMARY KEY,
   model_name VARCHAR(32) NOT NULL,
)

CREATE TABLE cars (
   id SERIAL PRIMARY KEY,
   title VARCHAR(512) NOT NULL,
   price VARCHAR(56) ,
   year INT ,
   created VARCHAR(32),
   phone_number VARCHAR(64)
)



