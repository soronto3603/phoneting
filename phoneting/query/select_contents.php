<?php
  include("dbconnect.php");
  //$target_no=$_GET['target_no'];
  $query="SELECT * FROM phoneting_contents ORDER BY no DESC";
  if($_POST['fixed']!='')$query=$query." LIMIT ".$_POST['fixed'].",".$_POST['count'];

  $phoneting_contents=array();
  if($result=mysqli_query($con,$query)){
    while($row=mysqli_fetch_row($result)){
      $temp['no']=$row[0];
      $temp['title']=$row[1];
      $temp['text']=$row[2];
      $temp['phone']=$row[3];
      $temp['uri']=$row[4];
      array_push($phoneting_contents,$temp);
    }
  }
  echo json_encode($phoneting_contents);
?>
