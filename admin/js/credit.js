function append(th) {
	    	if ($(th).attr("class") =="reson") {
	    		$(th).css({"background-color":"rgb(197,63,63)","color":"white","border-color":"rgb(197,63,63)"}).addClass("1");
	    		$(".tr33").slideDown("fast");
	    	}else{
	    		$(th).css({"background-color":"white","color":"rgb(102,102,102)","border-color":"rgb(201,197,197)"}).removeClass("1");
	    		$(".tr33").slideUp("fast");
	    	}
}
//顶部导航切换
    function tab(classname) {
        var classname = classname;
        $("." + classname).show().siblings().not(".tr").hide();
        $(".right").show();
        /*$(".tr").show();*/
    }
    //右侧列表切换
    function tab_change(classname){
        var classname = classname;
        $("." + classname).show().siblings().hide();
    }
 function se(){
            var ul = $(".select ul");
            if (ul.css("display") == "none") {
                ul.slideDown("fast");
            } else {
                ul.slideUp("fast");
            }
            /*$(".selectcheck").blur(function(){
                ul.slideUp("fast");
            });*/
    }
    function checked(x){
        var x = x;
        var tt = $(x).html();
            $(".selectcheck").val(tt);
            $(".select ul").hide();
    }

 /*var xiala = {
	//城市选择显示
	se : function(){

	},checked:function(){

	}*/

function changecolor(){
    $(".right_con_chil tr:even").not(".table_top").css("background-color","rgb(247,247,247)");
    $(".right_con_c tr:even").not(".table_top").css("background-color","rgb(247,247,247)");
    $(".right_con_ch tr:even").not(".table_top").css("background-color","rgb(247,247,247)");
    $(".qq tr:even").not(".table_top").css("background-color","rgb(247,247,247)");
    $(".qqq tr:even").not(".table_top").css("background-color","rgb(247,247,247)");
}