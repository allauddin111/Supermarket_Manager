<?php


include "dbconnection.php";
include "addnewstaff.php";

$message="";

   
$s_id =  $_REQUEST['s_id'];


$s_name = $_REQUEST['s_name']; 
$passwords =  $_REQUEST['password'];
$s_role = $_REQUEST['s_role']; 
$sex =  $_REQUEST['sex'];
$address = $_REQUEST['address']; 
$phone =  $_REQUEST['phone'];
$age = $_REQUEST['age']; 
$sbid =  $_REQUEST['b_id'];
$salary =  $_REQUEST['salary'];


if(count($_POST)>0) {
    $sqlquery = "INSERT INTO staffs VALUES($s_id,'$passwords','$s_name','$s_role','$sex','$address',$salary,$phone,$age,$sbid)";
    if (ctype_alpha($s_name)) {
    
      if ($conn->query($sqlquery) === TRUE) {
        header('Location: admanstaffs.php');
    } else {
        echo "Error: ";
    }
    } else {
      echo "Enter Proper Name , Dont add any numbers";
    }

        }
?>
