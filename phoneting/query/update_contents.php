<?php
  include("dbconnect.php");
  //$target_no=$_GET['target_no'];
  $title=$_POST['title'];
  $text=$_POST['text'];
  $phone=$_POST['phone'];
  $no=$_POST['no'];
  $query="UPDATE phoneting_contents SET title='$title', text='$text', phone='$phone' WHERE no=$no ";

  $result=mysqli_query($con,$query);
?>
