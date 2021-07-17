
<html>
<head>
	<title>Managing Market Actions</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body>



</body>
</html>

<?php

include "dbconnection.php";
include "adminlogin.php";


$sqlForTrack ="SELECT * FROM customer";
$queryForTrack = mysqli_query( $conn, $sqlForTrack );

/* Handle sql errors if retuned */
if( $queryForTrack === false )
{
        echo "ewrweWSSSSSSS";
}

/* Handle sql response for track data */
if( mysqli_num_fields( $queryForTrack ) )
{
        
        echo "<center><h1>Sale List</h1><table border='10'>
        <tr>
        <th>Customer ID</th>
        <th>Customer Name</th>
        <th>Contact No</th>
        <th>Address</th>
        </tr>
        <center>";

        while( $row = mysqli_fetch_array( $queryForTrack) )
        {

                echo "<tr>";
                
                echo "<td>" . $row[0] . "</td>";
                echo "<td>" . $row[1] . "</td>";
                echo "<td>" . $row[2] . "</td>";
                echo "<td>" . $row[3] . "</td>";
               
                
                echo "</tr>";

        }
        echo "</table>";
}

        mysqli_close ( $conn );


?>