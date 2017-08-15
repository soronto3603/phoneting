<?php
  include("dbconnect.php");
  $target_no=$_GET['no'];
  $query="DELETE FROM phoneting_contents WHERE no=$target_no";

  mysqli_query($con,$query);

?>
