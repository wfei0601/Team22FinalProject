<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_GET['MemberId'])) {
  $stmt = $db->prepare(
    'SELECT * FROM Fighters
    WHERE MemberId = ?'
  );
  $stmt->execute([$_GET['MemberId']]);
} else {
  $stmt = $db->prepare('SELECT * FROM Fighters');
  $stmt->execute();
}

$fighters = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($fighters, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
