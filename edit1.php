<?php


include "dbconnection.php";
include "edit.php";

$message="";

   

$s_d =  $_REQUEST['s_d'];
$s_name =  $_REQUEST['s_name'];
$passwords =  $_REQUEST['password'];
$s_role = $_REQUEST['s_role']; 
$sex = $_REQUEST['sex']; 
$address = $_REQUEST['address']; 
$phone =  $_REQUEST['phone'];
$age = $_REQUEST['age']; 
$salary = $_REQUEST['salary']; 

if (ctype_alpha($s_name)) {
if(count($_POST)>0) {
  
    $sqlquery = "update staffs set passwords='$passwords',sex='$sex',s_name='$s_name',address='$address',salary=$salary,phone='$phone',s_role='$s_role',age=$age where s_id=$s_d ";
  if ($conn->query($sqlquery) === TRUE) {
    header('Location: admanstaffs.php');
} else {
    echo "Error: ";
}
        }}
        else {

          echo "Add Proper Name ";
        }
?>
