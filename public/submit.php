<?php
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: POST");
//header("Content-Type: application/json");
//
//$host = "localhost";
//$dbname = "awf_db_usr";
//$username = "awf_db_usr";
//$password = "BlEhxtvfdT0QY7v3";
//
//$conn = new mysqli($host, $username, $password, $dbname);
//if ($conn->connect_error) {
//    http_response_code(500);
//    echo json_encode(["error" => "DB connection failed"]);
//    exit;
//}
//
//$name = isset($_POST['name']) ? $_POST['name'] : '';
//$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
//$car_model = isset($_POST['car_model']) ? $_POST['car_model'] : '';
//$instagram = isset($_POST['instagram']) ? $_POST['instagram'] : '';
//$car_photo_path = '';
//
//if (isset($_FILES['car_photo']) && $_FILES['car_photo']['error'] === UPLOAD_ERR_OK) {
//    $uploadDir = 'uploads/';
//    if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);
//
//    $filename = uniqid() . "_" . basename($_FILES['car_photo']['name']);
//    $targetFile = $uploadDir . $filename;
//
//    if (move_uploaded_file($_FILES['car_photo']['tmp_name'], $targetFile)) {
//        $car_photo_path = $targetFile;
//    } else {
//        http_response_code(500);
//        echo json_encode(["error" => "Photo upload failed"]);
//        exit;
//    }
//}
//
//$stmt = $conn->prepare("INSERT INTO user_submissions (name, phone, car_model, car_photo, instagram) VALUES (?, ?, ?, ?, ?)");
//$stmt->bind_param("sssss", $name, $phone, $car_model, $car_photo_path, $instagram);
//
//if ($stmt->execute()) {
//    echo json_encode(["message" => "Submission successful"]);
//} else {
//    http_response_code(400);
//    echo json_encode(["error" => "DB error: " . $conn->error]);
//}
//
//$stmt->close();
//$conn->close();
