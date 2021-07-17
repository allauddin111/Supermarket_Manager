
<html>
<head>
	<title>Managing Market Actions</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body>

<div class="topnav">

  <a href="snp.php">Add new Supplier</a>
  
  <a href="snpe.php">Edit Supplier</a>
  <a href="logout.php">Logout from the current session</a>
</div><br/>
 

</body>
</html>

<?php

include "dbconnection.php";
include "adminlogin.php";


$bid=$_SESSION['brid'];


$sqlForTrack ="SELECT * FROM supplier ";
$queryForTrack = mysqli_query( $conn, $sqlForTrack );

/* Handle sql errors if retuned */
if( $queryForTrack === false )
{
        echo "ewrweWSSSSSSS";
}

/* Handle sql response for track data */
if( mysqli_num_fields( $queryForTrack ) )
{
        
        echo "<center><h1>Supplier List</h1><table border='10'>
        <tr>
        <th>Supplier ID</th>
        <th>Supplier  Name</th>
        <th>Supplier Address</th>
        <th>Supplier Contact</th>
        
        <th>Balance to Supplier</th>
        <th>Balance from Supplier</th>
 
        </tr>
        <center>";

        while( $row = mysqli_fetch_array( $queryForTrack) )
        {

                echo "<tr>";
                
                echo "<td>" . $row[0] . "</td>";
                echo "<td>" . $row[1] . "</td>";
                
                echo "<td>" . $row[2] . "</td>";
                
                echo "<td>" . $row[3] . "</td>";
                echo "<td>" . $row[4] . "</td>";
                echo "<td>" . $row[5] . "</td>";
                
               
                
                echo "</tr>";

        }
        echo "</table>";
}

        mysqli_close ( $conn );


?>