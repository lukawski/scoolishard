<?php 
session_start();
            $conn;
            $servname = "localhost";
            $db = "2016_11_17";
            
            if((isset($_POST['user']) && isset($_POST['pass']))) {
                $user = $_POST['user'];
                $pass = $_POST['pass'];
                $conn = new mysqli($servname, $user, $pass, $db);
                
                if($conn -> connect_error) {
                    echo '<h1>Złe dane</h1>';
                    print_r($user);
                } else {
                    echo '<form method="GET" action="getData.php"><button id="show">Pokaż dane</button></form>';
                }
            } else {
                echo '<h1>Wprowadź dane logowania</h1>';
            }
        ?>