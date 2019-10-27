<?php
// use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'DELETE FROM Certifications
  WHERE CertificationId = ?'
);

$stmt->execute([
  $_POST['CertificationId']
]);

$certs = $stmt->fetchAll();


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../Certification');
