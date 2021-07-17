<?php


include "dbconnection.php";
include "edit.php";

$message="";

   

$s_id =  $_REQUEST['s_id'];
$s_name = $_REQUEST['s_name']; 
$add =  $_REQUEST['add'];
$con = $_REQUEST['con']; 
$balto =  $_REQUEST['balto'];
$balfro =  $_REQUEST['balfro'];


if(count($_POST)>0) {
    $sqlquery = "update supplier set sup_name='$s_name',sup_address='$add',sup_contact='$con',bal_to=$balto,bal_from=$balfro where sup_id='$s_id'";
  if ($conn->query($sqlquery) === TRUE) {
    header('Location: ans.php');
} else {
    echo "Error: ";
}
        }
?>
