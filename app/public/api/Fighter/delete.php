<?php
// use Ramsey\Uuid\Uuid;

// Step 0: Validate the incoming data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$MemberId = $_REQUEST['MemberId'];
// Step 2: Create & run the query
$stmt = $db->prepare(
  "DELETE FROM 'Fighters'
  WHERE 'MemberId' = '$MemberId'"
);

$stmt->execute([

]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../Fighter/index.php');
