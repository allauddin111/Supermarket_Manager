
<html>
<head>
	<title>Managing Market Actions</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body>

<div class="topnav">

  <a href="mp.php">Manage PRODUCTS </a>
  
  <a href="ans.php">Manage Suppliers</a>
  <a href="logout.php">Logout from the current session</a>
</div><br/>
 

</body>
</html>

<?php

include "dbconnection.php";
include "adminlogin.php";


$bid=$_SESSION['brid'];


$sqlForTrack ="SELECT * FROM supplier s,products p where s.sup_id=p.sup_id";
$queryForTrack = mysqli_query( $conn, $sqlForTrack );

/* Handle sql errors if retuned */
if( $queryForTrack === false )
{
        echo "ewrweWSSSSSSS";
}

/* Handle sql response for track data */
if( mysqli_num_fields( $queryForTrack ) )
{
        
        echo "<center><h1>Products and Supplier Details</h1><table border='10'>
        <tr>
        <th>Product ID</th>
        <th>Product  Name</th>
        <th>Supplier NAme</th>
        <th>Available Stock</th>
        <th>Price per piece</th>
        <th>Price_category</th>
        <th>Manufacture</th>
        <th>Expiry</th>

        <th>SupplierAddress</th>
        <th>Supplier Contact</th>
        <th>Balance from supplier</th>
        <th>Balance to supplier</th>
        </tr>
        <center>";

        while( $row = mysqli_fetch_array( $queryForTrack) )
        {

                echo "<tr>";
                
                echo "<td>" . $row[6] . "</td>";
                echo "<td>" . $row[7] . "</td>";
                
                echo "<td>" . $row[1] . "</td>";
                
                echo "<td>" . $row[8] . "</td>";
                echo "<td>" . $row[9] . "</td>";
                echo "<td>" . $row[10] . "</td>";
                echo "<td>" . $row[12] . "</td>";
                echo "<td>" . $row[11] . "</td>";
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