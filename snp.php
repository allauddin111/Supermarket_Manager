<!DOCTYPE html>
<html>
<head>
  <title>Add New Staffs</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body bgcolor="yellow" >
                            <center>
                                <h1>Add New Supplier</h1>
                            <div class="cont">
                            <form action="snp1.php" method="post">
                         
            
                              <label for="s_id">supplier Id:</label>
                             <input type="text" name="s_id" id="s_id">
                             </p>
                               <p>
                              <label for="s_name">supplier Name</label>
                             <input type="text" name="s_name" id="s_name">
                              </p>
                              <label for="add">Address</label>
                               <input type="text" name="add" id="add">
                             </p>
                             <label for="con">supplier Conatct</label>
                               <input type="number" min="1000000000" max="9999999999" name="con" id="con">
                             </p>
                              <p>
                             <label for="balto">Balance to supplier:</label>
                            <input type="number" name="balto" id="balto">
                            </p>
                           <label for="balfro">Balance from supplier</label>
                            <input type="number" name="balfro" id="balfro">
                             </p>
                

                             <input type="submit" value="Add Supplier">
                                                  </form>
</div>
</center>
</body>
</html>



