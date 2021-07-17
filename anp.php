<!DOCTYPE html>
<html>
<head>
  <title>Add New Staffs</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body bgcolor="yellow" >
                            <center>
                                <h1>Add New Product</h1>
                            <div class="cont">
                            <form action="anp1.php" method="post">
                         
            
                              <label for="p_id">Product Id:</label>
                             <input type="text" name="p_id" id="p_id">
                             </p>
                               <p>
                              <label for="p_name">Product Name</label>
                             <input type="text" name="p_name" id="p_name">
                              </p>
                              <label for="p_qnty">Quantity</label>
                               <input type="number" name="p_qnty" id="p_qnty">
                             </p>
                             <label for="p_price">Price</label>
                               <input type="number" name="p_price" id="p_price">
                             </p>
                              <p>
                             <label for="category">Product Category:</label>
                            <input type="text" name="category" id="category">
                            </p>
                           <label for="man">Manufacture</label>
                            <input type="date" name="man" id="man">
                             </p>
                           <p>
                           <label for="exp">Expiry</label>
                          <input type="date" name="exp" id="exp">
                            </p>
                            <label for="sp_id">Supplier Id</label>
                          <input type="text" name="sp_id" id="sp_id">
                            </p>

                             <input type="submit" value="Add Product"></form><br/> <a href="ess.php"><button>View Suppliers</button></a>
</div><br/>
                             <a href="snpp.php"><button>If new Supplier Add Here</button></a>
                                                 
</center>
</body>
</html>



