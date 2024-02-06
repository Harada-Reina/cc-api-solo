CREATE TABLE product (id serial unique, name varchar(50) unique);

CREATE TABLE maxid(
    product_name varchar(50) unique,
    id serial
);