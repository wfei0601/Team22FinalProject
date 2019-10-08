<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'SELECT * FROM Fighter
    WHERE MemberId = ?'
  );
  $stmt->execute([$_GET['guid']]);
} else {
  $stmt = $db->prepare('SELECT * FROM Fighter');
  $stmt->execute();
}

$fighters = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($fighters, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
