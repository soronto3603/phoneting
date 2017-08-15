<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Table Style</title>
  <link rel="stylesheet" href="css/datatable.css">
</head>

<body>
	<div class="table-title">
		<h3>게시물</h3>
	</div>
	<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  <!-- Custom File Uploader  -->
  <center>
    <img class=img id=img1 align=middle>
    <form name="upload-form" action="upload.php" method="post" enctype="multipart/form-data">
      <input type="hidden" name="MAX_FILE_SIZE" value="25242880"/>
      <input type="file" name="upload" id="upload"/>
      <input type="hidden" name="no" value="1"/>
      <input type="title" name="title" placeholder="큰 글"/>
      <input type="text" name="text" placeholder="상세설명"/>
      <input type="phone" name="phone" placeholder="전화번호"/>
      <input type=submit value='업로드' class=btn>
    </form>
  </center>
	<div id=contents>

  </div>
	<script>
		function get_phoneting_data(){

			$.post("../query/select_contents.php").done(function(r){
				var content="<table><th>이미지</th><th>제목</th><th>내용</th><th>번호</th><th>삭제</th>";
		    var obj=JSON.parse(r);
		    for(var i=0;i<obj.length;i++){
		      var line="<tr>";
					line+="<td><img src='../girl_photos/"+obj[i].uri+"'></td>";
					line+="<td>"+obj[i].title+"</td>";
					line+="<td>"+obj[i].text+"</td>";
					line+="<td>"+obj[i].phone+"</td><td><button onclick='del_content(\""+obj[i].no+"\")'>삭제</button></td></tr>";
					content+=line;
		    }
				content+="</table>";
				document.getElementById('contents').innerHTML=content;
		  });
		  fixed=fixed+2;
		}
		window.onload=function(){
			get_phoneting_data();
		}
		function del_content(no){
			$.get("../query/delete_content.php",{no:no}).done(function(data){
				alert("성공적으로 삭제되었습니다.");
				location.reload();
			});
		}
	</script>
</body>
