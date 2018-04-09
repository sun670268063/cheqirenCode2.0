function tab(arg) {
    var arg=arg;
    $("."+arg).show().siblings().hide();
}
function change(arg){
	var select = $(arg);
	select.change(function(){
		$(select).children("option.choice").remove();
		});
}
function la(){
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 0,
	  skin: 'layui-layer-nobg', //没有背景色
	  shadeClose: true,
	  moveType: 1,
	  area:'700px',
	  content: $('.tong')
	});
}
 function bbimg(o){ 
                        var zoom=parseInt(o.style.zoom, 10)||100;
                        zoom+=event.wheelDelta/12;
                        if (zoom>0) o.style.zoom=zoom+'%';
                        return false;
                }
function ShowHide(tt){
	var tt = $("."+tt);
		if (tt.attr("class") == 'fuceng') {
		tt.slideDown("fast").addClass("q");
		$(".trans").addClass("ccc");
		} else{
			tt.slideUp("fast").removeClass("q");
			$(".trans").removeClass("ccc");
		}
}
