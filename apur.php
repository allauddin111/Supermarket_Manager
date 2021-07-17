<!DOCTYPE html>
<html>
<head>
  <title>Add New Staffs</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body bgcolor="yellow" >
                            <center>
                                <h1>Add New Purchase</h1>
                            <div class="cont">
                            <form action="apur1.php" method="post">
                         
            
                              <label for="s_id">PurchaseId:</label>
                             <input type="text" name="s_id" id="s_id">
                             </p>
                               <p>
                              <label for="s_date">Purchase Date</label>
                             <input type="date" name="s_date" id="s_date">
                              </p>
                              <label for="s_qnty">Quantity</label>
                               <input type="number" name="s_qnty" id="p_qnty">
                             </p>
                             <label for="amount">Total Amount</label>
                               <input type="number" name="amount" id="amount">
                             </p>
                          
                           <label for="st">Purchase time</label>
                            <input type="time" name="st" id="st">
                             </p>
                           <p>
                           <label for="sid">Staff Id</label>
                          <input type="text" name="sid" id="sid">
                            </p>
                        
                            <label for="p_id">Product Id</label>
                          <input type="text" name="p_id" id="p_id">
                            </p>

                             <input type="submit" value="Add Purchase">
                                                  </form><br/><a href="mp.php"><button>View Existing Products</button></a>

                                <a href="product.php"><button>Add new Product</button></a>

</div>
</center>
</body>
</html>



