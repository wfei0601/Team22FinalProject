<?php
// use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Fighters SET
    FirstName = ?, LastName = ?, Gender = ?,
    Street = ?, City = ?, State = ?, ZipCode = ?,
    WorkNum = ?, MobileNum = ?, RadioNum = ?,
    StationNum = ?, Position = ?, DateOfBirth = ?, Email = ?
  WHERE MemberId = ?'
);

$stmt->execute([
  $_POST['FirstName'],
  $_POST['LastName'],
  $_POST['Gender'],
  $_POST['Street'],
  $_POST['City'],
  $_POST['State'],
  $_POST['ZipCode'],
  $_POST['WorkNum'],
  $_POST['MobileNum'],
  $_POST['RadioNum'],
  $_POST['StationNum'],
  $_POST['Position'],
  $_POST['DateOfBirth'],
  $_POST['Email'],
  $_POST['MemberId']
]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../Fighter/');
