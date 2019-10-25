<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_GET['MemberId'])) {
  $stmt = $db->prepare(
    // 'SELECT * FROM Fighters f
    // right join Enrollment e on f.MemberId = e.MemberId
    // where e.ExpireDate < format(current_Date(),MM/dd/yyyy)'
    'SELECT f.FirstName, f.LastName, c.Name, e.ExpireDate
    FROM Fighters f, Enrollment e, Certifications c
    WHERE f.MemberId = e.MemberId AND
      e.CertificationId = c.CertificationId AND
      e.ExpireDate < CURRENT_DATE()
    GROUP BY c.CertificationId'
  );

  $stmt->execute([$_GET['MemberId']]);
} else {
  $stmt = $db->prepare('SELECT f.FirstName, f.LastName, c.Name, e.ExpireDate
  FROM Fighters f, Enrollment e, Certifications c
  WHERE f.MemberId = e.MemberId AND
    e.CertificationId = c.CertificationId AND
    e.ExpireDate < CURRENT_DATE()
  GROUP BY c.CertificationId');
  $stmt->execute();
}

$expired = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($expired, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
