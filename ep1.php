<?php


include "dbconnection.php";
include "edit.php";

$message="";

   

$p_id =  $_REQUEST['p_id'];
$p_name = $_REQUEST['p_name']; 
$p_qnty =  $_REQUEST['p_qnty'];
$category = $_REQUEST['category']; 
$man =  $_REQUEST['man'];
$p_price =  $_REQUEST['p_price'];
$exp = $_REQUEST['exp']; 


if(count($_POST)>0) {
    $sqlquery = "update products set p_name='$p_name',p_qty='$p_qnty',p_price=$p_price,P_EXP_DATE='$exp',P_MANU_DATE='$man' where p_id='$p_id'";
  if ($conn->query($sqlquery) === TRUE) {
    header('Location: mp.php');
} else {
    echo "Error: ";
}
        }
?>
