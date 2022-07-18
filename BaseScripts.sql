
CREATE DATABASE DBUSUARIOS

USE DBUSUARIOS

if OBJECT_ID('USUARIO') is not null
	drop table USUARIO;

CREATE TABLE USUARIO(
Id int identity primary key,
UserName varchar(50) NOT NULL,
Contrase�a varchar(50) NOT NULL,
Nombre varchar(50) NOT NULL,
ApellidoPaterno varchar(50),
ApellidoMaterno varchar(50),
FechaNacimiento date,
FechaInicioSesion datetime
);

create procedure Lista
as
begin
	select * from USUARIO
end

create procedure Detalle(
@Id int
)
as
begin
	select * from USUARIO where Id = @Id
end

create procedure Guardar(
@UserName varchar(50),
@Contrase�a varchar(50),
@Nombre varchar(50),
@ApellidoPaterno varchar(50),
@ApellidoMaterno varchar(50),
@FechaNacimiento date,
@FechaInicioSesion datetime
)
as
begin
	insert into USUARIO(UserName,Contrase�a,Nombre,ApellidoPaterno,ApellidoMaterno,FechaNacimiento,FechaInicioSesion) values (@UserName,@Contrase�a,@Nombre,@ApellidoPaterno,@ApellidoMaterno,@FechaNacimiento,@FechaInicioSesion)
end

create procedure Editar(
@Id int,
@UserName varchar(50),
@Contrase�a varchar(50),
@Nombre varchar(50),
@ApellidoPaterno varchar(50),
@ApellidoMaterno varchar(50),
@FechaNacimiento date,
@FechaInicioSesion datetime
)
as
begin
	update USUARIO set UserName = @UserName, Contrase�a = @Contrase�a, Nombre = @Nombre, ApellidoPaterno = @ApellidoPaterno, 
	ApellidoMaterno = @ApellidoMaterno, FechaNacimiento = @FechaNacimiento, FechaInicioSesion = @FechaInicioSesion where Id = @Id
end

create procedure Eliminar(
@Id int
)
as
begin
	delete from USUARIO where Id = @Id
end