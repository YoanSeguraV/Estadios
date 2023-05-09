
drop database if exists estadio;
create database estadio;

use estadio;

create table tbl_estadios(
id_estadio int auto_increment,
nombre varchar(30),
ubicacion varchar(35),
constraint PK_ID_ESTADIO primary key (id_estadio)

);

create table tbl_equipo(
id_equipo int auto_increment,
nombre_equipo varchar(30),
ciudad_equipo varchar(35),
constraint PK_ID_EQUIPO primary key (id_equipo)

);

create table tbl_historial(
id_partido int auto_increment,
id_equipo1 int ,
id_equipo2 int ,
id_estadioh int ,
fecha date ,
resultado varchar(10),
constraint PK_ID_PARTIDO primary key (id_partido),
constraint FK_ID_EQUIPO1  foreign key (id_equipo1) references tbl_equipo(id_equipo) ,
constraint FK_ID_EQUIPO2 foreign key (id_equipo2) references tbl_equipo(id_equipo),
constraint FK_ID_ESTADIO foreign key (id_estadioh) references tbl_estadios(id_estadio)

);

insert into tbl_estadios(nombre,ubicacion) values
("Cam Nou","cr 58 norte"),
("Palma Seca","cr 58 sur"),
("Bernabeu","Madrid España");

insert into tbl_equipo(nombre_equipo,ciudad_equipo) values
("Juventus","Turin"),
("Real Madrid","Madrid"),
("Barcelona","Barcelona España");

insert into tbl_historial(id_equipo1,id_equipo2,id_estadioh,fecha,resultado) values
(1,3,2,"2023-03-09","2-0"),
(3,1,3,"2023-03-19","4-0"),
(2,1,1,"2023-03-11","2-2");

select * from tbl_estadios;
select * from tbl_equipo;
select * from tbl_historial;



