<?php
header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Methods: POST, GET, PUT OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    exit(0); // Handle preflight request
}



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $link = new mysqli('localhost', 'root', '', 'react_api');
    
    if ($link->connect_error) {
        die("Connection failed: " . $link->connect_error);
    } else {
        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST['email'];
        $mobile = $_POST['mobile'];
        $pass = $_POST['password'];
        $passCon = $_POST['confirm_password'];
        $password = password_hash($pass, PASSWORD_DEFAULT);

        if (strlen($first_name) < 3 || strlen($last_name) < 3 || strlen($mobile) < 3 || strlen($password) < 3 || strlen($pass) < 3) {
            echo "Input length must be a minimum of 3 letters";
            return;
        }
        
        if ($pass !==  $passCon ) {
            echo "Both passwords must match";
            return;
        }

        // Check if user already exists
        $stmt = $link->prepare("SELECT * FROM enquiry WHERE mobile = ? OR email = ?");
        $stmt->bind_param("ss", $mobile,$email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            echo "User already exists.";
        } else {
            $sql = "INSERT INTO enquiry(first_name, last_name,  mobile, email, password) VALUES (?, ?, ?, ?, ?)";
            $stmt = $link->prepare($sql);
            $stmt->bind_param("sssss", $first_name,  $last_name, $mobile, $email, $password);
            $stmt->execute();

            if ($stmt->affected_rows > 0) {
                echo "Account created successfully.";
            } else {
                echo "Error: " . $stmt->error;
            }
        }
        $stmt->close();
        $link->close();
    }
}
?>



