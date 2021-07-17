<?php


include "dbconnection.php";
include "addnewstaff.php";

$message="";


$s_id =  $_REQUEST['s_id'];
$s_date = $_REQUEST['s_date']; 
$s_qnty =  $_REQUEST['s_qnty'];
$amount = $_REQUEST['amount']; 


if(count($_POST)>0) {
    $sqlquery = "INSERT INTO customer VALUES('$s_id','$s_date','$s_qnty','$amount')";
  if ($conn->query($sqlquery) === TRUE) {
    header('Location: mansale.php');
} else {
    echo "Error: ";
}
        }
?>
