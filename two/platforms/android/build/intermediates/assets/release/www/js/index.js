function calling(phone){

}
function ad(url){
  window.plugins.webintent.startActivity({
    action: window.plugins.webintent.ACTION_VIEW,
    url: url},
    function () {},
    function () { alert('Failed to open URL via Android Intent'); }
  );
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener("backbutton", onBackKeyDown, false);
    },
    onDeviceReady: function() {
      document.addEventListener('deviceready', function(){

      }, false);
      window.onmessage=function(e){
        if(e.data==""){
        }else{
          var obj=JSON.parse(e.data);
          if(obj.title=="phone"){
            calling(obj.phone);
          }else if(obj.title=="ad"){
            ad(obj.ad);
          }
        }
      }
    }
};

app.initialize();
