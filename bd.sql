CREATE DATABASE bd2017;

CREATE TABLE client(
	cin varchar(8) PRIMARY KEY,
	nom varchar(30),
	prenom varchar(30),
	tel varchar(8)
	);

CREATE TABLE article(
	code int PRIMARY KEY,
	libelle varchar(30),
	prixbas int
	);

CREATE TABLE offre(
	cin varchar(8),
	code int, 
	prixpropose int,
	PRIMARY KEY(cin,code),
	FOREIGN KEY (cin) REFERENCES client(cin),
	FOREIGN KEY (code) REFERENCES article(code)
	);

INSERT INTO article VALUES(120,'Les gants du gardien Attouga',453);
INSERT INTO article VALUES(212,'Voiture 202 Bh',25470);
INSERT INTO article VALUES(45,"Manuscrit d'Abou el Kacem Echebbi",8520);