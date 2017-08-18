var fixed=0;
let count=10;
let char_count;
var line_right
function getTextLength(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length == 6) {
            len++;
        }
        len++;
    }
    return len;
}
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
      line+='" width="350" height="350"></div><div id=line_right style="width:'+line_right+'px;">';
      line+='<div class="line_left_title line_left_left_margin line_left_right_margin">';
      //title
      line+=obj[i].title;
      line+='</div><div class="line_left_text line_left_left_margin line_left_right_margin">';
      //text
      var white_space=obj[i].text.match(/\s/g || []).length+obj[i].text.match(/\./g || []).length;
      if(obj[i].text.length-white_space/2>char_count*3){
        obj[i].text=obj[i].text.substring(0,char_count*3+white_space/2)+"...";
      }
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
    var content="<img class=ad_box src='ad/"+obj[x].img+"' onclick='move_ad(\""+obj[x].url+"\")'>";
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
function get_char_count(){
  var body_width=$('body').width();
  var right_width=body_width*60/100-40;
  char_count=right_width/32;
}
function set_line_right_size(){
  line_right=$('body').width()-350-20;
}
window.onload=function(){
  get_char_count();
  set_line_right_size();
  get_phoneting_data();
  get_phoneting_ad();
}
