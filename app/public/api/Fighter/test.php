<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_POST['delete'])) {
  $data = handleDelete();
  $delete_Query = "DELETE FROM 'Fighters' WHERE 'MemberId' = $data";
  $stmt = $db->prepare(
    $delete_Query
  );
  $stmt->execute();
}
    // 'SELECT * FROM Fighters f
    // right join Enrollment e on f.MemberId = e.MemberId
    // where e.ExpireDate < format(current_Date(),MM/dd/yyyy)'
  //   'DELETE FROM Fighters
  //   WHERE MemberId = '$MemberId''
  // );
  // $stmt->execute([$_GET['MemberId']]);

 else {
   $data = $_POST['MemberId'];
   $delete_Query = "DELETE FROM 'Fighters' WHERE 'MemberId' = $data";
   $stmt = $db->prepare(
     $delete_Query
   );
   $stmt->execute();}

// $expired = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($expired, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
