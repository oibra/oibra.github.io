DROP DATABASE IF EXISTS recipes;

CREATE DATABASE recipes;
USE recipes;

DROP TABLE IF EXISTS RecipeDatabase;
CREATE TABLE RecipeDatabase (
   id INT NOT NULL AUTO_INCREMENT,
   name TEXT,
   price FLOAT(4,2),
   timelimit INT,
   servings INT,
   ingredients TEXT,
   directions TEXT
);
