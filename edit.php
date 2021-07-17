<!DOCTYPE html>
<html>
<head>
  <title>Add New Staffs</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body bgcolor="yellow" >
                            <center>
                                <h1>Edit Staff</h1>
                            <div class="cont">
                            <form action="edit1.php" method="post">
                    
                    
                            <p>
                            <label for="text">Staff Id</label>
                          <input type="text" name="s_d" id="s_d">
                              </p>
                              <p>
                            <label for="password">Password</label>
                          <input type="password" name="password" id="password">
                              </p>
                              <label for="s_name">Staff Name:</label>
                             <input type="text" name="s_name" id="s_name">
                             </p>
                               <p>
                              <label for="s_role">Staff Role</label>
                             <input type="text" name="s_role" id="s_role">
                              </p>
                              <label for="sex">Staff Sex</label>
                              <input type="radio" name="sex" value="Male">Male
  <input type="radio" name="sex" value="Female">Female
  <input type="radio" name="sex" value="Transgender">Transgender
                              <p>
                             <label for="address">Address</label>
                            <input type="text" name="address" id="address">
                            </p>
                            <p>
                             <label for="salary">Salary</label>
                            <input type="number" name="salary" id="salary">
                            </p>
                           <label for="phone">Phone:</label>
                            <input type="number" min="1000000000" max="9999999999" name="phone" id="phone">
                             </p>
                           <p>
                           <label for="age">Age</label>
                          <input type="number" name="age" id="age">
                            </p>


                             <input type="submit" value="Edit Staff">
                                                  </form>
</div>
</center>
</body>
</html>



