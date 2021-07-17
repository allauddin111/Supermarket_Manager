<?php


include "dbconnection.php";
include "addnewstaff.php";

$message="";


$s_id =  $_REQUEST['s_id'];
$s_date = $_REQUEST['s_date']; 
$s_qnty =  $_REQUEST['s_qnty'];

$st =  $_REQUEST['st'];
$sid = $_REQUEST['sid']; 
$amount = $_REQUEST['amount']; 
$p_id =  $_REQUEST['p_id'];

if(count($_POST)>0) {
    $sql = "INSERT INTO purchase VALUES('$s_id','$s_qnty','$s_date','$st','$p_id',$amount,$sid);";
    $sql .= "update products set p_qty=p_qty+$s_qnty where p_id='$p_id ' ";
    if ($conn -> multi_query($sql)) {
    
              header('location: manpur.php');
    } else {
    echo "Error: ";
}
        }
?>
