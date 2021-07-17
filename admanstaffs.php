
<html>
<head>
	<title>Managing Market Actions</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body>

<div class="topnav">

  <a href="addnewstaff.php">Add New Staff</a>
  <a href="ees.php">Edit Existing Staff</a>
  <a href="del.php">Delete Staff</a>
  <a href="logout.php">Logout</a>
</div><br/>
 

</body>
</html>

<?php

include "dbconnection.php";
include "adminlogin.php";


$bid=$_SESSION['brid'];


$sqlForTrack ="SELECT * FROM staffs where sb_id=$bid";
$queryForTrack = mysqli_query( $conn, $sqlForTrack );

/* Handle sql errors if retuned */
if( $queryForTrack === false )
{
        echo "ewrweWSSSSSSS";
}

/* Handle sql response for track data */
if( mysqli_num_fields( $queryForTrack ) )
{
        
        echo "<center><table border='10'>
        <tr>
        <th>Staff ID</th>
        <th>Staff Name</th>
        <th>Staff Role</th>
        <th>Sex</th>
        <th>Address</th>
        <th>Salary</th>
        <th>Phone</th>
        <th>Age</th>
        <th>Branch</th>
        </tr>
        <center>";

        while( $row = mysqli_fetch_array( $queryForTrack) )
        {

                echo "<tr>";
                echo "<td>" . $row['s_id'] . "</td>";
                echo "<td>" . $row['s_name'] . "</td>";
                echo "<td>" . $row['s_role'] . "</td>";
                echo "<td>" . $row['sex'] . "</td>";
                echo "<td>" . $row['address'] . "</td>";
                echo "<td>" . $row['salary'] . "</td>";
                echo "<td>" . $row['phone'] . "</td>";
                echo "<td>" . $row['age'] . "</td>";
                echo "<td>" . $row['sb_id'] . "</td>";
                echo "</tr>";

        }
        echo "</table>";
}

        mysqli_close ( $conn );


?>