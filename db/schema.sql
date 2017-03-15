CREATE DATABASE 'burgers_db';

USE 'burgers_db';


CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR (255) NOT NULL,
	devoured BOOLEAN,
    date_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);