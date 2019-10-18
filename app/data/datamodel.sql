create database team22;
CREATE TABLE Fighter (
    MemberId integer autoincrement primary key,
    FirstName VARCHAR(20),
    LastName VARCHAR(20),
    DateOfBirth date,
    Gender varchar(6) check(Gender="Female" or Gender="Male"),
    Email varchar(30),
    Street varchar(50),
    City varchar(20),
    State varchar(2),
    ZipCode integer,
    StartDate date default GetDate(),
    Position varchar(20),
    RadioNum varchar(20),
    StationNum integer),
    MobileNum varchar(10),
    WorkNum varchar(10)
);

Create table Certification (
    CertId varchar(20) primary key,
    Name varchar(10),
    Description varchar(50),
    ValidTime varchar(10)

);

create table Enrollment (
    EnrollId integer autoincrement primary key,
    EnrollDate date,
    CertId varchar(20),
    MemberId integer,
    foreign key (CertId) references Certification (CertId)
    foreign key (MemberId) references Fighter (MemberId)
);
