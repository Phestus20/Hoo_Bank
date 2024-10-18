<?php
header("Access-Control-Allow-Origin: http://localhost:5174");
header("Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    exit(0); // Handle preflight request
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $link = new mysqli('localhost', 'root', '', 'react_api');

    if ($link->connect_error) {
        die("Connection failed: " . $link->connect_error);
    } else {
        $name = $_POST['name'];
        $mobile = $_POST['mobile'];
        $pass = $_POST['password'];

        // Check if user already exists
        $stmt = $link->prepare("SELECT * FROM enquiry WHERE mobile = ? OR first_name = ?");
        $stmt->bind_param("ss", $mobile, $name); // Changed to "ss" for both string parameters
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc(); // Fetch user data as an associative array
            // Verify the password against the hashed password stored in the database
            if (password_verify($pass, $user['password'])) {
       

                echo "Login successfully."; // message sent to Form.jsx as response text
            } else {
                echo "Invalid password."; // Error message for incorrect password
            }
        } else {
            echo "User does not exist."; // Error message for non-existent user
        }

        $stmt->close();
        $link->close();
    }
} else {
    header("Location: http://localhost:5173");
}