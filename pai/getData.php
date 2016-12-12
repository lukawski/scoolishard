<?php
session_start();
require 'auth.php';
echo $conn;
$query = "SELECT * FROM dane";
//$result = $conn -> query($query);
print_r($conn);
if($result -> num_rows > 0) {
                        echo '<table>
                			    <tr>
                				<th>PESEL</th>
                				<th>Imię</th>
                				<th>Nazwisko</th>
                				<th>Data urodzenia</th>
                				<th>Miejsce urodzenia</th>
                				</tr>';
                        while($row = $result->fetch_assoc()) {
                           echo '
        					<tr>
        					<td>' . $row['pesel'] . '</td>
        					<td>' . $row['imie'] . '</td>
        					<td>' . $row['nazwisko'] . '</td>
        					<td>' . $row['data urodzenia'] . '</td>
        					<td>' . $row['miejsce urodzenia'] . '</td>
        					</tr>';
                        }
                        echo '</table>';
                    } else {
                        echo 'Brak wyników';
                    }
?>