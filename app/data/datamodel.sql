create database team22;
CREATE TABLE Fighters (
    MemberId integer auto_increment primary key,
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

Create table Certifications (
    CertificationId integer auto_increment primary key,
    Name varchar(10),
    Description varchar(50),
    ValidTime varchar(10)
);

create table Enrollment (
    EnrollId integer auto_increment primary key,
    CertificationId integer,
    MemberId integer,
	  StartDate date,
    ExpireDate date,
    foreign key (CertificationId) references Certifications (CertificationId),
    foreign key (MemberId) references Fighters (MemberId)
);
