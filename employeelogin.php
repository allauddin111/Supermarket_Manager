<!DOCTYPE html>
<html>

<head>
    <title>
        DJ TrCKS
    </title>
</head>
<link rel="stylesheet" href="profile.css">
<body bgcolor='pink'>

<?php


include "dbconnection.php";


$message="";

if(count($_POST)>0) {
	$result = mysqli_query($conn,"SELECT * FROM staffs WHERE s_id='".$_POST['username']."' and passwords='".$_POST['password']."' and  s_role NOT LIKE 'Admin'");
	$count  = mysqli_num_rows($result);
	

	if($count==0) {
		if($_POST['username']==null && $_POST['password']!=null){
			$message = "Name is Required Field";
			echo "<center><h1>$message</h1></center>";}
			if($_POST['password']==null && $_POST['username']!=null){
				$message = "Password is Required Field";
				echo "<center><h1>$message</h1></center>";}
				if($_POST['username']==null && $_POST['password']==null){
					$message = "Name and Password are Required Field";
					echo "<center><h1>$message</h1></center>";}
		
	} else {
		echo "$message";
		$result1 = mysqli_query($conn,"SELECT * FROM staffs WHERE s_id='".$_POST['username']."' and passwords='".$_POST['password']."'  s_role NOT LIKE 'Admin'");
	
		while ($row1 = mysqli_fetch_array($result)) {
			echo "<div class='card'>";
        echo "<h1>$row1[2]</h1>";
		echo "<h1>Employee  ID : $row1[0]</h1>";
     echo "<p class='title'>You are a $row1[3]</p>";
	 echo "<p>You work for Branch $row1[9]</p>";
	 	 echo "<p>KLE Supermarket</p>";
     echo "<p>SEX : $row1[4]</p>";
	 echo "<p>You live in City $row1[5]</p>";
	 echo "<a href='logout.php'>";
	echo "<p><button>Log Out from Session</button></p>";
	echo "</a>";
	echo "<a href='empmanage.php'>";
	echo "<p><button>Manage Market Actions</button></p>";
	echo "</a>";
     echo "</div>";

	 $branchid=$row1[8];
	
			}
	}
	
	
		
		// header('Location: ad_profile.php'); 
	}

?>

</body>
</html>
