<?php


include "dbconnection.php";
include "ees.php";

$message="";

session_start();
   
$s_id =  $_REQUEST['s_id'];
$bid=$_SESSION['brid'];
$result = mysqli_query($conn,"SELECT * FROM staffs WHERE s_id=$s_id and sb_id=$bid");
	

if($s_id!=null){
	$count  = mysqli_num_rows($result);
	if($count==0) {
        echo "
        <center><div class='card'>";
    echo "<h1>Employee  ID $s_id does not work here</h1>";
    echo "</div></center>";
		
	} else {
		echo "$message";
		$result1 = mysqli_query($conn,"SELECT * FROM staffs WHERE s_id=$s_id and sb_id=$bid");
		
		while ($row1 = mysqli_fetch_array($result1)) {
			echo "
			<html>

<head>
    <title>
        DJ TrCKS
    </title>
</head>
<link rel='stylesheet' href='profile.css'>
<body>
<center><div class='card'>";
echo "<h1>$row1[2]</h1>";
echo "<h1>Employee  ID : $row1[0]</h1>";
echo "<p class='title'>You are an $row1[3]</p>";

echo "<p>You work for Branch $bid</p>";
echo "<p>KLE Supermarket</p>";
echo "<p>SEX : $row1[4]</p>";
echo "<p>You live in City $row1[5]</p>";
echo "<a href='edit.php'>";
echo "<p><button>Edit Staff</button></p>";
echo "</a>";
echo "</div></center'
</body>
</html>";
	  

	
	
			}
	}}
	else{

		echo "Feild is Required!!!!!!!";
	}
	?>