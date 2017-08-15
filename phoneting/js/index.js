var fixed=0;
let count=10;
function get_phoneting_data(){
  $.post("./query/select_contents.php",{fixed:fixed,count:count}).done(function(r){
    //alert(r);
    if(r==""){
      //nonedata
      return;
    }
    var obj=JSON.parse(r);
    for(var i=0;i<obj.length;i++){
      var line='<div class="line box_shadow">';
      line+='<div class=line_left>';
      line+='<img src="./girl_photos/';
      line+=obj[i].uri;
      line+='"></div><div class=line_right>';
      line+='<div class="line_left_title line_left_left_margin line_left_right_margin">';
      //title
      line+=obj[i].title;
      line+='</div><div class="line_left_text line_left_left_margin line_left_right_margin">';
      //text
      line+=obj[i].text;
      line+='</div><a href="tel:';
      line+=obj[i].phone;
      line+='"><div class="line_left_button_call line_left_left_margin">전화하기</div></a></div><div class=clear></div></div>';
      document.getElementById('contents').innerHTML+=line;
    }
    fixed=fixed+10;
  });
}
function get_phoneting_ad(){
  $.post("./query/select_ad.php").done(function(r){
    var obj=JSON.parse(r);
    var x=Math.floor((Math.random()*(obj.length))+0);
    var content="<img src='ad/"+obj[x].img+"' onclick='move_ad(\""+obj[x].url+"\")'>";
    document.getElementById('ad').innerHTML=content;
  });
}
function move_phone_app(phone){
  //window.parent.postMessage('{"title":"phone","phone":"'+phone+'"}',"*");
}
function move_top(){
  $('html,body').animate({scrollTop:0},100);
}
function move_ad(url){
  window.parent.postMessage('{"title":"ad","ad":"'+url+'"}',"*");
}
window.onload=function(){
  get_phoneting_data();
  get_phoneting_ad();
}
