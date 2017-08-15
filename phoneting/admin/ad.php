<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Table Style</title>
  <link rel="stylesheet" href="css/datatable.css">
</head>

<body>
	<div class="table-title">
		<h3>광고</h3>
	</div>
	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  <!-- Custom File Uploader  -->
  <center>
    <img class=img id=img1 align=middle>
    <form name="upload-form" action="upload2.php" method="post" enctype="multipart/form-data">
      <input type="hidden" name="MAX_FILE_SIZE" value="25242880"/>
      <input type="file" name="upload" id="upload"/>
      <input type="hidden" name="no" value="1"/>
      <input type="url" name="url" placeholder="이동 URL"/>
      <input type=submit value='업로드' class=btn>
    </form>
  </center>
	<div id=contents>

  </div>
	<script>
		function get_phoneting_ad(){

			$.post("../query/select_ad.php").done(function(r){
				var content="<table><th>no</th><th>이미지</th><th>URL</th><th>삭제</th>";
		    var obj=JSON.parse(r);
		    for(var i=0;i<obj.length;i++){
		      var line="<tr>";
          line+="<td>"+obj[i].no+"</td>";
					line+="<td><img src='../ad/"+obj[i].img+"'></td>";
					line+="<td>"+obj[i].url+"</td><td><button onclick='del_ad(\""+obj[i].no+"\")'>삭제</button></td></tr>";
					content+=line;
		    }
				content+="</table>";
				document.getElementById('contents').innerHTML=content;
		  });
		}
		window.onload=function(){
			get_phoneting_ad();
		}
		function del_ad(no){
			$.get("../query/delete_ad.php",{no:no}).done(function(data){
				alert("성공적으로 삭제되었습니다.");
				location.reload();
			});
		}
	</script>
</body>
