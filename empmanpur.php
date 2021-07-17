
<html>
<head>
	<title>Managing Market Actions</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body>

<div class="topnav">

  <a href="epur.php">Add new Purchase</a>
  
  <a href="logout.php">Logout from the current session</a>
</div><br/>
 

</body>
</html>

<?php

include "dbconnection.php";
include "employeelogin.php";



$sqlForTrack ="SELECT * FROM products p,purchase pp,staffs ss,supplier s where pp.p_id=p.p_id and pp.s_id=ss.s_id and p.sup_id=s.sup_id";
$queryForTrack = mysqli_query( $conn, $sqlForTrack );

/* Handle sql errors if retuned */
if( $queryForTrack === false )
{
        echo "ewrweWSSSSSSS";
}

/* Handle sql response for track data */
if( mysqli_num_fields( $queryForTrack ) )
{
        
        echo "<center><h1>Purchase List</h1><table border='10'>
        <tr>
        <th>Purchase ID</th>
        <th>Purchase  Date</th>
        <th>Qnty</th>
        <th>Amount</th>
        
        <th>Purchase Time</th>
    
        <th>Supplier Name</th>
        <th>Purchase Done by </th>
        <th>Product Name</th>
        </tr>
        <center>";

        while( $row = mysqli_fetch_array( $queryForTrack) )
        {

                echo "<tr>";
                
                echo "<td>" . $row[8] . "</td>";
                echo "<td>" . $row[10] . "</td>";
                
                echo "<td>" . $row[9] . "</td>";
                
                echo "<td>" . $row[13] . "</td>";
                echo "<td>" . $row[11]. "</td>";
                echo "<td>" . $row[25] . "</td>";
                echo "<td>" . $row[17] . "</td>";
                echo "<td>" . $row[1]  . "</td>";
           
               
                
                echo "</tr>";

        }
        echo "</table>";
}

        mysqli_close ( $conn );


?>