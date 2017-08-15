<?php
  include("dbconnect.php");
  //$target_no=$_GET['target_no'];
  $query="SELECT * FROM phoneting_ad";

  $phoneting_ad=array();
  if($result=mysqli_query($con,$query)){
    while($row=mysqli_fetch_row($result)){
      $temp['no']=$row[0];
      $temp['img']=$row[1];
      $temp['url']=$row[2];
      array_push($phoneting_ad,$temp);
    }
  }
  echo json_encode($phoneting_ad);
?>
