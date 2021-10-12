CREATE DATABASE Proyecto1;
================================================

USE Proyecto1;

=================================================
CREATE TABLE usuarios (
    Id INT (25) NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR (60) NOT NULL,
    Apellido VARCHAR (60) NOT NULL,
    Email VARCHAR (60) NOT NULL,
    Clave VARCHAR (60) NOT NULL,
    PRIMARY KEY (id),
);
==================================================
CREATE TABLE sitios (
    Id INT (25) NOT NULL AUTO_INCREMENT,
    Nombre_sitio VARCHAR (60) NOT NULL,
    Info_sitio VARCHAR (255),
    Ubicacion_sitio VARCHAR (255),
    Categoria_sitio VARCHAR (255),
    rate INT (2),
);
==================================================
CREATE TABLE CategoriaSitio (
    Id INT (25) NOT NULL AUTO_INCREMENT,
    NombreSitio VARCHAR (60) NOT NULL,
    Descripcion VARCHAR (60) NOT NULL,
);
==================================================
CREATE TABLE COMENTARTIOS (
    Id INT (25) NOT NULL AUTO_INCREMENT,
    Nombre_usuario VARCHAR (55) NOT NULL,
    Observacion VARCHAR (500) NOT NULL,
);
====================================================
CREATE TABLE departamentos (
id INT (45) NOT NULL,
Nombre VARCHAR (75) NOT NOT,
)
=====================================================
CREATE TABLE municipio (
id INT (45) NOT NULL,
Nombre VARCHAR (75) NOT NOT,
)
======================================================