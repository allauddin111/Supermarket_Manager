<?php


include "dbconnection.php";
include "addnewstaff.php";

$message="";


$s_id =  $_REQUEST['s_id'];
$s_date = $_REQUEST['s_date']; 
$s_qnty =  $_REQUEST['s_qnty'];
$amount = $_REQUEST['amount']; 
$pm =  $_REQUEST['pm'];
$st =  $_REQUEST['st'];
$sid = $_REQUEST['sid']; 
$sp_id =  $_REQUEST['sp_id'];
$p_id =  $_REQUEST['p_id'];

$ds =  $_REQUEST['ds'];

$p_id2 =  $_REQUEST['p_id2'];
$s_qnty2 =  $_REQUEST['s_qnty2'];
$amount2 = $_REQUEST['amount2']; 

$p_id3 =  $_REQUEST['p_id3'];
$s_qnty3 =  $_REQUEST['s_qnty3'];
$amount3= $_REQUEST['amount3']; 

$p_id4 =  $_REQUEST['p_id4'];
$s_qnty4 =  $_REQUEST['s_qnty4'];
$amount4 = $_REQUEST['amount4']; 

$p_id5 =  $_REQUEST['p_id5'];
$s_qnty5 =  $_REQUEST['s_qnty5'];
$amount5 = $_REQUEST['amount5']; 

$amount11=$amount+$amount2+$amount3+$amount4+$amount5;
$amountad=$amount11*$ds/100;
$total=$amount11-$amountad+$amount11*18/100;
$per_p=$amount/$s_qnty;


if(count($_POST)>0) {
    $sql = "INSERT INTO sale VALUES('$s_id','$s_date',$s_qnty,$amount,'$pm','$st',$sid,'$sp_id','$p_id','$p_id2',$s_qnty2,$amount2,'$p_id3',$s_qnty3,$amount3,'$p_id4',$s_qnty4,$amount4,'$p_id5',$s_qnty5,$amount5,$amountad);";
    // $sql .="select p_qty from products where ";
    $sql .= "update products set p_qty=p_qty-$s_qnty where p_id='$p_id '; ";
    $sql .= "update products set p_qty=p_qty-$s_qnty2 where p_id='$p_id2 '; ";
    $sql .= "update products set p_qty=p_qty-$s_qnty3 where p_id='$p_id3 '; ";
    $sql .= "update products set p_qty=p_qty-$s_qnty4 where p_id='$p_id4 '; ";
    $sql .= "update products set p_qty=p_qty-$s_qnty5 where p_id='$p_id5 ' ";
    if ($conn -> multi_query($sql)) {

        if($amount!=0 && $amount2==0 && $amount3==0 && $amount4==0 && $amount5==0 ){

            echo "<!DOCTYPE html>
            <html>
                <head>
                    <meta charset='utf-8' />
                    <title>Bill</title>
            
                    <style>
                        .invoice-box {
                            max-width: 800px;
                            margin: auto;
                            padding: 30px;
                            border: 1px solid #eee;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                            font-size: 16px;
                            line-height: 24px;
                            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            color: #555;
                        }
            
                        .invoice-box table {
                            width: 100%;
                            line-height: inherit;
                            text-align: left;
                        }
            
                        .invoice-box table td {
                            padding: 5px;
                            vertical-align: top;
                        }
            
                        .invoice-box table tr td:nth-child(2) {
                            text-align: right;
                        }
            
                        .invoice-box table tr.top table td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.top table td.title {
                            font-size: 45px;
                            line-height: 45px;
                            color: #333;
                        }
            
                        .invoice-box table tr.information table td {
                            padding-bottom: 40px;
                        }
            
                        .invoice-box table tr.heading td {
                            background: #eee;
                            border-bottom: 1px solid #ddd;
                            font-weight: bold;
                        }
            
                        .invoice-box table tr.details td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.item td {
                            border-bottom: 1px solid #eee;
                        }
            
                        .invoice-box table tr.item.last td {
                            border-bottom: none;
                        }
            
                        .invoice-box table tr.total td:nth-child(2) {
                            border-top: 2px solid #eee;
                            font-weight: bold;
                        }
            
                        @media only screen and (max-width: 600px) {
                            .invoice-box table tr.top table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
            
                            .invoice-box table tr.information table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
                        }
            
                        /** RTL **
                        .invoice-box.rtl {
                            direction: rtl;
                            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                        }
            
                        .invoice-box.rtl table {
                            text-align: right;
                        }
            
                        .invoice-box.rtl table tr td:nth-child(2) {
                            text-align: left;
                        }
                    </style>
                </head>
            
                <body>
                    <div class='invoice-box'>
                        <table cellpadding='0' cellspacing='0'>
                            <tr class='top'>
                                <td colspan='2'>
                                    <table>
                                        <tr>
                                            <td class='title'>
                                                <h6>SuperMarket</h6>
                                            </td>
            
                                            <td>
                                                Invoice #: $s_id<br />
                                                Created: $s_date<br />
                                        
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
            
                
            
                            <tr class='heading'>
                                <td>Payment Method</td>
            
                                <td>Pay Done</td>
                            </tr>
            
                            <tr class='details'>
                                <td>$pm</td>
            
                                <td>Yes</td>
                            </tr>
            
                            <tr class='heading'>
                                <td>Product ID</td>
                                <td>Quantity</td>
                                <td>Per Piece</td>
                                <td>Total Price</td>
                            </tr>
    
                           
                            <tr class='item'>
                                <td>$p_id</td>
                                <td>$s_qnty</td>
                                <td>$per_p</td>
                        
                                <td>$amount</td>
                            </tr>
            
                        
                            <tr class='total'>
                            <td></td>
                            <td>Discount: $amountad</td>
                           
                        </tr>
                            <tr class='total'>
                                <td></td>
                                <td>Total (inclusive 18% tax): $total</td>
                            </tr>
                        </table>
                    </div>
                </body>
            </html>";
        }
        if($amount!=0 && $amount2!=0 && $amount3==0 && $amount4==0 && $amount5==0 ){
            $per_p2=$amount2/$s_qnty2;


            echo "<!DOCTYPE html>
            <html>
                <head>
                    <meta charset='utf-8' />
                    <title>Bill</title>
            
                    <style>
                        .invoice-box {
                            max-width: 800px;
                            margin: auto;
                            padding: 30px;
                            border: 1px solid #eee;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                            font-size: 16px;
                            line-height: 24px;
                            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            color: #555;
                        }
            
                        .invoice-box table {
                            width: 100%;
                            line-height: inherit;
                            text-align: left;
                        }
            
                        .invoice-box table td {
                            padding: 5px;
                            vertical-align: top;
                        }
            
                        .invoice-box table tr td:nth-child(2) {
                            text-align: right;
                        }
            
                        .invoice-box table tr.top table td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.top table td.title {
                            font-size: 45px;
                            line-height: 45px;
                            color: #333;
                        }
            
                        .invoice-box table tr.information table td {
                            padding-bottom: 40px;
                        }
            
                        .invoice-box table tr.heading td {
                            background: #eee;
                            border-bottom: 1px solid #ddd;
                            font-weight: bold;
                        }
            
                        .invoice-box table tr.details td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.item td {
                            border-bottom: 1px solid #eee;
                        }
            
                        .invoice-box table tr.item.last td {
                            border-bottom: none;
                        }
            
                        .invoice-box table tr.total td:nth-child(2) {
                            border-top: 2px solid #eee;
                            font-weight: bold;
                        }
            
                        @media only screen and (max-width: 600px) {
                            .invoice-box table tr.top table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
            
                            .invoice-box table tr.information table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
                        }
            
                        /** RTL **
                        .invoice-box.rtl {
                            direction: rtl;
                            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                        }
            
                        .invoice-box.rtl table {
                            text-align: right;
                        }
            
                        .invoice-box.rtl table tr td:nth-child(2) {
                            text-align: left;
                        }
                    </style>
                </head>
            
                <body>
                    <div class='invoice-box'>
                        <table cellpadding='0' cellspacing='0'>
                            <tr class='top'>
                                <td colspan='2'>
                                    <table>
                                        <tr>
                                            <td class='title'>
                                                <h6>SuperMarket</h6>
                                            </td>
            
                                            <td>
                                                Invoice #: $s_id<br />
                                                Created: $s_date<br />
                                        
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
            
                
            
                            <tr class='heading'>
                                <td>Payment Method</td>
            
                                <td>Pay Done</td>
                            </tr>
            
                            <tr class='details'>
                                <td>$pm</td>
            
                                <td>Yes</td>
                            </tr>
            
                            <tr class='heading'>
                                <td>Product ID</td>
                                <td>Quantity</td>
                                <td>Per Piece</td>
                                <td>Total Price</td>
                            </tr>
    
                           
                            <tr class='item'>
                                <td>$p_id</td>
                                <td>$s_qnty</td>
                                <td>$per_p</td>
                        
                                <td>$amount</td>
                            </tr>
                            <tr class='item'>
                                <td>$p_id2</td>
                                <td>$s_qnty2</td>
                                <td>$per_p2</td>
                        
                                <td>$amount2</td>
                            </tr>
            
                            <tr class='total'>
                            <td></td>
                            <td>Discount: $amountad</td>
                           
                        </tr>
            
                            <tr class='total'>
                                <td></td>
                                <td>Total (inclusive 18% tax): $total</td>
                            </tr>
                        </table>
                    </div>
                </body>
            </html>";
        }
    
        if($amount!=0 && $amount2!=0 && $amount3!=0 && $amount4==0 && $amount5==0 ){
            $per_p2=$amount3/$s_qnty2;
            $per_p3=$amount3/$s_qnty3;
            
            echo "<!DOCTYPE html>
            <html>
                <head>
                    <meta charset='utf-8' />
                    <title>Bill</title>
            
                    <style>
                        .invoice-box {
                            max-width: 800px;
                            margin: auto;
                            padding: 30px;
                            border: 1px solid #eee;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                            font-size: 16px;
                            line-height: 24px;
                            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            color: #555;
                        }
            
                        .invoice-box table {
                            width: 100%;
                            line-height: inherit;
                            text-align: left;
                        }
            
                        .invoice-box table td {
                            padding: 5px;
                            vertical-align: top;
                        }
            
                        .invoice-box table tr td:nth-child(2) {
                            text-align: right;
                        }
            
                        .invoice-box table tr.top table td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.top table td.title {
                            font-size: 45px;
                            line-height: 45px;
                            color: #333;
                        }
            
                        .invoice-box table tr.information table td {
                            padding-bottom: 40px;
                        }
            
                        .invoice-box table tr.heading td {
                            background: #eee;
                            border-bottom: 1px solid #ddd;
                            font-weight: bold;
                        }
            
                        .invoice-box table tr.details td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.item td {
                            border-bottom: 1px solid #eee;
                        }
            
                        .invoice-box table tr.item.last td {
                            border-bottom: none;
                        }
            
                        .invoice-box table tr.total td:nth-child(2) {
                            border-top: 2px solid #eee;
                            font-weight: bold;
                        }
            
                        @media only screen and (max-width: 600px) {
                            .invoice-box table tr.top table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
            
                            .invoice-box table tr.information table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
                        }
            
                        /** RTL **
                        .invoice-box.rtl {
                            direction: rtl;
                            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                        }
            
                        .invoice-box.rtl table {
                            text-align: right;
                        }
            
                        .invoice-box.rtl table tr td:nth-child(2) {
                            text-align: left;
                        }
                    </style>
                </head>
            
                <body>
                    <div class='invoice-box'>
                        <table cellpadding='0' cellspacing='0'>
                            <tr class='top'>
                                <td colspan='2'>
                                    <table>
                                        <tr>
                                            <td class='title'>
                                                <h6>SuperMarket</h6>
                                            </td>
            
                                            <td>
                                                Invoice #: $s_id<br />
                                                Created: $s_date<br />
                                        
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
            
                
            
                            <tr class='heading'>
                                <td>Payment Method</td>
            
                                <td>Pay Done</td>
                            </tr>
            
                            <tr class='details'>
                                <td>$pm</td>
            
                                <td>Yes</td>
                            </tr>
            
                            <tr class='heading'>
                                <td>Product ID</td>
                                <td>Quantity</td>
                                <td>Per Piece</td>
                                <td>Total Price</td>
                            </tr>
    
                           
                            <tr class='item'>
                                <td>$p_id</td>
                                <td>$s_qnty</td>
                                <td>$per_p</td>
                        
                                <td>$amount</td>
                            </tr>
                            <tr class='item'>
                                <td>$p_id2</td>
                                <td>$s_qnty2</td>
                                <td>$per_p2</td>
                        
                                <td>$amount2</td>
                            </tr>
                            <tr class='item'>
                            <td>$p_id3</td>
                            <td>$s_qnty3</td>
                            <td>$per_p3</td>
                    
                            <td>$amount3</td>
                        </tr>
                        <tr class='total'>
                        <td></td>
                        <td>Discount: $amountad</td>
                       
                    </tr>
                        
            
                            <tr class='total'>
                                <td></td>
                                <td>Total (inclusive 18% tax): $total</td>
                            </tr>
                        </table>
                    </div>
                </body>
            </html>";
        }
        if($amount!=0 && $amount2!=0 && $amount3!=0 && $amount4!=0 && $amount5==0 ){
            $per_p2=$amount2/$s_qnty2;
            $per_p3=$amount3/$s_qnty3;
            $per_p4=$amount4/$s_qnty4;


            echo "<!DOCTYPE html>
            <html>
                <head>
                    <meta charset='utf-8' />
                    <title>Bill</title>
            
                    <style>
                        .invoice-box {
                            max-width: 800px;
                            margin: auto;
                            padding: 30px;
                            border: 1px solid #eee;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                            font-size: 16px;
                            line-height: 24px;
                            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            color: #555;
                        }
            
                        .invoice-box table {
                            width: 100%;
                            line-height: inherit;
                            text-align: left;
                        }
            
                        .invoice-box table td {
                            padding: 5px;
                            vertical-align: top;
                        }
            
                        .invoice-box table tr td:nth-child(2) {
                            text-align: right;
                        }
            
                        .invoice-box table tr.top table td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.top table td.title {
                            font-size: 45px;
                            line-height: 45px;
                            color: #333;
                        }
            
                        .invoice-box table tr.information table td {
                            padding-bottom: 40px;
                        }
            
                        .invoice-box table tr.heading td {
                            background: #eee;
                            border-bottom: 1px solid #ddd;
                            font-weight: bold;
                        }
            
                        .invoice-box table tr.details td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.item td {
                            border-bottom: 1px solid #eee;
                        }
            
                        .invoice-box table tr.item.last td {
                            border-bottom: none;
                        }
            
                        .invoice-box table tr.total td:nth-child(2) {
                            border-top: 2px solid #eee;
                            font-weight: bold;
                        }
            
                        @media only screen and (max-width: 600px) {
                            .invoice-box table tr.top table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
            
                            .invoice-box table tr.information table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
                        }
            
                        /** RTL **
                        .invoice-box.rtl {
                            direction: rtl;
                            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                        }
            
                        .invoice-box.rtl table {
                            text-align: right;
                        }
            
                        .invoice-box.rtl table tr td:nth-child(2) {
                            text-align: left;
                        }
                    </style>
                </head>
            
                <body>
                    <div class='invoice-box'>
                        <table cellpadding='0' cellspacing='0'>
                            <tr class='top'>
                                <td colspan='2'>
                                    <table>
                                        <tr>
                                            <td class='title'>
                                                <h6>SuperMarket</h6>
                                            </td>
            
                                            <td>
                                                Invoice #: $s_id<br />
                                                Created: $s_date<br />
                                        
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
            
                
            
                            <tr class='heading'>
                                <td>Payment Method</td>
            
                                <td>Pay Done</td>
                            </tr>
            
                            <tr class='details'>
                                <td>$pm</td>
            
                                <td>Yes</td>
                            </tr>
            
                            <tr class='heading'>
                                <td>Product ID</td>
                                <td>Quantity</td>
                                <td>Per Piece</td>
                                <td>Total Price</td>
                            </tr>
    
                           
                            <tr class='item'>
                                <td>$p_id</td>
                                <td>$s_qnty</td>
                                <td>$per_p</td>
                        
                                <td>$amount</td>
                            </tr>
                            <tr class='item'>
                                <td>$p_id2</td>
                                <td>$s_qnty2</td>
                                <td>$per_p2</td>
                        
                                <td>$amount2</td>
                            </tr>
                            <tr class='item'>
                            <td>$p_id3</td>
                            <td>$s_qnty3</td>
                            <td>$per_p3</td>
                    
                            <td>$amount</td>
                        </tr>
                        <tr class='item'>
                            <td>$p_id4</td>
                            <td>$s_qnty4</td>
                            <td>$per_p4</td>
                    
                            <td>$amount4</td>
                        </tr>
                        
                        <tr class='total'>
                        <td></td>
                        <td>Discount: $amountad</td>
                       
                    </tr>
                            <tr class='total'>
                                <td></td>
                            
                                <td>Total (inclusive 18% tax): $total</td>
                            </tr>
                        </table>
                    </div>
                </body>
            </html>";
        }
    
        if($amount!=0 && $amount2!=0 && $amount3!=0 && $amount4!=0 && $amount5!=0 ){
            $per_p5=$amount5/$s_qnty5;
            $per_p2=$amount3/$s_qnty2;
            $per_p3=$amount3/$s_qnty3;
            $per_p4=$amount4/$s_qnty4;

            echo "<!DOCTYPE html>
            <html>
                <head>
                    <meta charset='utf-8' />
                    <title>Bill</title>
            
                    <style>
                        .invoice-box {
                            max-width: 800px;
                            margin: auto;
                            padding: 30px;
                            border: 1px solid #eee;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
                            font-size: 16px;
                            line-height: 24px;
                            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                            color: #555;
                        }
            
                        .invoice-box table {
                            width: 100%;
                            line-height: inherit;
                            text-align: left;
                        }
            
                        .invoice-box table td {
                            padding: 5px;
                            vertical-align: top;
                        }
            
                        .invoice-box table tr td:nth-child(2) {
                            text-align: right;
                        }
            
                        .invoice-box table tr.top table td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.top table td.title {
                            font-size: 45px;
                            line-height: 45px;
                            color: #333;
                        }
            
                        .invoice-box table tr.information table td {
                            padding-bottom: 40px;
                        }
            
                        .invoice-box table tr.heading td {
                            background: #eee;
                            border-bottom: 1px solid #ddd;
                            font-weight: bold;
                        }
            
                        .invoice-box table tr.details td {
                            padding-bottom: 20px;
                        }
            
                        .invoice-box table tr.item td {
                            border-bottom: 1px solid #eee;
                        }
            
                        .invoice-box table tr.item.last td {
                            border-bottom: none;
                        }
            
                        .invoice-box table tr.total td:nth-child(2) {
                            border-top: 2px solid #eee;
                            font-weight: bold;
                        }
            
                        @media only screen and (max-width: 600px) {
                            .invoice-box table tr.top table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
            
                            .invoice-box table tr.information table td {
                                width: 100%;
                                display: block;
                                text-align: center;
                            }
                        }
            
                        /** RTL **
                        .invoice-box.rtl {
                            direction: rtl;
                            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
                        }
            
                        .invoice-box.rtl table {
                            text-align: right;
                        }
            
                        .invoice-box.rtl table tr td:nth-child(2) {
                            text-align: left;
                        }
                    </style>
                </head>
            
                <body>
                    <div class='invoice-box'>
                        <table cellpadding='0' cellspacing='0'>
                            <tr class='top'>
                                <td colspan='2'>
                                    <table>
                                        <tr>
                                            <td class='title'>
                                                <h6>SuperMarket</h6>
                                            </td>
            
                                            <td>
                                                Invoice #: $s_id<br />
                                                Created: $s_date<br />
                                        
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
            
                
            
                            <tr class='heading'>
                                <td>Payment Method</td>
            
                                <td>Pay Done</td>
                            </tr>
            
                            <tr class='details'>
                                <td>$pm</td>
            
                                <td>Yes</td>
                            </tr>
            
                            <tr class='heading'>
                                <td>Product ID</td>
                                <td>Quantity</td>
                                <td>Per Piece</td>
                                <td>Total Price</td>
                            </tr>
    
                           
                            <tr class='item'>
                                <td>$p_id</td>
                                <td>$s_qnty</td>
                                <td>$per_p</td>
                        
                                <td>$amount</td>
                            </tr>
                            <tr class='item'>
                                <td>$p_id2</td>
                                <td>$s_qnty2</td>
                                <td>$per_p2</td>
                        
                                <td>$amount2</td>
                            </tr>
                            <tr class='item'>
                            <td>$p_id3</td>
                            <td>$s_qnty3</td>
                            <td>$per_p3</td>
                    
                            <td>$amount3</td>
                        </tr>
                        <tr class='item'>
                            <td>$p_id4</td>
                            <td>$s_qnty4</td>
                            <td>$per_p4</td>
                    
                            <td>$amount4</td>
                        </tr>
                        <tr class='item'>
                        <td>$p_id5</td>
                        <td>$s_qnty5</td>
                        <td>$per_p5</td>
                
                        <td>$amount5</td>
                    </tr>
                   
            
                        
                    <tr class='total'>
                    <td></td>
                    <td>Discount: $amountad</td>
                   
                </tr>
                            <tr class='total'>
                                <td></td>
                               
                                <td>Total (inclusive 18% tax): $total</td>
                            </tr>
                        </table>
                    </div>
                </body>
            </html>";
        }
    
    
    } else {
    echo "Error: ";
}
        }
?>
