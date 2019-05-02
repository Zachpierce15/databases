CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` MEDIUMTEXT NULL DEFAULT NULL,
  `room` INTEGER NULL DEFAULT NULL,
  `username` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE username (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE rooms (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `room` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

