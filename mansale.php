
<html>
<head>
	<title>Managing Market Actions</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body>

<div class="topnav">

  <a href="asale.php">Add new Sale</a>
  
  <a href="logout.php">Logout from the current session</a>
</div><br/>
 

</body>
</html>

<?php

include "dbconnection.php";
include "adminlogin.php";




$sqlForTrack ="SELECT * FROM products p,sale s,staffs ss,customer c where s.s_id=ss.s_id and s.pid=p.p_id and c.cust_id=s.cust_id ";
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
        <th>Sale ID</th>
        <th>Sale  Date</th>
        <th>Product1 ID</th>
        <th>Qnty1</th>
        <th>Sale Amount 1</th>
        <th>Product2 ID</th>
        <th>Qnty2</th>
        <th>Sale Amount 2</th>
        <th>Product3 ID</th>
        <th>Qnty3 </th>
        <th>Sale Amount3</th>
        <th>Product4 ID</th>
        <th>Qnty4</th>
        <th>Sale Amount 4</th>
        <th>Product5 ID</th>
        <th>Qnty5</th>
        <th>Sale Amount 5</th>
        <th>Payment Method</th>
        <th>Discount</th>
        <th>Sale Time</th>
        <th>Customer Id</th>
        <th>Sale Done by </th>
        
        </tr>
        <center>";

        while( $row = mysqli_fetch_array( $queryForTrack) )
        {

                echo "<tr>";
                
                echo "<td>" . $row[8] . "</td>";
                echo "<td>" . $row[9] . "</td>";
                
                echo "<td>" . $row[16] . "</td>";
                
                echo "<td>" . $row[10] . "</td>";
                echo "<td>" . $row[11]. "</td>";
                echo "<td>" . $row[17] . "</td>";
                echo "<td>" . $row[18]. "</td>";
                echo "<td>" . $row[19] . "</td>";
                echo "<td>" . $row[20]. "</td>";
                echo "<td>" . $row[21] . "</td>";
                echo "<td>" . $row[22]. "</td>";
                echo "<td>" . $row[23] . "</td>";
                echo "<td>" . $row[24] . "</td>";
                echo "<td>" . $row[25]  . "</td>";
                echo "<td>" . $row[26]. "</td>";
                echo "<td>" . $row[27]. "</td>";
                echo "<td>" . $row[28]. "</td>";
                echo "<td>" . $row[12] . "</td>";
                echo "<td>" . $row[29]. "</td>";
                echo "<td>" . $row[13]. "</td>";
                echo "<td>" . $row[40] . "</td>";
                echo "<td>" . $row[32]. "</td>";
               
                
                echo "</tr>";

        }
        echo "</table>";
}

        mysqli_close ( $conn );


?>