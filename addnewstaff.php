<!DOCTYPE html>
<html>
<head>
  <title>Add New Staffs</title>
</head>
<link rel="stylesheet" href="manage1.css">
<body bgcolor="yellow" >
                            <center>
                                <h1>Add New Staff</h1>
                            <div class="cont">
                            <form action="ads.php" method="post">
                           <label for="s_id">Staff Id:</label>
                            <input type="text" name="s_id" id="s_id">
                    
                              <p>
                            <label for="password">Password</label>
                          <input type="password" min="111111" max="99999999999" name="password" id="password">
                              </p>
                              <label for="s_name">Staff Name:</label>
                             <input type="text" name="s_name" id="s_name">
                             </p>
                               <p>
                              <label for="s_role">Staff Role</label>
                             <input type="text" name="s_role" id="s_role">
                              </p>
                              <label for="sex">Sex:</label>
                               
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
                            <label for="sb_id">Branch No</label>
                          <input type="text" name="b_id" id="b_id">
                            </p>

                             <input type="submit" value="Add Staff">
                                                  </form>
</div>
</center>
</body>
</html>



