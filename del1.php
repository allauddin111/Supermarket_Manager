<?php


include "dbconnection.php";
include "del.php";
session_start();

$message="";

   
$s_id =  $_REQUEST['s_id'];

echo $s_id;
if($s_id!=null){

if(count($_POST)>0) {
    $sqlquery = "DELETE FROM staffs WHERE s_id=$s_id ";
  if ($conn->query($sqlquery) === TRUE) {
    header('Location: admanstaffs.php');
} else {
    echo "
    <center><div class='card'>";
echo "<h1>Cant delete employee with Employee  ID $s_id or he/she doesn't work here</h1>";
echo "</div></center>";
}}

        }else{
          echo "Feild is Required!!!";
        }

        ?>