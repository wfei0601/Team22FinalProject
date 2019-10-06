create database team22;
CREATE TABLE Fighters (
    MemberId integer autoincrement primary key, 
    FirstName VARCHAR(20),
    LastName VARCHAR(20),
    DateOfBirth date,
    Gender varchar(5) check(Gender="Female" or Gender="Male"),
    Email varchar(30),
    Street varchar(50),
    City varchar(20),
    State varchar(2),
    ZipCode integer,
    StartDate date default GetDate(),
    Position varchar(20),
    RadioNum varchar(20),
    StationNum integer);
    
Create Table Phone (
    PhoneId integer autoincrement primary key
    MemberId integer,
    PhoneNum VARCHAR(10),
    FOREIGN KEY (MemberId) REFERENCES Fighters(MemberId)
);

Create table Certifications (
    CertificationId varchar(20) primary key,
    Name varchar(10),
    Description varchar(50),
    ValidTime varchar(10);

);

create table Enrollment (
    EnrollmentId integer autoincrement primary key,
    EnrollDate date,
    CertificationId varchar(20),
    MemberId integer,
    foreign key (CertificationId) references Certifications (CertificationId)
    foreign key (MemberId) references Fighters(MemberId)
);
    


    
         