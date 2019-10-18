<?php
// use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Fighters ( FirstName, LastName, DateOfBirth, Gender, Email,
    MobileNum, WorkNum, Street, City, State, ZipCode,
    RadioNum, StationNum)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['FirstName'],
  $_POST['LastName'],
  $_POST['DateOfBirth'],
  $_POST['Gender'],
  $_POST['Email'],
  $_POST['MobileNum'],
  $_POST['WorkNum'],
  $_POST['Street'],
  $_POST['City'],
  $_POST['State'],
  $_POST['ZipCode'],
  $_POST['RadioNum'],
  $_POST['StationNum']
]);

$MemberId = $db->lastInsertId();

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../Fighter/?MemberId='.$MemberId);
