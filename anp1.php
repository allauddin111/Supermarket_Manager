<?php


include "dbconnection.php";
include "addnewstaff.php";

$message="";


$p_id =  $_REQUEST['p_id'];
$p_name = $_REQUEST['p_name']; 
$p_qnty =  $_REQUEST['p_qnty'];
$category = $_REQUEST['category']; 
$man =  $_REQUEST['man'];
$p_price =  $_REQUEST['p_price'];
$exp = $_REQUEST['exp']; 
$sp_id =  $_REQUEST['sp_id'];

if(count($_POST)>0) {
    $sqlquery = "INSERT INTO products VALUES('$p_id','$p_name','$p_qnty',$p_price,'$category','$exp','$man','$sp_id')";
  if ($conn->query($sqlquery) === TRUE) {
    header('Location: mp.php');
} else {
    echo "Error: ";
}
        }
?>
