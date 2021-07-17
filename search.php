<html>

<head></head>
<body>

<form action="" method="post" >

<input type="text" name="valueToSearch" placeholder="Search Record.."></br>
<input type="submit" name="search" value="Search Record..">
</form>



</body>


</html>
<?php

include 'dbconnection.php';




$valueToSearch = $_POST['valueToSearch'];

$sql = "SELECT * FROM staffs WHERE s_id=$valueToSearch ";
$result = mysqli_query($conn,$sql);


if ($result)
 {
  while($row = mysqli_fetch_array($result))
 {
     echo "<table>
     <tr><th>ID</th><th>First Name</th><th>Last Name</th></tr>
     <tr>
     <td> $row[0]</td>
     <td>$row[2]</td>
     </tr>
     </table>";

 }
}
?>
