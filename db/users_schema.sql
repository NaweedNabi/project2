CREATE DATABASE users_db;

-- Create two new databases --
DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

-- Use inventory_db --
USE users_db;

-- See database in use --
SELECT DATABASE();

-- Creates the table "logininfo" within users_db --
CREATE TABLE logininfo (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name INT NOT NULL,
last_name INT NOT NULL,
email INT NOT NULL,
password INT NOT NULL,

);

