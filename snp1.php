<?php


include "dbconnection.php";


$message="";


$s_id =  $_REQUEST['s_id'];
$s_name = $_REQUEST['s_name']; 
$add =  $_REQUEST['add'];
$con = $_REQUEST['con']; 
$balto =  $_REQUEST['balto'];
$balfro =  $_REQUEST['balfro'];


if(count($_POST)>0) {
    $sqlquery = "INSERT INTO supplier VALUES('$s_id','$s_name','$add',$con,$balto,$balfro)";
  if ($conn->query($sqlquery) === TRUE) {
    header('Location: ans.php');
} else {
    echo "Error: ";
}
        }
?>
