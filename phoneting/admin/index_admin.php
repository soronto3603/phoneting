<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<script src="js/modernizr.custom.js"></script>
		<script src="js/index.js"></script>
		<link rel="stylesheet" href="css/modernizr.custom.css">
	</head>
	<body class="">

		<div class="container">
    <div class="breadcrumbs">
			<ul class="social">
        <li><span>V 1.0 |</span></li>
			</ul>
		</div>
			<header class="clearfix">
				<span>Admin Page</span>
				<h1>관리자 페이지</h1>
			</header> <!--End Header -->
			<ul class="tl-menu">
				<li style="    margin-top: 100px;"></li>
				<li><a href="#" class="icon-check" id="navItem1" onclick="frameInsert('content.php')">게시글 관리</a></li>
				<li><a href="#" class="icon-check" id="navItem2" onclick="frameInsert('ad.php')">광고 관리</a></li>
			</ul>
			<div class="main">
				<iframe id=main-frame></iframe>
			</div> <!--End Main -->
		</div> <!--End Containter -->
	</body>
</html>
