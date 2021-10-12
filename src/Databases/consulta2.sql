CREATE DATABASE TourSV

USE TourSV

CREATE TABLE usuarios(
    Id INT (25) NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR (60) ,
    Apellido VARCHAR (60) ,
    Email VARCHAR (60) ,
    Clave VARCHAR (60) ,
    PRIMARY KEY (Id)
);

INSERT INTO usuarios(Nombre,Apellido,Email,Clave) VALUES('Ricardo','Centi','ricardo1centi@gmail.com','rekedman');

INSERT INTO usuarios(Nombre,Apellido,Email,Clave) VALUES('Rodolfo','Cabezas','ricardo1centi@gmail.com','rekedman');
SELECT * FROM usuarios;

DROP TABLE usuarios;
CREATE TABLE sitios (
    Id INT NOT NULL AUTO_INCREMENT,
    Nombre_sitio VARCHAR (60),
    Info_sitio VARCHAR (255),
    Ubicacion_sitio VARCHAR (255),
    Categoria_sitio VARCHAR (55),
    rate INT (2),
    Comentario VARCHAR(255),
    URL VARCHAR(255),
    PRIMARY KEY(Id)
);

SELECT * FROM sitios;
INSERT INTO sitios(Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL) VALUES("Parque Nacional","Es un sitio turistico para todo publico","sonsonate","parque",5,"chido","https://www");

INSERT INTO sitios(Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL) VALUES("Escuela","Es una escuela publica","sonsonate","parque",2,"chido","https://www");
INSERT INTO sitios(Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL) VALUES("Parque Militar","Es un sitio turistico para todo privado","sonsonate","parque",4,"chido","https://www");
INSERT INTO sitios(Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL) VALUES("Agape","Es un centro recreacional","sonsonate","parque",5,"chido","https://www");
INSERT INTO sitios(Nombre_sitio,Info_sitio,Ubicacion_sitio,Categoria_sitio,rate,Comentario,URL) VALUES("redondel","Es un sitio turistico para todo publico","sonsonate","parque",1,"chido","https://www");
