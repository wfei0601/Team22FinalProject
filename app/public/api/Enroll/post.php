<?php

// Step 0: Validate the incoming data


// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Enrollment (MemberId, CertificationId, EnrollDate)
  VALUES (?, ?, ?)'
);

$stmt->execute([
  $_POST['MemberId'],
  $_POST['CertificationId'],
  $_POST['EnrollDate']
]);
$EnrollmentId = $db->lastInsertId();


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../Enroll/?EnrollmentId='.$EnrollmentId);
