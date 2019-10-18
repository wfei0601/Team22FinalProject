<?php
// use Ramsey\Uuid\Uuid;

Step 0: Validate the incoming data
$MemberId = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Fighters (MemberId, FirstName, LastName, Gender,
    Street, City, State, ZipCode, WorkNum, MobileNum, RadioNum,
    StationNum, Email, DateOfBirth)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $MemberId,
  $_POST['FirstName'],
  $_POST['LastName'],
  $_POST['DateOfBirth'],
  $_POST['Gender'],
  $_POST['Street'],
  $_POST['City'],
  $_POST['State'],
  $_POST['ZipCode'],
  $_POST['WorkNum'],
  $_POST['MobileNum'],
  $_POST['RadioNum'],
  $_POST['StationNum'],
  $_POST['Email']
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../Fighter/?MemberId='.$MemberId);
